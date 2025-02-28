'use client';

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // lucide-reactからアイコンをインポート

export function ThemeProvider({ children }: { children: ReactNode }) {
  // ハイドレーションミスマッチを防ぐためのクライアントサイドレンダリング対策
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // マウントされるまでは何も表示しない
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

// ThemeToggleコンポーネント - ダーク/ライトモード切り替え用
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // next-themesのuseThemeをインポートして使用
  const { resolvedTheme, setTheme: nextSetTheme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
    setTheme(resolvedTheme as 'light' | 'dark' || 'light');
  }, [resolvedTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => nextSetTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-light-gray dark:hover:bg-charcoal-gray transition-colors"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

// カスタムhookとしてuseThemeをエクスポート
export const useTheme = useNextTheme;