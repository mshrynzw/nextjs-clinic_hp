'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';

type Announcement = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  category: string;
};

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const supabase = useSupabaseClient();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    // 実際の実装ではSupabaseからデータを取得
    // ここではモックデータを使用
    const mockData: Announcement[] = [
      {
        id: '1',
        title: 'ゴールデンウィーク診療日のお知らせ',
        content: 'ゴールデンウィーク期間中の診療日についてご案内いたします。5月3日〜5月5日はお休みとなります。',
        created_at: '2025-04-15',
        category: 'お知らせ'
      },
      {
        id: '2',
        title: '新しいカウンセラーが加わりました',
        content: '4月より、児童精神科専門の佐藤医師が診療を開始いたします。お子様の心の健康についてもご相談ください。',
        created_at: '2025-04-01',
        category: '新着'
      },
      {
        id: '3',
        title: 'オンライン診療の予約枠を増設しました',
        content: 'ご要望にお応えして、平日夜間のオンライン診療枠を増設いたしました。お仕事帰りにもご利用いただけます。',
        created_at: '2025-03-20',
        category: 'お知らせ'
      },
      {
        id: '4',
        title: '「心の健康」セミナーを開催します',
        content: '4月15日(土)14:00より、当クリニックにて「日常生活でできるストレス管理」をテーマにセミナーを開催します。',
        created_at: '2025-03-10',
        category: '新着'
      }
    ];

    setAnnouncements(mockData);

    if (sectionRef.current) {
      gsap.from('.news-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-light-gray dark:bg-charcoal-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-deep-teal dark:text-soft-teal">
          新着情報
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map(item => (
            <div key={item.id} className="news-card">
              <div className="flex items-center mb-2">
                <span className="text-rose-pink font-semibold">{item.created_at}</span>
                <span className={`ml-4 px-2 py-1 ${item.category === 'お知らせ' ? 'bg-sunshine-yellow text-deep-teal' : 'bg-soft-teal text-white'} text-xs rounded-full`}>
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="btn-secondary">
            お知らせ一覧へ
          </button>
        </div>
      </div>
    </section>
  );
}