'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import AuthGuard from '@/components/AuthGuard';
import LogoutButton from '@/components/LogoutButton';

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        console.error('認証ユーザー取得エラー:', authError?.message);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('users')
        .select('user_id, first_name, last_name, role:role_id(role_name)');

      if (error) {
        console.error('ユーザー情報取得エラー:', error.message);
      } else {
        setUsers(data || []);
      }

      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <AuthGuard>
      <main style={{ padding: '2rem' }}>
        <h1>ユーザー一覧</h1>
        {loading ? (
          <p>読み込み中...</p>
        ) : users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.user_id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <div>苗字: {user.last_name ?? '未設定'}</div>
                <div>名前: {user.first_name ?? '未設定'}</div>
                <div>役割: {user.role?.role_name ?? '未設定'}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>ユーザー情報が見つかりませんでした。</p>
        )}
        <LogoutButton />
      </main>
    </AuthGuard>
  );
}