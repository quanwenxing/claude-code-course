import SectionHeader from './ui/SectionHeader'
import PricingCard from './ui/PricingCard'
import PaymentMethodCard from './ui/PaymentMethodCard'

export default function Pricing() {
  const pricingPlans = [
    {
      name: "ベーシックプラン",
      originalPrice: 198000,
      price: 98000,
      description: "個人学習者向けの基本プラン",
      features: [
        "12週間の完全カリキュラム",
        "動画講義（40時間以上）",
        "実践課題とフィードバック",
        "基本的な質問サポート",
        "修了証明書の発行",
        "6ヶ月間のアーカイブアクセス"
      ],
      isPopular: false,
      badge: null
    },
    {
      name: "プレミアムプラン",
      originalPrice: 398000,
      price: 198000,
      description: "手厚いサポートで確実にスキルアップ",
      features: [
        "ベーシックプランの全内容",
        "1対1メンタリング（月2回）",
        "24時間以内の質問回答保証",
        "個別プロジェクトレビュー",
        "キャリア相談サポート",
        "12ヶ月間のアーカイブアクセス",
        "専用Slackコミュニティ参加",
        "追加教材とワークショップ"
      ],
      isPopular: true,
      badge: "最も人気"
    },
    {
      name: "エンタープライズプラン",
      originalPrice: 598000,
      price: 398000,
      description: "チーム・企業向けの包括的プラン",
      features: [
        "プレミアムプランの全内容",
        "チーム向けカスタマイズ研修",
        "企業専用のワークショップ",
        "導入コンサルティング",
        "無制限の技術サポート",
        "永続的なアーカイブアクセス",
        "カスタム開発支援",
        "継続的なアップデート提供"
      ],
      isPopular: false,
      badge: "企業推奨"
    }
  ]

  const paymentMethods = [
    {
      title: "一括払い",
      description: "最もお得な支払い方法",
      discount: "追加10%割引",
      icon: "💳"
    },
    {
      title: "分割払い（3回）",
      description: "負担を軽減した分割支払い",
      discount: "手数料無料",
      icon: "📅"
    },
    {
      title: "分割払い（6回）",
      description: "月々の支払いを抑えたい方に",
      discount: "手数料3%",
      icon: "📊"
    }
  ]

  const guarantees = [
    {
      title: "30日間返金保証",
      description: "満足いただけない場合は全額返金",
      icon: "🛡️"
    },
    {
      title: "スキルアップ保証",
      description: "効果が実感できない場合は再受講無料",
      icon: "📈"
    },
    {
      title: "就職・転職サポート",
      description: "キャリアアップを全力でサポート",
      icon: "🎯"
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="料金プラン"
          subtitle="あなたの学習スタイルと目標に合わせた最適なプランをお選びください"
        />

        {/* Early Bird Notice */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg">
            <span className="w-3 h-3 bg-yellow-300 rounded-full mr-3 animate-pulse"></span>
            <span className="font-bold">限定特価キャンペーン実施中！50%OFF（残り7日間）</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              お支払い方法
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <PaymentMethodCard
                key={index}
                method={method}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              安心の3つの保証
            </h3>
            <p className="text-green-100 text-lg">
              あなたの学習をリスクなくサポートします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h4 className="text-xl font-bold mb-2">{guarantee.title}</h4>
                <p className="text-green-100">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              今すぐ始めて、未来の自分に投資しませんか？
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              12週間後、あなたの開発スキルは劇的に変わっています
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                プレミアムプランで申し込む
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
                無料相談を予約する
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              ※ クレジットカード情報の入力は不要です
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}