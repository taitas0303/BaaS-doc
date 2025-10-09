'use client';

import Header from '@/components/Header';
import AuthGuard from '@/components/AuthGuard';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/BackButton';

export default function PlayRecordPage() {
  const router = useRouter();

  const navigateToRegister = () => {
    router.push('/play-record/register');
  };

  return (
    <AuthGuard>
      <Header />
      <BackButton label='前の画面に戻る' />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">プレイ記録登録</h1>
        <p>ここでプレイ記録を登録できます。</p>
        <button
          onClick={navigateToRegister}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          新規登録へ
        </button>
      </main>
    </AuthGuard>
  );
}