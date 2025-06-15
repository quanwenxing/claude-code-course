'use client'

interface TestimonialCardProps {
  testimonial: {
    name: string
    role: string
    company: string
    content: string
    rating: number
    image: string
  }
  delay?: number
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ))
  }

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Rating */}
      <div className="flex justify-center mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-bold text-gray-800">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
          <div className="text-sm text-blue-600">{testimonial.company}</div>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm opacity-10">
        "
      </div>
    </div>
  )
}