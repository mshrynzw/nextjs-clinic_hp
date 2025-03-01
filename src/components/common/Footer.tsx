import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* クリニック情報 */}
          <div className="space-y-4">
            <div className="text-deep-teal dark:text-soft-teal font-bold text-xl flex items-center">
              <span className="text-soft-teal">心</span>
              <span className="ml-1">ケアクリニック</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              〒123-4567<br />
              東京都○○区△△1-2-3<br />
              TEL: 03-1234-5678
            </p>
          </div>

          {/* 診療時間 */}
          <div className="space-y-4">
            <h3 className="font-bold text-deep-teal dark:text-soft-teal">診療時間</h3>
            <table className="text-sm w-full">
              <tbody>
                <tr>
                  <td className="py-1 text-gray-600 dark:text-gray-400">平日</td>
                  <td className="py-1 text-gray-600 dark:text-gray-400">9:00 - 18:00</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600 dark:text-gray-400">土曜</td>
                  <td className="py-1 text-gray-600 dark:text-gray-400">9:00 - 13:00</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600 dark:text-gray-400">休診日</td>
                  <td className="py-1 text-gray-600 dark:text-gray-400">日曜・祝日</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* クイックリンク */}
          <div className="space-y-4">
            <h3 className="font-bold text-deep-teal dark:text-soft-teal">クイックリンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-soft-teal dark:hover:text-soft-teal transition-colors">
                  診療案内
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-600 dark:text-gray-400 hover:text-soft-teal dark:hover:text-soft-teal transition-colors">
                  医師紹介
                </Link>
              </li>
              <li>
                <Link href="/access" className="text-gray-600 dark:text-gray-400 hover:text-soft-teal dark:hover:text-soft-teal transition-colors">
                  アクセス
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-soft-teal dark:hover:text-soft-teal transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div className="space-y-4">
            <h3 className="font-bold text-deep-teal dark:text-soft-teal">お問い合わせ</h3>
            <div className="space-y-2">
              <button className="btn-primary w-full">予約する</button>
              <Link 
                href="/contact" 
                className="block text-center text-sm text-gray-600 dark:text-gray-400 hover:text-soft-teal dark:hover:text-soft-teal transition-colors"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} 心ケアクリニック. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
