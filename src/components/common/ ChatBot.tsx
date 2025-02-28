'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const supabase = useSupabaseClient();

  useEffect(() => {
    // チャットボットが開かれたときに初期メッセージを表示
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: 'こんにちは！心ケアクリニックのチャットボットです。どのようなことでお悩みですか？',
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    // 新しいメッセージが追加されたときに自動スクロール
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // ユーザーメッセージを追加
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // 実際の実装ではボットの応答を取得するAPIを呼び出す
    // ここではモック応答を使用
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    // 簡単なキーワード応答のモック実装
    const input = userInput.toLowerCase();

    if (input.includes('予約') || input.includes('アポイント')) {
      return '予約はオンラインまたはお電話（03-1234-5678）で承っております。予約ページに移動しますか？';
    } else if (input.includes('時間') || input.includes('営業')) {
      return '診療時間は平日9:00〜18:00、土曜9:00〜13:00です。日曜・祝日は休診となります。';
    } else if (input.includes('オンライン')) {
      return 'オンライン診療は予約制となっております。初診の方もオンライン診療が可能です。詳しくはオンライン診療ページをご覧ください。';
    } else {
      return 'ご質問ありがとうございます。詳細な情報は03-1234-5678までお電話いただくか、お問い合わせフォームよりご連絡ください。';
    }
  };

  return (
    <>
      {/* チャットボタン */}
      <div className="fixed bottom-20 md:bottom-8 right-8 z-50">
        <button
          className="bg-soft-teal text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-deep-teal transition-colors"
          onClick={toggleChat}
        >
          <MessageSquare size={24} />
        </button>
      </div>

      {/* チャットウィンドウ */}
      {isOpen && (
        <div className="fixed bottom-24 md:bottom-28 right-8 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col max-h-[500px]">
          <div className="bg-soft-teal p-4 flex justify-between items-center">
            <h3 className="text-white font-bold">心ケアクリニック チャット</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-teal-600 rounded-full p-1"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-3/4 rounded-lg p-3 ${
                    msg.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-charcoal-gray dark:text-ivory-white'
                      : 'bg-soft-teal text-white'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="メッセージを入力..."
              className="flex-1 rounded-l-lg border border-gray-300 dark:border-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-soft-teal dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={handleSend}
              className="bg-soft-teal text-white px-4 rounded-r-lg hover:bg-deep-teal"
            >
              送信
            </button>
          </div>
        </div>
      )}
    </>
  );
}