'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const companies = [
    'intel', 'IBM', 'TESLA', 'EA', 'unicef', 'Deloitte'
  ]

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm mb-8">You&apos;re in good company</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-2xl font-bold text-gray-400 tracking-wide"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-black">Flowmapp </span>
            <span className="text-blue-600">→</span>
            <span className="text-black"> is a visual platform for</span>
            <br />
            <span className="text-black">planning impressive web design projects</span>
            <br />
            <span className="text-black">by adding </span>
            <span className="inline-flex items-center space-x-2">
              <span className="bg-yellow-100 px-3 py-1 rounded-lg text-yellow-800">📄 brief,</span>
              <span className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800">🚲 sitemap,</span>
              <span className="bg-green-100 px-3 py-1 rounded-lg text-green-800">⏱ structure,</span>
            </span>
            <br />
            <span className="inline-flex items-center space-x-2 flex-wrap justify-center">
              <span className="bg-purple-100 px-3 py-1 rounded-lg text-purple-800">🎨 wireframes,</span>
              <span className="bg-pink-100 px-3 py-1 rounded-lg text-pink-800">📝 content,</span>
              <span className="bg-red-100 px-3 py-1 rounded-lg text-red-800">💰 estimation,</span>
            </span>
            <br />
            <span className="text-black">and </span>
            <span className="bg-orange-100 px-3 py-1 rounded-lg text-orange-800">📄 invoice.</span>
          </h2>
        </motion.div>

        {/* Visual Sitemap Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Sitemap Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">🚲 AI Product Sitemap</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <span className="text-sm">Share</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Export</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Figma</span>
                    </div>
                  </div>
                </div>

                {/* Sitemap Diagram */}
                <div className="space-y-6">
                  {/* Main Page */}
                  <div className="flex justify-center">
                    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 text-center min-w-32">
                      <div className="text-sm font-medium mb-2">Main page</div>
                      <div className="text-xs bg-green-100 px-2 py-1 rounded text-green-700">DONE</div>
                      <div className="mt-2 space-y-1">
                        <div className="bg-yellow-100 px-2 py-1 rounded text-xs">Header</div>
                        <div className="bg-red-100 px-2 py-1 rounded text-xs">Hero</div>
                        <div className="bg-orange-100 px-2 py-1 rounded text-xs">Why Choose Us</div>
                        <div className="bg-gray-100 px-2 py-1 rounded text-xs">Footer</div>
                      </div>
                    </div>
                  </div>

                  {/* Connected Pages */}
                  <div className="flex justify-center space-x-4">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 text-center min-w-28">
                      <div className="text-xs font-medium mb-1">About</div>
                      <div className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-700">NEW</div>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 text-center min-w-28">
                      <div className="text-xs font-medium mb-1">Products</div>
                      <div className="text-xs bg-blue-100 px-2 py-1 rounded text-blue-700">IN PROGRESS</div>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 text-center min-w-28">
                      <div className="text-xs font-medium mb-1">Contact us</div>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 text-center min-w-28">
                      <div className="text-xs font-medium mb-1">Careers</div>
                      <div className="text-xs bg-pink-100 px-2 py-1 rounded text-pink-700">NEW</div>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 text-center min-w-28">
                      <div className="text-xs font-medium mb-1">Feature</div>
                      <div className="text-xs bg-green-100 px-2 py-1 rounded text-green-700">DONE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Indicators - Right Side */}
              <div className="absolute -right-8 top-16 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🎨 Design</span>
                  <span className="text-sm text-gray-500">12h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">⚡ Development</span>
                  <span className="text-sm text-gray-500">16h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🔍 QA</span>
                  <span className="text-sm text-gray-500">4h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">© Copyright</span>
                  <span className="text-sm text-gray-500">8h</span>
                </div>
              </div>
            </div>

            {/* Right - Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Desktop</span>
                <span className="text-sm bg-white px-2 py-1 rounded border">Mobile</span>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-xl mb-2">Logo</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Help Center</span>
                    <span>Blog</span>
                    <span className="bg-black text-white px-2 py-1 rounded text-xs">Sign Up</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-lg">The start of the web and web design</h4>
                  <p className="text-sm text-gray-600">Follow us</p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Pricing</h4>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="text-center">
                      <div className="font-semibold">Beginner</div>
                      <div className="text-2xl font-bold">$29 <span className="text-sm font-normal">/mo</span></div>
                      <p className="text-gray-500 text-xs">If you first start designing or need help for the first time...</p>
                      <button className="bg-black text-white px-3 py-1 rounded mt-2 text-xs">Upgrade</button>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">Personal</div>
                      <div className="text-2xl font-bold">$79 <span className="text-sm font-normal">/mo</span></div>
                      <p className="text-gray-500 text-xs">If you love good design in the commercial use first time...</p>
                      <button className="bg-black text-white px-3 py-1 rounded mt-2 text-xs">Upgrade</button>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">Unlimited</div>
                      <div className="text-2xl font-bold">$99 <span className="text-sm font-normal">/mo</span></div>
                      <p className="text-gray-500 text-xs">If you first start design or will be commercial use first...</p>
                      <button className="bg-black text-white px-3 py-1 rounded mt-2 text-xs">Upgrade</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 