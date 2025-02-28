'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, MessageSquare, Phone, Home } from 'lucide-react';

export default function MobileNavigation() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => {
    // パス名に基づいて初期アクティブタブを設定
    if (pathname === '/') return 'home';
    if (pathname.includes('/appointment')) return 'reservation';
    if (pathname.includes('/online')) return 'online';
    if (pathname.includes('/contact')) return 'contact';
    return 'home';
  });

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-40">
      <div className="flex justify-around">
        <Link
          href="/"
          className={`flex flex-col items-center py-2 px-4 ${activeTab === 'home' ? 'text-soft-teal' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <Home size={20} />
          <span className="text-xs mt-1">ホーム</span>
        </Link>

        <Link
          href="/appointment"
          className={`flex flex-col items-center py-2 px-4 ${activeTab === 'reservation' ? 'text-soft-teal' : ''}`}
          onClick={() => setActiveTab('reservation')}
        >
          <Calendar size={20} />
          <span className="text-xs mt-1">予約</span>
        </Link>

        <Link
          href="/online"
          className={`flex flex-col items-center py-2 px-4 ${activeTab === 'online' ? 'text-soft-teal' : ''}`}
          onClick={() => setActiveTab('online')}
        >
          <MessageSquare size={20} />
          <span className="text-xs mt-1">オンライン</span>
        </Link>

        <Link
          href="/contact"
          className={`flex flex-col items-center py-2 px-4 ${activeTab === 'contact' ? 'text-soft-teal' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <Phone size={20} />
          <span className="text-xs mt-1">お問い合わせ</span>
        </Link>
      </div>
    </div>
  );
}