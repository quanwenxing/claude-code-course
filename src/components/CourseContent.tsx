export default function CourseContent() {
  const modules = [
    {
      number: "01",
      title: "Claude Code入門",
      duration: "2週間",
      topics: [
        "Claude Codeの基本概念と設置方法",
        "開発環境のセットアップとカスタマイズ",
        "基本的なコマンドとワークフロー",
        "AIとの効果的なコミュニケーション方法"
      ]
    },
    {
      number: "02", 
      title: "プロジェクト管理とファイル操作",
      duration: "2週間",
      topics: [
        "複数ファイルの同時編集とリファクタリング",
        "プロジェクト全体の構造理解と最適化",
        "バージョン管理システムとの連携",
        "コードレビューとデバッグの自動化"
      ]
    },
    {
      number: "03",
      title: "高度な開発テクニック",
      duration: "3週間", 
      topics: [
        "テスト駆動開発(TDD)のAI支援実装",
        "パフォーマンス最適化とコード分析",
        "セキュリティベストプラクティスの適用",
        "多言語・フレームワーク対応の実践"
      ]
    },
    {
      number: "04",
      title: "チーム開発との統合",
      duration: "2週間",
      topics: [
        "CI/CDパイプラインへの組み込み",
        "チームワークフローの最適化",
        "ドキュメント自動生成とメンテナンス",
        "プロダクション環境でのベストプラクティス"
      ]
    },
    {
      number: "05",
      title: "実践プロジェクト",
      duration: "3週間",
      topics: [
        "実際のWebアプリケーション開発",
        "フルスタック開発でのClaude Code活用",
        "パフォーマンス測定と改善",
        "最終プレゼンテーションと成果発表"
      ]
    }
  ]

  return (
    <section id="course-content" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            講座カリキュラム
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            12週間の段階的学習プログラムで、Claude Codeのエキスパートになりましょう。
            各モジュールは実践的な課題と個別フィードバックで構成されています。
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Module Number and Duration */}
                <div className="lg:w-1/4 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 flex flex-col justify-center">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold mb-2">モジュール {module.number}</div>
                    <div className="text-blue-100 font-medium">{module.duration}</div>
                  </div>
                </div>
                
                {/* Module Content */}
                <div className="lg:w-3/4 p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {module.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Visualization */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            学習の流れ
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-4">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">理論学習</h4>
              <p className="text-gray-600 text-sm">動画講義とテキストで基礎を習得</p>
            </div>
            <div className="hidden lg:block w-8 h-0.5 bg-gray-300"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ハンズオン実習</h4>
              <p className="text-gray-600 text-sm">実際のコードを書きながら実践</p>
            </div>
            <div className="hidden lg:block w-8 h-0.5 bg-gray-300"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">プロジェクト実践</h4>
              <p className="text-gray-600 text-sm">実際のプロジェクトで成果を確認</p>
            </div>
            <div className="hidden lg:block w-8 h-0.5 bg-gray-300"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">修了認定</h4>
              <p className="text-gray-600 text-sm">スキル証明書の発行</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}