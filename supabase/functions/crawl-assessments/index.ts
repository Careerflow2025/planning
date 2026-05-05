// Supabase Edge Function: crawl-assessments
// Crawls council planning portals for example assessments

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CrawlRequest {
  lpa_code: string;
  portal_url: string;
  assessment_type_id?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const body: CrawlRequest = await req.json();
    const { lpa_code, portal_url, assessment_type_id } = body;

    // Create crawler job
    const { data: job } = await supabase
      .from('crawler_jobs')
      .insert({
        source_type: 'planning_portal',
        target_url: portal_url,
        lpa_code,
        status: 'running',
        last_run_at: new Date().toISOString(),
      })
      .select()
      .single();

    // Fetch the planning portal page
    const response = await fetch(portal_url);
    if (!response.ok) {
      await updateJobStatus(supabase, job!.id, 'failed', { error: `HTTP ${response.status}` });
      return new Response(
        JSON.stringify({ error: `Failed to fetch: ${response.status}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = await response.text();

    // Extract document links from planning portal
    const documentLinks = extractDocumentLinks(html, portal_url);

    let processedCount = 0;

    // Process each document link (limit to 20 per run)
    for (const link of documentLinks.slice(0, 20)) {
      try {
        // Check if already ingested
        const { data: existing } = await supabase
          .from('example_assessments')
          .select('id')
          .eq('source_url', link.url)
          .limit(1);

        if (existing && existing.length > 0) continue;

        // Fetch document content
        const docResponse = await fetch(link.url);
        if (!docResponse.ok) continue;

        const content = await docResponse.text();
        if (content.length < 200) continue;

        // Generate embedding
        const embedding = await generateEmbedding(
          `${link.title}\n\n${content.slice(0, 1500)}`
        );

        await supabase.from('example_assessments').insert({
          assessment_type_id,
          lpa_code,
          development_type: link.developmentType,
          source_url: link.url,
          planning_ref: link.planningRef,
          outcome: link.outcome,
          section_name: link.title,
          content: content.slice(0, 5000),
          metadata: { crawled_from: portal_url, crawled_at: new Date().toISOString() },
          embedding,
        });

        processedCount++;
      } catch {
        // Skip failed documents, continue crawling
      }
    }

    // Update job
    const nextRun = new Date();
    nextRun.setDate(nextRun.getDate() + 30);

    await updateJobStatus(supabase, job!.id, 'completed', {
      documents_found: documentLinks.length,
      documents_processed: processedCount,
      crawled_at: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        documents_found: documentLinks.length,
        documents_processed: processedCount,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

interface DocumentLink {
  url: string;
  title: string;
  planningRef?: string;
  developmentType?: string;
  outcome?: string;
}

function extractDocumentLinks(html: string, baseUrl: string): DocumentLink[] {
  const links: DocumentLink[] = [];
  const linkPattern = /<a[^>]+href="([^"]*)"[^>]*>([^<]*)<\/a>/gi;

  let match;
  while ((match = linkPattern.exec(html)) !== null) {
    const href = match[1];
    const title = match[2].trim();

    // Look for planning document links
    if (
      href.match(/\.(pdf|doc|docx)$/i) ||
      title.match(/(planning\s+statement|flood\s+risk|transport|heritage|design\s+and\s+access)/i)
    ) {
      const fullUrl = href.startsWith('http') ? href : new URL(href, baseUrl).toString();
      links.push({
        url: fullUrl,
        title,
      });
    }
  }

  return links;
}

async function updateJobStatus(
  supabase: ReturnType<typeof createClient>,
  jobId: string,
  status: string,
  resultSummary: Record<string, unknown>
) {
  const nextRun = new Date();
  nextRun.setDate(nextRun.getDate() + 30);

  await supabase
    .from('crawler_jobs')
    .update({
      status,
      next_run_at: status === 'completed' ? nextRun.toISOString() : null,
      result_summary: resultSummary,
    })
    .eq('id', jobId);
}

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
    },
    body: JSON.stringify({
      model: 'text-embedding-3-large',
      input: text,
      dimensions: 1024,
    }),
  });

  const data = await response.json();
  return data.data[0].embedding;
}
