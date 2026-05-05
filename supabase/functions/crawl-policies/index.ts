// Supabase Edge Function: crawl-policies
// Crawls council websites for local plan policies and ingests them

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CrawlRequest {
  lpa_code: string;
  local_plan_url: string;
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
    const { lpa_code, local_plan_url } = body;

    // Create a crawler job
    const { data: job } = await supabase
      .from('crawler_jobs')
      .insert({
        source_type: 'policy_doc',
        target_url: local_plan_url,
        lpa_code,
        status: 'running',
        last_run_at: new Date().toISOString(),
      })
      .select()
      .single();

    // Fetch the local plan page
    const response = await fetch(local_plan_url);
    if (!response.ok) {
      await supabase
        .from('crawler_jobs')
        .update({ status: 'failed', result_summary: { error: `HTTP ${response.status}` } })
        .eq('id', job!.id);

      return new Response(
        JSON.stringify({ error: `Failed to fetch: ${response.status}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = await response.text();

    // Extract policy text (basic HTML parsing)
    const policyText = extractPoliciesFromHtml(html);

    // Generate embeddings and store
    const chunks = chunkPolicies(policyText, lpa_code);

    if (chunks.length > 0) {
      const embeddings = await generateBatchEmbeddings(chunks.map(c => c.content));

      const records = chunks.map((chunk, i) => ({
        source: 'local_plan',
        lpa_code,
        title: chunk.title,
        reference: chunk.reference,
        content: chunk.content,
        effective_date: new Date().toISOString().split('T')[0],
        metadata: { crawled_from: local_plan_url },
        embedding: embeddings[i],
      }));

      await supabase.from('policy_documents').insert(records);
    }

    // Update job status
    const nextRun = new Date();
    nextRun.setDate(nextRun.getDate() + 90); // Re-check every 90 days

    await supabase
      .from('crawler_jobs')
      .update({
        status: 'completed',
        next_run_at: nextRun.toISOString(),
        result_summary: { policies_found: chunks.length, crawled_at: new Date().toISOString() },
      })
      .eq('id', job!.id);

    return new Response(
      JSON.stringify({ success: true, policies_ingested: chunks.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function extractPoliciesFromHtml(html: string): string {
  // Remove HTML tags, scripts, styles
  let text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return text;
}

interface PolicyChunk {
  title: string;
  reference: string;
  content: string;
}

function chunkPolicies(text: string, lpaCode: string): PolicyChunk[] {
  const chunks: PolicyChunk[] = [];
  const policyPattern = /(?:Policy\s+([A-Z]{1,5}\d{1,3}[A-Za-z]?)[\s:]+)([\s\S]*?)(?=Policy\s+[A-Z]{1,5}\d|$)/gi;

  let match;
  while ((match = policyPattern.exec(text)) !== null) {
    const reference = `Policy ${match[1]}`;
    const content = match[2].trim();

    if (content.length > 50) {
      chunks.push({
        title: `${lpaCode} Local Plan - ${reference}`,
        reference,
        content: `LPA: ${lpaCode}\n${reference}\n\n${content}`.slice(0, 2000),
      });
    }
  }

  // If no structured policies found, chunk by paragraphs
  if (chunks.length === 0) {
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 100);
    paragraphs.forEach((para, i) => {
      chunks.push({
        title: `${lpaCode} Local Plan - Section ${i + 1}`,
        reference: `Section ${i + 1}`,
        content: `LPA: ${lpaCode}\n\n${para.trim()}`.slice(0, 2000),
      });
    });
  }

  return chunks;
}

async function generateBatchEmbeddings(texts: string[]): Promise<number[][]> {
  const batchSize = 50;
  const allEmbeddings: number[][] = [];

  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
      },
      body: JSON.stringify({
        model: 'text-embedding-3-large',
        input: batch,
        dimensions: 1024,
      }),
    });

    const data = await response.json();
    const sorted = data.data
      .sort((a: { index: number }, b: { index: number }) => a.index - b.index)
      .map((d: { embedding: number[] }) => d.embedding);
    allEmbeddings.push(...sorted);
  }

  return allEmbeddings;
}
