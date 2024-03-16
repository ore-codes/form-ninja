import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

const options: SupabaseClientOptions<'public'> = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  options
);

export { supabase };
