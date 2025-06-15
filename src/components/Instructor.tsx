import SectionHeader from './ui/SectionHeader'
import InstructorCard from './ui/InstructorCard'
import TestimonialCard from './ui/TestimonialCard'

export default function Instructor() {
  const instructor = {
    name: "田中 智也",
    title: "AI開発エキスパート / Claude Code認定講師",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    experience: "15年",
    certifications: ["Claude Code Expert", "AWS Solutions Architect", "Google Cloud Professional"],
    achievements: [
      "Fortune 500企業でのAI導入コンサルティング実績50社以上",
      "オープンソースプロジェクトへの貢献（GitHub Stars 10k+）",
      "技術書籍3冊出版（累計販売数5万部）",
      "国際カンファレンスでの講演実績20回以上"
    ],
    specialties: [
      "AI支援開発",
      "クラウドアーキテクチャ",
      "DevOpsエンジニアリング",
      "チーム開発最適化"
    ]
  }

  const testimonials = [
    {
      name: "山田 花子",
      role: "フロントエンドエンジニア",
      company: "株式会社テックイノベーション",
      content: "田中さんの指導により、開発効率が3倍向上しました。Claude Codeの使い方だけでなく、チーム開発での活用方法まで学べて非常に有益でした。",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "佐藤 健太",
      role: "バックエンドエンジニア",
      company: "フリーランス",
      content: "複雑なシステム設計でのClaude Code活用法を学び、案件の品質が大幅に向上。クライアントからの評価も上がり、単価アップにも成功しました。",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "鈴木 美咲",
      role: "プロダクトマネージャー",
      company: "スタートアップ企業",
      content: "技術的な知識がなくても理解できる説明で、開発チームとのコミュニケーションが格段に改善されました。プロダクト開発のスピードが2倍になりました。",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <section id="instructor" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="講師紹介"
          subtitle="業界のトップエキスパートから直接学べる貴重な機会です"
        />

        {/* Instructor Profile */}
        <InstructorCard instructor={instructor} />

        {/* Teaching Philosophy */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              教育理念
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">1</span>
                  実践重視の学習
                </h4>
                <p className="text-gray-600">
                  理論だけでなく、実際のプロジェクトで使える技術を中心に指導します。現場で即戦力となるスキルの習得を目指します。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">2</span>
                  個別最適化指導
                </h4>
                <p className="text-gray-600">
                  受講生一人ひとりのレベルと目標に合わせたカスタマイズ指導で、確実なスキルアップをサポートします。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">3</span>
                  継続的サポート
                </h4>
                <p className="text-gray-600">
                  講座終了後も技術的な質問やキャリア相談に対応。長期的な成長をサポートします。
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "技術は手段であり、目的ではありません。AI支援開発を通じて、より創造的で価値のある開発に集中できる環境を作ることが私の使命です。"
                </blockquote>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    田
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">田中 智也</div>
                    <div className="text-gray-600 text-sm">講師</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              受講生の声
            </h3>
            <p className="text-lg text-gray-600">
              実際に講座を受講された方々からの生の声をお聞きください
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}