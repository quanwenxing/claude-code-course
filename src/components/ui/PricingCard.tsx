'use client'

interface PricingCardProps {
  plan: {
    name: string
    originalPrice: number
    price: number
    description: string
    features: string[]
    isPopular: boolean
    badge: string | null
  }
  delay?: number
}

export default function PricingCard({ plan, delay = 0 }: PricingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP').format(price)
  }

  const discountPercentage = Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)

  return (
    <div 
      className={`relative bg-white rounded-3xl shadow-xl border-2 ${
        plan.isPopular 
          ? 'border-blue-500 transform scale-105' 
          : 'border-gray-200 hover:border-blue-300'
      } transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-white text-sm font-bold ${
          plan.isPopular ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-gray-600 to-gray-700'
        }`}>
          {plan.badge}
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
          <p className="text-gray-600">{plan.description}</p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-gray-500 line-through text-xl">
              ¥{formatPrice(plan.originalPrice)}
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {discountPercentage}%OFF
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-2">
            ¥{formatPrice(plan.price)}
          </div>
          <div className="text-gray-500 text-sm">税込価格</div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
          plan.isPopular
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}>
          {plan.isPopular ? 'おすすめプランで申し込む' : 'このプランで申し込む'}
        </button>

        {/* Additional Info */}
        <div className="text-center mt-4 text-xs text-gray-500">
          無料相談・質問も承ります
        </div>
      </div>

      {/* Popular Plan Glow Effect */}
      {plan.isPopular && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl -z-10"></div>
      )}
    </div>
  )
}