import BenefitCard from './ui/BenefitCard'
import SectionHeader from './ui/SectionHeader'

export default function Benefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "開発速度の劇的向上",
      description: "AI支援により従来の10倍の速度でコーディング。繰り返し作業を自動化し、クリエイティブな作業に集中できます。",
      metrics: "+900% 効率向上"
    },
    {
      icon: "🎯",
      title: "エラー率の大幅削減",
      description: "AIがリアルタイムでコードを分析し、バグを事前に検出。品質の高いコードを一貫して生産できます。",
      metrics: "-85% エラー削減"
    },
    {
      icon: "🚀",
      title: "最新技術への適応",
      description: "常に最新のベストプラクティスとフレームワークに対応。技術的負債を最小限に抑えた開発が可能です。",
      metrics: "100% 最新対応"
    },
    {
      icon: "👥",
      title: "チーム開発の最適化",
      description: "統一されたコーディング規約とドキュメント生成で、チーム全体の生産性が向上します。",
      metrics: "+300% チーム効率"
    },
    {
      icon: "🔒",
      title: "セキュリティ強化",
      description: "AIがセキュリティホールを自動検出し、安全なコードパターンを提案。企業レベルのセキュリティを実現。",
      metrics: "99.9% セキュア"
    },
    {
      icon: "📈",
      title: "キャリアアップ支援",
      description: "最先端のAI開発スキルを身につけ、市場価値の高いエンジニアとして成長できます。",
      metrics: "+50% 年収向上"
    }
  ]

  const learningOutcomes = [
    {
      category: "基礎スキル",
      skills: [
        "Claude Codeの完全マスター",
        "AI支援開発ワークフロー",
        "効率的なプロンプトエンジニアリング",
        "自動化されたコード生成"
      ]
    },
    {
      category: "実践スキル", 
      skills: [
        "複雑なプロジェクトの管理",
        "リファクタリングの自動化",
        "テスト駆動開発の実践",
        "パフォーマンス最適化"
      ]
    },
    {
      category: "プロフェッショナルスキル",
      skills: [
        "企業レベルのコード品質",
        "チーム開発のリーダーシップ",
        "技術選定と設計判断",
        "メンタリングとナレッジシェア"
      ]
    }
  ]

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="なぜClaude Codeを学ぶべきか"
          subtitle="AI支援開発は未来の標準です。今始めることで、圧倒的な競争優位性を獲得できます。"
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              metrics={benefit.metrics}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              受講後に身につくスキル
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              段階的なカリキュラムで、確実にスキルアップを実現します
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <h4 className="text-xl font-bold mb-4 text-center">
                    {outcome.category}
                  </h4>
                  <ul className="space-y-3">
                    {outcome.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-50">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Showcase */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              投資対効果（ROI）
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-yellow-300 mb-2">12週間</div>
                <div className="text-green-100 text-lg">学習期間</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-yellow-300 mb-2">生涯</div>
                <div className="text-green-100 text-lg">活用期間</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-yellow-300 mb-2">∞</div>
                <div className="text-green-100 text-lg">価値創造</div>
              </div>
            </div>
            <p className="text-xl text-green-100 mt-8 max-w-3xl mx-auto">
              一度身につけたスキルは、あなたのキャリア全体を通じて価値を生み続けます
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}