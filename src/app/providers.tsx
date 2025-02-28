// src/app/providers.tsx
'use client';

import { ThemeProvider } from '@/providers/ThemeProvider';
// SupabaseProviderのインポートを削除

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  );
}