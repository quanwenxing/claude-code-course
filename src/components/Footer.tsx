import ContactInfo from './ui/ContactInfo'
import SocialLinks from './ui/SocialLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "講座内容", href: "#course-content" },
    { label: "受講メリット", href: "#benefits" },
    { label: "講師紹介", href: "#instructor" },
    { label: "料金プラン", href: "#pricing" },
    { label: "よくある質問", href: "#faq" }
  ]

  const supportLinks = [
    { label: "お問い合わせ", href: "#contact" },
    { label: "無料相談予約", href: "#consultation" },
    { label: "技術サポート", href: "#support" },
    { label: "コミュニティ", href: "#community" },
    { label: "ブログ", href: "#blog" }
  ]

  const legalLinks = [
    { label: "利用規約", href: "#terms" },
    { label: "プライバシーポリシー", href: "#privacy" },
    { label: "特定商取引法", href: "#commerce-law" },
    { label: "返金ポリシー", href: "#refund" }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CC</span>
              </div>
              <span className="text-xl font-bold">Claude Code マスタークラス</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI支援開発の最前線で活躍するエンジニアを育成する専門教育機関です。
              最新技術と実践的なスキルで、あなたのキャリアを次のレベルへ。
            </p>

            <ContactInfo />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-300">クイックリンク</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-300">サポート</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300">最新情報をお届け</h3>
            
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                新しい講座情報やAI開発の最新トレンドをお届けします
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="メールアドレス"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                  登録
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-wide">法的情報</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <SocialLinks />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm">
              © {currentYear} Claude Code マスタークラス. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with ❤️ for developers by developers
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}