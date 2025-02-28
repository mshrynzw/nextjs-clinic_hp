"use client"

import React, { useState } from 'react';
import {
  Menu, X, Calendar, MessageSquare, Phone, Clock, MapPin,
  ChevronDown, ArrowRight, Sun, Moon, Twitter, Send
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <main className="pt-20">

        {/* Features Section */}
        <section className="py-16 bg-ivory-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-deep-teal dark:text-soft-teal">
              クリニックの特徴
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <Calendar className="text-soft-teal" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">柔軟な予約システム</h3>
                <p>オンラインで24時間予約可能。急なキャンセルにも対応しています。</p>
              </div>
              <div className="feature-card">
                <div className="icon-wrapper">
                  <MessageSquare className="text-soft-teal" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">オンライン相談</h3>
                <p>自宅からでも専門医に相談できる、便利なオンライン診療を提供しています。</p>
              </div>
              <div className="feature-card">
                <div className="icon-wrapper">
                  <Phone className="text-soft-teal" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">LINE/SMS連携</h3>
                <p>予約確認や変更のお知らせをLINEやSMSで受け取れます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-light-gray dark:bg-charcoal-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-deep-teal dark:text-soft-teal">
              新着情報
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="news-card">
                <div className="flex items-center mb-2">
                  <span className="text-rose-pink font-semibold">2025.04.15</span>
                  <span className="ml-4 px-2 py-1 bg-sunshine-yellow text-deep-teal text-xs rounded-full">お知らせ</span>
                </div>
                <h3 className="text-lg font-bold mb-2">ゴールデンウィーク診療日のお知らせ</h3>
                <p className="text-sm">ゴールデンウィーク期間中の診療日についてご案内いたします。5月3日〜5月5日はお休みとなります。</p>
              </div>
              <div className="news-card">
                <div className="flex items-center mb-2">
                  <span className="text-rose-pink font-semibold">2025.04.01</span>
                  <span className="ml-4 px-2 py-1 bg-soft-teal text-white text-xs rounded-full">新着</span>
                </div>
                <h3 className="text-lg font-bold mb-2">新しいカウンセラーが加わりました</h3>
                <p className="text-sm">4月より、児童精神科専門の佐藤医師が診療を開始いたします。お子様の心の健康についてもご相談ください。</p>
              </div>
              <div className="news-card">
                <div className="flex items-center mb-2">
                  <span className="text-rose-pink font-semibold">2025.03.20</span>
                  <span className="ml-4 px-2 py-1 bg-sunshine-yellow text-deep-teal text-xs rounded-full">お知らせ</span>
                </div>
                <h3 className="text-lg font-bold mb-2">オンライン診療の予約枠を増設しました</h3>
                <p className="text-sm">ご要望にお応えして、平日夜間のオンライン診療枠を増設いたしました。お仕事帰りにもご利用いただけます。</p>
              </div>
              <div className="news-card">
                <div className="flex items-center mb-2">
                  <span className="text-rose-pink font-semibold">2025.03.10</span>
                  <span className="ml-4 px-2 py-1 bg-soft-teal text-white text-xs rounded-full">新着</span>
                </div>
                <h3 className="text-lg font-bold mb-2">「心の健康」セミナーを開催します</h3>
                <p className="text-sm">4月15日(土)14:00より、当クリニックにて「日常生活でできるストレス管理」をテーマにセミナーを開催します。</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="btn-secondary">
                お知らせ一覧へ
              </button>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section className="py-16 bg-ivory-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-teal dark:text-soft-teal">
                    診療予約
                  </h2>
                  <p className="mb-6">
                    初診・再診に関わらず、ご予約の上ご来院ください。
                    オンライン診療も行っております。
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Clock className="text-soft-teal mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-bold">診療時間</h4>
                        <p className="text-sm">平日: 9:00〜18:00<br />土曜: 9:00〜13:00<br />休診日: 日曜・祝日</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-soft-teal mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-bold">所在地</h4>
                        <p className="text-sm">〒100-0001<br />東京都千代田区1-1-1<br />心ケアビル3階</p>
                      </div>
                    </div>
                  </div>
                  <button className="btn-primary w-full">
                    予約する
                  </button>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="クリニック受付の様子"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Twitter Feed Section */}
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
                  <div className="twitter-feed-item">
                    <div className="flex items-center mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                        alt="プロフィール画像"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-bold">心ケアクリニック</p>
                        <p className="text-xs text-gray-500">@kokoro_care • 2時間前</p>
                      </div>
                    </div>
                    <p className="mb-3">本日のオンラインセミナー「不安を和らげる呼吸法」は19時から開始です。参加URLは事前登録いただいた方にメールでお送りしています。 #メンタルヘルス #呼吸法</p>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>♥ 24</span>
                      <span>↺ 8</span>
                      <span>💬 3</span>
                    </div>
                  </div>
                  <hr className="my-4 border-light-gray dark:border-gray-700" />
                  <div className="twitter-feed-item">
                    <div className="flex items-center mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                        alt="プロフィール画像"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-bold">心ケアクリニック</p>
                        <p className="text-xs text-gray-500">@kokoro_care • 1日前</p>
                      </div>
                    </div>
                    <p className="mb-3">【新しい記事を公開】「春の気分の変化とその対処法」春は新生活のスタートで心が不安定になりやすい時期です。自分でできるケア方法についてまとめました。詳しくはプロフィールのリンクから。 #春 #メンタルケア</p>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>♥ 42</span>
                      <span>↺ 15</span>
                      <span>💬 7</span>
                    </div>
                  </div>
                  <hr className="my-4 border-light-gray dark:border-gray-700" />
                  <div className="twitter-feed-item">
                    <div className="flex items-center mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                        alt="プロフィール画像"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-bold">心ケアクリニック</p>
                        <p className="text-xs text-gray-500">@kokoro_care • 3日前</p>
                      </div>
                    </div>
                    <p className="mb-3">4月のグループセッションの予約を開始しました。今月のテーマは「職場でのコミュニケーションストレス」です。少人数制で安心して参加いただけます。ご予約はお電話またはWebから。 #グループセラピー</p>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>♥ 31</span>
                      <span>↺ 12</span>
                      <span>💬 5</span>
                    </div>
                  </div>
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
                    <form>
                      <div className="mb-4">
                        <label htmlFor="name" className="block mb-1 font-medium">お名前</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-light-gray dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-teal"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-medium">メールアドレス</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-light-gray dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-teal"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 font-medium">メッセージ</label>
                        <textarea
                          id="message"
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

        {/* Gallery Section */}
        <section className="py-16 bg-ivory-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-deep-teal dark:text-soft-teal">
              院内の様子
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1629196914168-3100e954a2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="待合室"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="カウンセリングルーム"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="リラクゼーションスペース"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="診察室"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-40">
        <div className="flex justify-around">
          <button
            className={`flex flex-col items-center py-2 px-4 ${activeTab === 'home' ? 'text-soft-teal' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-xs mt-1">ホーム</span>
          </button>
          <button
            className={`flex flex-col items-center py-2 px-4 ${activeTab === 'reservation' ? 'text-soft-teal' : ''}`}
            onClick={() => setActiveTab('reservation')}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">予約</span>
          </button>
          <button
            className={`flex flex-col items-center py-2 px-4 ${activeTab === 'online' ? 'text-soft-teal' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            <MessageSquare size={20} />
            <span className="text-xs mt-1">オンライン</span>
          </button>
          <button
            className={`flex flex-col items-center py-2 px-4 ${activeTab === 'contact' ? 'text-soft-teal' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <Phone size={20} />
            <span className="text-xs mt-1">お問い合わせ</span>
          </button>
        </div>
      </div>

      {/* Chat Bot */}
      <div className="fixed bottom-20 md:bottom-8 right-8 z-50">
        <button className="bg-soft-teal text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-deep-teal transition-colors">
          <MessageSquare size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;