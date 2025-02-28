import './globals.css';
import { Providers } from './providers';
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

export const metadata = {
  title: '心ケアクリニック - 安心と信頼のメンタルケア空間',
  description: 'あなたの心の健康をサポートする専門クリニック。経験豊かな医師とカウンセラーが、一人ひとりに合わせたケアを提供します。',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
    <body>
    <Providers>
      <Header/>
      {/* 他のコンポーネント */}
      {children}
      <Footer/>
    </Providers>
    </body>
    </html>
  );
}