'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setErrorMsg('有効なメールアドレスを入力してください。');
      setPassword('');
      return;
    }

    if (!email || !password) {
      setErrorMsg('メールアドレスとパスワードを入力してください。');
      setPassword('');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data?.session) {
      console.error('ログインエラー:', error?.message);
      setErrorMsg('メールアドレスまたはパスワードが正しくありません。');
      setPassword('');
      return;
    }

    // ログイン成功
    router.push('/home');
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <h1>ログイン</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <button onClick={handleLogin} style={{ width: '100%', padding: '0.5rem' }}>
        ログイン
      </button>
      {errorMsg && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMsg}</p>}
    </div>
  );
}