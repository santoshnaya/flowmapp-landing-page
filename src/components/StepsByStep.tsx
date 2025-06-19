'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Layers, Palette, DollarSign, Download } from 'lucide-react'

const StepsByStep = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      step: 1,
      badge: "+15% IN SALES",
      title: "Create a complete UX structure for the web project",
      features: [
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Brief",
          description: "Create a future project brief directly in Flowmapp to use for creating a complete website sales proposal"
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Sitemap creation", 
          description: "Interactive visual sitemap with a page editor, AI generator, and collaborative tools"
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "AI-Powered generator",
          description: "We&apos;ve created tools for generating sitemaps and wireframes to quickly set up your project. Accelerate planning with AI"
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Website structure",
          description: "Build a bird&apos;s-eye view with the visual Information Architecture tool in minutes"
        }
      ],
      mockup: "MAPPING"
    },
    {
      step: 2,
      badge: "+200% IN SALES",
      title: "Upgrade project with extras: UX, wireframes, content, user flows",
      features: [
        {
          title: "Pre-made templates",
          description: "A library of visual solutions that accelerates client proposal creation by 5 times"
        },
        {
          title: "Wireframes",
          description: "Create hi-fi prototypes for desktop and mobile, and present them to clients as their future website"
        },
        {
          title: "Content",
          description: "Collect text or visual content for each website page using a &apos;Notion-like&apos; editor. Drive interest with high-quality writing"
        },
        {
          title: "User flows",
          description: "A simple and minimalistic solution for designing exceptional UX in minutes, allowing you to validate proposed solutions"
        }
      ]
    },
    {
      step: 3,
      badge: "+35% IN SALES",
      title: "Add design and dev estimates to get client approval",
      features: [
        {
          icon: <DollarSign className="w-6 h-6" />,
          title: "Project cost",
          description: "Quickly estimate project costs and rates for each type of work, including design, development, copywriting, and more"
        },
        {
          title: "Project timing",
          description: "Provide the client with a full project estimate in hours, including a detailed breakdown for each page"
        },
        {
          title: "Dev requirements",
          description: "Craft compelling content that captivates your audience and drives engagement with high-quality writing"
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Invoice",
          description: "Generate an invoice as the final document of your proposal to finalize the transaction"
        }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            Build high-converting projects
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((stepData, index) => (
            <motion.div
              key={stepData.step}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      STEP {stepData.step}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {stepData.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {stepData.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {stepData.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        {feature.icon && (
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                            {feature.icon}
                          </div>
                        )}
                        <h4 className="font-semibold">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {stepData.step === 1 && (
                  <div className="bg-gray-50 rounded-3xl p-8 relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium">
                        {stepData.mockup}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm font-medium">
                        AI GENERATOR
                      </span>
                    </div>

                    <div className="mt-8 space-y-6">
                      {/* Feature Card */}
                      <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-medium">Features</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-yellow-100 px-3 py-2 rounded text-sm">Menu</div>
                          <div className="bg-blue-100 px-3 py-2 rounded text-sm">Header</div>
                          <div className="bg-purple-100 px-3 py-2 rounded text-sm">No-code App</div>
                        </div>
                      </div>

                      {/* Generate Button */}
                      <div className="flex justify-center">
                        <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-2">
                          <span>✨ Generate Sitemap</span>
                        </button>
                      </div>

                      {/* Structure Diagram */}
                      <div className="bg-green-100 rounded-2xl p-6">
                        <span className="text-green-800 font-medium text-sm">STRUCTURE</span>
                        <div className="mt-4 grid grid-cols-5 gap-2">
                          {[1,2,3,4,5].map((i) => (
                            <div key={i} className="bg-white rounded-lg p-3 text-center">
                              <div className="w-full h-8 bg-gray-100 rounded mb-2"></div>
                              <div className="text-xs">Page {i}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {stepData.step === 2 && (
                  <div className="grid grid-cols-2 gap-4">
                    {/* Wireframes */}
                    <div className="bg-yellow-100 rounded-2xl p-6">
                      <span className="text-yellow-800 font-medium text-sm">WIREFRAMES</span>
                      <div className="mt-4 bg-white rounded-lg p-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-gray-200 rounded"></div>
                            <span className="text-sm">Desktop</span>
                            <div className="w-4 h-4 bg-gray-200 rounded"></div>
                            <span className="text-sm">Mobile</span>
                          </div>
                          <div className="text-center py-4">
                            <div className="text-sm font-medium">Logo</div>
                            <div className="mt-2 text-xs text-gray-500">Getting ready to design</div>
                          </div>
                          <div className="bg-gray-100 rounded p-2">
                            <div className="text-xs">UX tools for web design</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs font-medium">Pricing</div>
                            <div className="grid grid-cols-3 gap-1 mt-2">
                              <div className="bg-gray-100 rounded p-1 text-xs">$29</div>
                              <div className="bg-gray-100 rounded p-1 text-xs">$79</div>
                              <div className="bg-gray-100 rounded p-1 text-xs">$99</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-blue-100 rounded-2xl p-6">
                      <span className="text-blue-800 font-medium text-sm">CONTENT</span>
                      <div className="mt-4 bg-white rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">📄 Navbar</span>
                            <span className="text-xs text-gray-500">Navbar is...</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">🎯 Hero</span>
                            <span className="text-xs text-gray-500">About the com...</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">👥 Our Team</span>
                            <span className="text-xs text-gray-500">Perfect team...</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">📧 Footer</span>
                            <span className="text-xs text-gray-500">It includes...</span>
                          </div>
                        </div>
                      </div>

                      {/* User Flows */}
                      <div className="mt-4 bg-pink-100 rounded-lg p-4">
                        <span className="text-pink-800 font-medium text-sm">USER FLOWS</span>
                        <div className="mt-2 flex items-center justify-center space-x-2">
                          <div className="bg-blue-200 px-2 py-1 rounded text-xs">Search</div>
                          <span className="text-xs">→</span>
                          <div className="bg-blue-200 px-2 py-1 rounded text-xs">Product Page</div>
                          <span className="text-xs">→</span>
                          <div className="bg-green-200 px-2 py-1 rounded text-xs">✅ Success</div>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                            <span className="text-xs">📊</span>
                          </div>
                          <span className="text-sm font-medium">Pre-made templates</span>
                        </div>
                        <p className="text-xs text-gray-600">A library of visual solutions that accelerates client proposal creation by 5 times</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                            <span className="text-xs">🎨</span>
                          </div>
                          <span className="text-sm font-medium">Wireframes</span>
                        </div>
                        <p className="text-xs text-gray-600">Create hi-fi prototypes for desktop and mobile, and present them to clients as their future website</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                            <span className="text-xs">📝</span>
                          </div>
                          <span className="text-sm font-medium">Content</span>
                        </div>
                        <p className="text-xs text-gray-600">Collect text or visual content for each website page using a &apos;Notion-like&apos; editor. Drive interest with high-quality writing</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                            <span className="text-xs">🔄</span>
                          </div>
                          <span className="text-sm font-medium">User flows</span>
                        </div>
                        <p className="text-xs text-gray-600">A simple and minimalistic solution for designing exceptional UX in minutes, allowing you to validate proposed solutions</p>
                      </div>
                    </div>
                  </div>
                )}

                {stepData.step === 3 && (
                  <div className="space-y-6">
                    {/* Project Cost Section */}
                    <div className="bg-blue-100 rounded-2xl p-6">
                      <span className="text-blue-800 font-medium text-sm">PROJECT COST</span>
                      <div className="mt-4 bg-white rounded-xl p-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-medium">AI Project</span>
                          <span className="text-blue-600 font-medium">🌊 Webflow</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm">🎨 Design</span>
                              <span className="text-xs text-gray-500">$55</span>
                            </div>
                            <div className="text-sm">48h</div>
                            <div className="font-medium">$2,640.00</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm">⚡ Development</span>
                              <span className="text-xs text-gray-500">$65</span>
                            </div>
                            <div className="text-sm">52h</div>
                            <div className="font-medium">$3,380.00</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm">🔍 Quality Assurance</span>
                              <span className="text-xs text-gray-500">$25</span>
                            </div>
                            <div className="text-sm">18h</div>
                            <div className="font-medium">$450.00</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm">© Copyright</span>
                              <span className="text-xs text-gray-500">$30</span>
                            </div>
                            <div className="text-sm">22h</div>
                            <div className="font-medium">$660.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Estimation & Invoice */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-100 rounded-xl p-4">
                        <span className="text-purple-800 font-medium text-sm">ESTIMATION</span>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">🎨 Design</span>
                            <span className="text-xs">12h</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">⚡ Development</span>
                            <span className="text-xs">16h</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">🔍 QA</span>
                            <span className="text-xs">4h</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">© Copyright</span>
                            <span className="text-xs">8h</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-100 rounded-xl p-4">
                        <span className="text-red-800 font-medium text-sm">INVOICE</span>
                        <div className="mt-3 flex justify-center">
                          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm">
                            <Download className="w-4 h-4" />
                            <span>Download Invoice</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsByStep 