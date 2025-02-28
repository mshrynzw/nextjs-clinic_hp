'use client';

import { Twitter, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

type Tweet = {
  id: string;
  text: string;
  created_at: string;
  likes: number;
  retweets: number;
  replies: number;
};

export default function TwitterSection() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // 実際の実装ではTwitter APIからデータを取得
    // ここではモックデータを使用
    const mockTweets = [
      {
        id: '1',
        text: '本日のオンラインセミナー「不安を和らげる呼吸法」は19時から開始です。参加URLは事前登録いただいた方にメールでお送りしています。 #メンタルヘルス #呼吸法',
        created_at: '2時間前',
        likes: 24,
        retweets: 8,
        replies: 3
      },
      {
        id: '2',
        text: '【新しい記事を公開】「春の気分の変化とその対処法」春は新生活のスタートで心が不安定になりやすい時期です。自分でできるケア方法についてまとめました。詳しくはプロフィールのリンクから。 #春 #メンタルケア',
        created_at: '1日前',
        likes: 42,
        retweets: 15,
        replies: 7
      },
      {
        id: '3',
        text: '4月のグループセッションの予約を開始しました。今月のテーマは「職場でのコミュニケーションストレス」です。少人数制で安心して参加いただけます。ご予約はお電話またはWebから。 #グループセラピー',
        created_at: '3日前',
        likes: 31,
        retweets: 12,
        replies: 5
      }
    ];

    setTweets(mockTweets);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Supabaseへのお問い合わせデータ送信処理
    console.log('送信データ:', formData);
    // フォームリセット
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-light-gray dark:bg-charcoal-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-teal dark:text-soft-teal">
          最新情報
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Twitter className="text-soft-teal mr-2" size={24} />
              公式X(Twitter)
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 h-96 overflow-y-auto">
              {tweets.map(tweet => (
                <div key={tweet.id} className="twitter-feed-item mb-4">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="プロフィール画像"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-bold">心ケアクリニック</p>
                      <p className="text-xs text-gray-500">@kokoro_care • {tweet.created_at}</p>
                    </div>
                  </div>
                  <p className="mb-3">{tweet.text}</p>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>♥ {tweet.likes}</span>
                    <span>↺ {tweet.retweets}</span>
                    <span>💬 {tweet.replies}</span>
                  </div>
                  {tweets.indexOf(tweet) < tweets.length - 1 && (
                    <hr className="my-4 border-light-gray dark:border-gray-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Twicas配信</h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="mb-4">次回の配信は4月20日(土) 20:00〜</p>
                  <p className="font-bold mb-2">テーマ：「睡眠の質を高める方法」</p>
                  <button className="btn-secondary">
                    配信を見る
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium">お名前</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-light-gray dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-teal"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">メールアドレス</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-light-gray dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-teal"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium">メッセージ</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-light-gray dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-teal"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center">
                    送信する <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}