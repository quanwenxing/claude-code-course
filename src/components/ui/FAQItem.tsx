'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  delay?: number
}

export default function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <button
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 pr-4">
            {question}
          </h3>
          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
              />
            </svg>
          </div>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}