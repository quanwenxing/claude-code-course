import SectionHeader from './ui/SectionHeader'
import FAQItem from './ui/FAQItem'

export default function FAQ() {
  const faqs = [
    {
      question: "Claude Codeを使ったことがありませんが、大丈夫ですか？",
      answer: "はい、全く問題ありません。本講座は初心者の方でも安心して受講いただけるよう、Claude Codeの基本的な使い方から丁寧に解説します。開発経験がある方なら、より短期間でマスターできるでしょう。"
    },
    {
      question: "講座の進行ペースについていけるか心配です。",
      answer: "各受講生のペースに合わせた学習をサポートします。アーカイブ動画で何度でも復習可能で、個別質問にも対応しています。また、進度に合わせて追加のサポートも提供いたします。"
    },
    {
      question: "仕事をしながらでも受講できますか？",
      answer: "はい、多くの受講生が働きながら受講されています。週10-15時間程度の学習時間を確保していただければ、無理なく進められるカリキュラム設計になっています。柔軟なスケジュールで対応可能です。"
    },
    {
      question: "受講に必要な機材やソフトウェアはありますか？",
      answer: "基本的なPCとインターネット環境があれば受講可能です。Claude Codeはクラウドベースのツールなので、特別なソフトウェアのインストールは不要です。推奨環境については事前にご案内いたします。"
    },
    {
      question: "講座修了後のサポートはありますか？",
      answer: "はい、講座修了後も充実したサポートを提供しています。専用コミュニティでの継続的な情報交換、最新アップデート情報の共有、さらには転職・キャリアアップのサポートも行っています。"
    },
    {
      question: "返金保証の条件を教えてください。",
      answer: "30日間の無条件返金保証を提供しています。講座開始から30日以内であれば、理由を問わず全額返金いたします。ただし、動画の大部分を視聴済みの場合は対象外となる場合があります。"
    },
    {
      question: "企業での導入を検討していますが、可能ですか？",
      answer: "はい、企業向けの研修プログラムも提供しています。チームの規模や技術レベルに応じたカスタマイズ研修、オンサイト研修なども対応可能です。詳細はお気軽にお問い合わせください。"
    },
    {
      question: "どのようなプログラミング言語に対応していますか？",
      answer: "Claude Codeは多言語対応のツールです。JavaScript、Python、Java、Go、Rust、TypeScriptなど主要な言語に対応しており、講座では実際に様々な言語でのプロジェクトを扱います。"
    },
    {
      question: "修了証明書は発行されますか？",
      answer: "はい、講座を修了された方には正式な修了証明書を発行いたします。この証明書は履歴書やLinkedInプロフィールに記載していただけ、スキルの証明として活用できます。"
    },
    {
      question: "分割払いは可能ですか？",
      answer: "はい、分割払いに対応しています。3回払い（手数料無料）、6回払い（手数料3%）をご用意しています。クレジットカード決済、銀行振込、コンビニ決済など、複数の決済方法に対応しています。"
    }
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="よくある質問"
          subtitle="受講前の不安や疑問を解消して、安心して学習を始めましょう"
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                他にご質問がございますか？
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                どんな小さな疑問でもお気軽にお問い合わせください。<br/>
                専門スタッフが丁寧にお答えいたします。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  無料相談を予約
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
                  メールで問い合わせ
                </button>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  24時間以内に回答
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  無料相談実施中
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  専門スタッフ対応
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}