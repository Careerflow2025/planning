import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Cookie-free anonymous Supabase client for the public blog. It reads
// `blog_posts` only (RLS: anon can select published rows). Server components
// and metadata routes call this; it never touches auth cookies, so blog pages
// stay statically renderable / ISR-able.
//
// Returns `null` when the public env vars are absent (e.g. a CI build without
// secrets) so callers can render an empty state instead of throwing at build.

let cachedClient: SupabaseClient | null = null;
let cachedKey = "";

export function getBlogClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  const key = `${url}|${anonKey}`;
  if (cachedClient && cachedKey === key) return cachedClient;

  cachedClient = createClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: { "x-client-info": "planscope-blog" },
    },
  });
  cachedKey = key;
  return cachedClient;
}
