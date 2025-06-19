'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const companies = [
    'anode', 'REVEL', 'Abstrakt', 'SUITS & SANDALS', 'BRIGHT LABS.',
    'CARBON EDGE', 'chillybin', 'BURNSRED', 'fastlane', 'fusonic.net',
    'HIGH FIVE', 'LME GRN', 'RareBird', 'noesis', 'Rank.', 'brndz',
    'karma agency', 'LACOSTA'
  ]

  const testimonials = [
    {
      name: 'James Shell',
      role: 'Product Design & UX Lead',
      text: 'Started using @flowmapp to create some App and WebSite Sitemaps. Really liking it. Easy to use. Good to see that "User Flows" appear to be in the Product Roadmap as well.',
      hashtags: '#uxdesign #ux #Webdesign #uidesign'
    },
    {
      name: 'Juan Palli',
      company: 'ivanpalli.com',
      text: 'This a great tool to create architecture of the website. This is one of the most important and the first steps before launching any product/website. Thanks, guys, for awesome app.'
    },
    {
      name: 'Fabrizio Teixeira',
      company: 'uxdesign.co',
      text: 'Flowmapp - Powerful visual sitemap tool for planning website development and collaborate with others'
    },
    {
      name: 'Matt Rossi',
      company: 'MojoTech',
      text: '@juhsee found this gem, so far this has been an amazing tool @flowmapp'
    },
    {
      name: 'Sebastian Bellé',
      text: '@flowmapp ist mein absolutes Lieblingstool zur Website und Blog-Planung. Besonders gut - kostenfreie Nutzung bei einem Projekt.'
    },
    {
      name: 'Benjamin Merritt',
      text: 'I love the fact @flowmapp is so easy to use and to share with people that work with you. Building user flows or conversation flows has never been easier.'
    }
  ]

  return (
    <section ref={ref} className="py-20">
      {/* Blue Company Showcase Section */}
      <div className="bg-blue-600 text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Thousands of
              <br />
              design agencies
              <br />
              <div className="inline-flex items-center bg-white text-blue-600 px-6 py-2 rounded-full">
                use <span className="ml-2 font-bold">Flowmapp →</span>
              </div>
              <br />
              to boost UX/UI service
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center text-lg font-bold tracking-wide"
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Win Clients Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-3xl font-bold mb-8">
            WIN CLIENTS
          </div>
          <p className="text-xl text-gray-600 mb-8">
            85% of buyers prefer visual offers. Flowmapp is built to boost your project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                  👤
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  {testimonial.role && (
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  )}
                  {testimonial.company && (
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  )}
                </div>
              </div>
              <p className="text-gray-700 mb-3">{testimonial.text}</p>
              {testimonial.hashtags && (
                <div className="text-blue-600 text-sm">{testimonial.hashtags}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Upgrade your skills
              </h2>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold text-yellow-600">
                  24,777 readers 🥳
                </div>
                <div className="text-xl text-gray-700">
                  are getting insights with our UX/UI media
                </div>
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2">
                <span>📖</span>
                <span>Read more →</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold mb-2">Bad Bad UX: 20 Common Mistakes in User Experience</h4>
                  <div className="text-sm text-gray-500">UX • 6 min read</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold mb-2">Consistency in UI Design: 6 Basic Principles</h4>
                  <div className="text-sm text-gray-500">UI • 4 min read</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold mb-2">The Bible of Mobile UX Design: 20 Main Rules</h4>
                  <div className="text-sm text-gray-500">UX • 7 min read</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold mb-2">Bad Bad UI: 10 Common Mistakes in User Interfaces</h4>
                  <div className="text-sm text-gray-500">UI • 5 min read</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold mb-2">Clean UI Guide: 15 White Space Design Tips</h4>
                  <div className="text-sm text-gray-500">UI • 5 min read</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold mb-2">15 Principles of UX Design That Everyone Should Know</h4>
                  <div className="text-sm text-gray-500">UX • 7 min read</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 