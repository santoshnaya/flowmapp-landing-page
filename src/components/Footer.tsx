'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Award } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="bg-white">
      {/* Free Project CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              💎 One project is always free. Easy onboarding. No credit card required
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Perfect way for web sales planning card
            </h2>
            
            {/* Sales Process Steps */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  📁
                </div>
                <h3 className="text-xl font-bold">01 — Portfolio</h3>
                <p className="text-gray-600 text-sm">
                  UX/UI designs and websites you&apos;ve created with Webflow, Framer, and Wordpress
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  🎯
                </div>
                <h3 className="text-xl font-bold">02 — Presentation</h3>
                <p className="text-gray-600 text-sm">
                  Introduce your studio, services, team, and awards
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  🔄
                </div>
                <h3 className="text-xl font-bold">03 — Brief</h3>
                <p className="text-gray-600 text-sm">
                  Formulate a smart brief for the future project
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto">
                  🚲
                </div>
                <h3 className="text-xl font-bold">04 — Sitemap</h3>
                <p className="text-gray-600 text-sm">
                  Generate the information structure of the website using a visual sitemap
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto">
                  🎨
                </div>
                <h3 className="text-xl font-bold">05 — Wireframes</h3>
                <p className="text-gray-600 text-sm">
                  Wireframes for all website pages will be generated along with the sitemap
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  📝
                </div>
                <h3 className="text-xl font-bold">06 — Content</h3>
                <p className="text-gray-600 text-sm">
                  Impress the client by adding headlines and content to make the proposal more meaningful
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  🔄
                </div>
                <h3 className="text-xl font-bold">07 — User Flows</h3>
                <p className="text-gray-600 text-sm">
                  Support your offer with visualizations of well-thought-out UX solutions
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  💰
                </div>
                <h3 className="text-xl font-bold">08 — Estimation</h3>
                <p className="text-gray-600 text-sm">
                  Provide an accurate estimate of the project, including rates, hours, and total cost for each page of the website
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto">
                  📄
                </div>
                <h3 className="text-xl font-bold">09 — Invoice</h3>
                <p className="text-gray-600 text-sm">
                  Create an invoice for the customer to finalize the sale
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Product */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Sitemap</a></li>
                <li><a href="#" className="hover:text-gray-900">User Flow</a></li>
                <li><a href="#" className="hover:text-gray-900">Wireframes</a></li>
                <li><a href="#" className="hover:text-gray-900">Content</a></li>
                <li><a href="#" className="hover:text-gray-900">Estimation & invoice</a></li>
                <li><a href="#" className="hover:text-gray-900">Visual sitemap generator</a></li>
              </ul>
            </div>

            {/* How it works */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">How it works</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Knowledge base</a></li>
                <li><a href="#" className="hover:text-gray-900">Release notes</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900">Reviews</a></li>
                <li className="pt-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Use cases</h4>
                </li>
                <li><a href="#" className="hover:text-gray-900">Boost website sales</a></li>
                <li><a href="#" className="hover:text-gray-900">Websites planning</a></li>
              </ul>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Pricing</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Plans & Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Students</a></li>
                <li><a href="#" className="hover:text-gray-900">Education</a></li>
                <li className="pt-2 text-gray-400">
                  <h4 className="font-semibold mb-2">Company</h4>
                </li>
                <li><a href="#" className="hover:text-gray-900">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Blog</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">UX design</a></li>
                <li><a href="#" className="hover:text-gray-900">UI design</a></li>
                <li><a href="#" className="hover:text-gray-900">Sitemaps design & IA</a></li>
                <li><a href="#" className="hover:text-gray-900">Web design</a></li>
              </ul>
            </div>

            {/* Awards & CTA */}
            <div className="space-y-6">
              {/* Top Rated Product */}
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-green-700 font-medium">Top Rated Product</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-gray-700">Honored by G2</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-700">Capterra admitted</span>
                  </div>
                </div>
              </div>

              {/* Discount Banner */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm">👤 Get</span>
                  <span className="font-bold text-lg">45% off</span>
                  <span className="text-sm">for the whole</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">year</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <span>© 2025 Flowmapp</span>
              <span>•</span>
              <a href="#" className="hover:text-gray-700">Terms of Use</a>
              <a href="#" className="hover:text-gray-700">Security</a>
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <span>•</span>
              <a href="mailto:info@flowmapp.com" className="hover:text-gray-700">info@flowmapp.com</a>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Build with Flowmapp
              </button>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="text-xl">M</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="text-xl">@</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="text-xl">📺</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 