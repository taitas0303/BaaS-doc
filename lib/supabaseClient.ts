import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,       // セッションをローカルストレージに保存
    autoRefreshToken: true,     // トークンの期限切れ時に自動更新
    detectSessionInUrl: true,   // OAuthなどでURLにセッションが含まれる場合に検出
  },
});