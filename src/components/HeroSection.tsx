'use client'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-24 pb-16 hero-gradient text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                限定50名募集中
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Claude Code</span>
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  マスタークラス
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                AI開発ツールの革新的な使い方を学び、<br/>
                開発効率を<span className="font-bold text-yellow-300">10倍向上</span>させる実践講座
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">初心者から上級者まで対応した段階的カリキュラム</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">実際のプロジェクトを使ったハンズオン形式</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">永続サポートとコミュニティアクセス</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  今すぐ申し込む
                </button>
                <button
                  onClick={() => scrollToSection('course-content')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  詳細を見る
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Content - Code Preview */}
          <div className="lg:w-1/2">
            <div className="bg-gray-900 rounded-lg shadow-2xl p-6 border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">Claude Code Demo</span>
              </div>
              <div className="text-sm font-mono text-gray-300 space-y-2">
                <div className="text-green-400"># Claude Codeで効率的な開発</div>
                <div className="text-blue-400">claude: "新しいReactコンポーネントを作成して"</div>
                <div className="text-gray-500">→ 自動でファイル生成・テスト・ドキュメント作成</div>
                <div className="mt-4 text-purple-400"># AIが理解するコード構造</div>
                <div className="text-yellow-400">function&nbsp;<span className="text-white">createComponent</span>() &#123;</div>
                <div className="text-gray-400 ml-4">// AIが最適化を提案</div>
                <div className="text-gray-400 ml-4">// バグを事前に検出</div>
                <div className="text-gray-400 ml-4">// リファクタリングを自動実行</div>
                <div className="text-yellow-400">&#125;</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300">1000+</div>
            <div className="text-blue-100 mt-1">受講生実績</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300">95%</div>
            <div className="text-blue-100 mt-1">満足度</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300">10倍</div>
            <div className="text-blue-100 mt-1">開発効率向上</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300">24/7</div>
            <div className="text-blue-100 mt-1">サポート体制</div>
          </div>
        </div>
      </div>
    </section>
  )
}