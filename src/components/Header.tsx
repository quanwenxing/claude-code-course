'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Claude Code マスタークラス</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('course-content')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              講座内容
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              受講メリット
            </button>
            <button
              onClick={() => scrollToSection('instructor')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              講師紹介
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              料金
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              お申し込み
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-2 space-y-1">
              <button
                onClick={() => scrollToSection('course-content')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                講座内容
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                受講メリット
              </button>
              <button
                onClick={() => scrollToSection('instructor')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                講師紹介
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                料金
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 mx-4 rounded-lg"
              >
                お申し込み
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}