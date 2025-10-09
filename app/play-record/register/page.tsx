'use client';

import Header from '@/components/Header';
import AuthGuard from '@/components/AuthGuard';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/BackButton';

export default function RegisterPage() {
  return (
    <AuthGuard>
      <Header />
      <BackButton label='前の画面に戻る' />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">新規登録</h1>
        <p>ここで新しいユーザーやプレイ記録を登録できます。</p>

        {/* 登録フォームのプレースホルダー */}
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <p className="text-gray-600">※ 登録フォームはここに表示されます。</p>
        </div>
      </main>
    </AuthGuard>
  );
}
