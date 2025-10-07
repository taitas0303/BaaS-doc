'use client';

import Link from 'next/link';
import Image from 'next/image';
import LogoutButton from '@/components/LogoutButton';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between items-center">
      {/* アプリロゴ（画像 + テキスト） */}
        <a href="/home">
            <img src="/logo.png" alt="AppLogo" width={120} height={40} />
        </a>

      {/* ログアウトボタン */}
        <LogoutButton />
    </header>
  );
}