'use client';

import { supabase } from '@/lib/supabaseClient';

export default function LogoutButton() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('ログアウトエラー:', error.message);
    } else {
      window.location.href = '/login'; // ログアウト後の遷移先
    }
  };

  return (
    <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '4px' }}>
      ログアウト
    </button>
  );
}