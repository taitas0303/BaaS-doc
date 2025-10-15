'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        console.warn('ログアウト処理をスキップ：セッションが存在しません');
        router.push('/login');
        return;
      }

      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('ログアウトエラー:', error.message);
      } else {
        router.push('/login');
      }
    } catch (err) {
      console.error('予期せぬエラー:', err);
    }
  };

  return (
    <button onClick={handleLogout} style={{ /* スタイル省略 */ }}>
      ログアウト
    </button>
  );
}