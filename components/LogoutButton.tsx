'use client';

import { supabase } from '@/lib/supabaseClient';

export default function LogoutButton() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('ログアウトエラー:', error.message);
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.5rem 0.75rem',
        backgroundColor: '#888888',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '0.875rem',
        height: '40px', // ロゴ画像の高さと合わせる
        cursor: 'pointer',
      }}
    >
      ログアウト
    </button>
  );
}