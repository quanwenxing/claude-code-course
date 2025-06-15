'use client'

import { useState } from 'react'

interface BenefitCardProps {
  icon: string
  title: string
  description: string
  metrics: string
  delay?: number
}

export default function BenefitCard({ 
  icon, 
  title, 
  description, 
  metrics, 
  delay = 0 
}: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="text-center mb-4">
        <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl transform transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Metrics Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
          {metrics}
        </div>
      </div>

      {/* Hover Effect Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  )
}