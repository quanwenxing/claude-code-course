interface PaymentMethodCardProps {
  method: {
    title: string
    description: string
    discount: string
    icon: string
  }
  delay?: number
}

export default function PaymentMethodCard({ method, delay = 0 }: PaymentMethodCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="text-center">
        <div className="text-3xl mb-4">{method.icon}</div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h4>
        <p className="text-gray-600 mb-3">{method.description}</p>
        <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          {method.discount}
        </div>
      </div>
    </div>
  )
}