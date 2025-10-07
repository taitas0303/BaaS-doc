import Header from '@/components/Header';
import AuthGuard from '@/components/AuthGuard';

export default function HomePage() {
  return (
    <AuthGuard>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">ホーム画面</h1>
        <p>ようこそ、MyAppへ！ここにダッシュボードや機能へのリンクを配置できます。</p>
      </main>
    </AuthGuard>
  );
}