'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Smile } from 'lucide-react'

const UseCases = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-black">Effective & profitable for</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              freelancers • developers • agencies
            </span>
          </h2>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* For Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border-2 border-blue-200 relative"
          >
            <h3 className="text-2xl font-bold mb-6">For Agencies</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Increase design revenue</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Raise average check</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Double the conversion rate</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Speed up the deals</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Win more clients</span>
              </li>
            </ul>

            <div className="flex items-center space-x-3 mb-4">
              <Smile className="w-6 h-6" />
              <div className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <span>Approved</span>
                <Check className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* For Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border-2 border-blue-200 relative"
          >
            <h3 className="text-2xl font-bold mb-6">For Design Process</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Estimate project cost</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Approve exact timing</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Collect requirements</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Present project to the client</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Get an impressive project proposal</span>
              </li>
            </ul>

            {/* Mockup Flow */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="bg-white rounded-lg p-3 mb-3">
                <div className="text-sm font-medium">Services</div>
                <div className="space-y-1 mt-2">
                  <div className="bg-yellow-100 px-2 py-1 rounded text-xs">Menu</div>
                  <div className="bg-blue-100 px-2 py-1 rounded text-xs">Hero</div>
                  <div className="bg-green-100 px-2 py-1 rounded text-xs">Gallery</div>
                </div>
              </div>
              <div className="w-px h-6 bg-gray-300 mx-auto"></div>
              <div className="text-center text-sm text-gray-500">Flow continues...</div>
            </div>
          </motion.div>

          {/* For UX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border-2 border-blue-200 relative"
          >
            <h3 className="text-2xl font-bold mb-6">For UX</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Design Sitemaps and Wireframes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Map User Journeys</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Add Content and SEO</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Conduct UX-research</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">•</span>
                <span>Track design & dev statuses</span>
              </li>
            </ul>

            {/* Logo Design Mockup */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Logo</span>
                <div className="bg-black text-white px-3 py-1 rounded text-sm flex items-center space-x-1">
                  <span>Design</span>
                  <span>✨</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-blue-100 rounded"></div>
                  <span className="text-sm">Search</span>
                </div>
                <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">Get Started</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default UseCases 