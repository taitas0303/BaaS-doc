'use client';

import { useRouter } from 'next/navigation';

type BackButtonProps = {
  label?: string;
};

export default function BackButton({ label = '戻る' }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
    >
      {label}
    </button>
  );
}
