'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Hero = () => {
  const avatars = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
    { id: 7, name: 'User 7' },
    { id: 8, name: 'User 8' },
  ]

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Top Rated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2"
            >
              <div className="flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-green-600 fill-current" />
                <span className="text-sm text-green-700 font-medium">Top Rated Product</span>
                <Star className="w-4 h-4 text-green-600 fill-current" />
              </div>
            </motion.div>

            {/* User Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <div className="flex -space-x-2">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                  >
                    {avatar.name.slice(-1)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-3">Over 400,000 users</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-black">Visual platform for</span>
                <br />
                <span className="text-black">planning UX and</span>
                <br />
                <span className="text-black">pitching web design</span>
              </h1>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Win more clients</span>
                <div className="w-8 h-4 bg-black rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-0 top-0 shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="font-bold text-2xl">W</span>
                <span className="font-bold text-2xl">🏁</span>
                <span className="font-bold text-2xl">₴</span>
                <span className="font-bold text-2xl">🔥</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center space-x-2 transition-all hover:scale-105 shadow-lg">
                <span>Start planning</span>
                <span className="text-xl">🔥→</span>
              </button>
            </motion.div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Mockup Container */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative">
                {/* Sitemap Mockup */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600">Main Page</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-yellow-100 px-3 py-2 rounded text-sm">Header</div>
                      <div className="bg-green-100 px-3 py-2 rounded text-sm">Company Overview</div>
                      <div className="bg-purple-100 px-3 py-2 rounded text-sm">Feature</div>
                      <div className="bg-blue-100 px-3 py-2 rounded text-sm">CTA</div>
                      <div className="bg-gray-100 px-3 py-2 rounded text-sm">Footer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-blue-100 px-3 py-2 rounded-lg shadow-lg"
              >
                <span className="text-sm font-medium text-blue-700">Emily</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 top-1/3 bg-white px-4 py-3 rounded-xl shadow-lg border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Generate Invoice</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-16 bottom-1/4 bg-purple-50 px-3 py-2 rounded-lg shadow-lg border border-purple-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xs">✨</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Notification Popup */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-0 right-0 bg-white rounded-xl shadow-xl p-4 border max-w-xs"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">Client</span>
                    <span className="text-xs text-gray-500">Just now</span>
                  </div>
                  <p className="text-sm text-gray-600">We approve the proposal! Excited for the next steps.</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-red-600">Nik</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
}

export default Hero 