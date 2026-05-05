// Supabase Edge Function: monitor-policies
// Scheduled function to check for policy updates (NPPF, PPG, local plans)

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const results = {
      nppf_checked: false,
      local_plans_checked: 0,
      updates_found: 0,
    };

    // 1. Check NPPF for updates
    try {
      const nppfUrl = 'https://www.gov.uk/government/publications/national-planning-policy-framework--2';
      const response = await fetch(nppfUrl);
      const html = await response.text();

      // Check last-modified or publication date
      const dateMatch = html.match(/Published\s+(\d{1,2}\s+\w+\s+\d{4})/);
      if (dateMatch) {
        const { data: latestNppf } = await supabase
          .from('policy_documents')
          .select('effective_date')
          .eq('source', 'nppf')
          .order('effective_date', { ascending: false })
          .limit(1)
          .single();

        if (latestNppf) {
          const publishedDate = new Date(dateMatch[1]);
          const storedDate = new Date(latestNppf.effective_date);

          if (publishedDate > storedDate) {
            results.updates_found++;
            // Flag for re-ingestion
            await supabase.from('crawler_jobs').insert({
              source_type: 'policy_doc',
              target_url: nppfUrl,
              status: 'pending',
              next_run_at: new Date().toISOString(),
              result_summary: { reason: 'NPPF update detected', published: dateMatch[1] },
            });
          }
        }
      }
      results.nppf_checked = true;
    } catch {
      // NPPF check failed, continue
    }

    // 2. Check scheduled local plan crawl jobs
    const { data: pendingJobs } = await supabase
      .from('crawler_jobs')
      .select('*')
      .eq('status', 'pending')
      .lte('next_run_at', new Date().toISOString())
      .limit(10);

    if (pendingJobs) {
      results.local_plans_checked = pendingJobs.length;

      for (const job of pendingJobs) {
        await supabase
          .from('crawler_jobs')
          .update({ status: 'running', last_run_at: new Date().toISOString() })
          .eq('id', job.id);

        try {
          const response = await fetch(job.target_url);
          if (response.ok) {
            // Mark completed with next check in 30 days
            const nextRun = new Date();
            nextRun.setDate(nextRun.getDate() + 30);

            await supabase
              .from('crawler_jobs')
              .update({
                status: 'completed',
                next_run_at: nextRun.toISOString(),
                result_summary: { last_check: new Date().toISOString(), status: 'ok' },
              })
              .eq('id', job.id);
          }
        } catch {
          await supabase
            .from('crawler_jobs')
            .update({ status: 'failed', result_summary: { error: 'fetch_failed' } })
            .eq('id', job.id);
        }
      }
    }

    return new Response(JSON.stringify(results), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
