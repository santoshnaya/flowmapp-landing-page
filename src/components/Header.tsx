'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">Flowmapp</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-700 hover:text-black cursor-pointer">
              <span className="text-sm">📊</span>
              <span>Try Demo Project</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
              <span>Use cases</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="text-gray-700 hover:text-black cursor-pointer">Pricing</span>
            <span className="text-gray-700 hover:text-black cursor-pointer">Help</span>
            <span className="text-gray-700 hover:text-black cursor-pointer">Blog</span>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black">Log in</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <span>Try for free</span>
              <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center space-x-2 text-gray-700 py-2">
                <span className="text-sm">📊</span>
                <span>Try Demo Project</span>
              </div>
              <div className="text-gray-700 py-2">Features</div>
              <div className="text-gray-700 py-2">Use cases</div>
              <div className="text-gray-700 py-2">Pricing</div>
              <div className="text-gray-700 py-2">Help</div>
              <div className="text-gray-700 py-2">Blog</div>
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <button className="block w-full text-left text-gray-700">Log in</button>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg">
                  Try for free →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 