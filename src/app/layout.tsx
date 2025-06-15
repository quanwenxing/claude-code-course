import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Claude Code マスタークラス - AI開発ツールを学ぶ',
  description: 'Claude Codeを使った効率的な開発手法を学べる実践的な講座です。初心者から上級者まで対応したカリキュラムで、AI支援開発のスキルを身につけましょう。',
  keywords: 'Claude Code, AI開発, プログラミング講座, 開発効率化',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}