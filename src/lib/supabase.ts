
// --- start replacement ---
import type { SupabaseClient } from '@supabase/supabase-js';

export const supabase: SupabaseClient | null = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Helper to get supabase client or throw a clear error.
 * Use getSupabase() when you want to fail fast if supabase isn't configured.
 */
export function getSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error('Supabase client is not configured. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
  }
  return supabase;
}
// --- end replacement ---

