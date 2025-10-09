'use client';

import Header from '@/components/Header';
import AuthGuard from '@/components/AuthGuard';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const navigateToPlayRecord = () => {
    router.push('/play-record');
  };

  return (
    <AuthGuard>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">メニュー</h1>
        <p>ようこそ、MyAppへ！</p>

        <button
          onClick={navigateToPlayRecord}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          プレイ記録登録へ
        </button>
      </main>
    </AuthGuard>
  );
}
