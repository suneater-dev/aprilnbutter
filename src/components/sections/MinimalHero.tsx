'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const MinimalHero = () => {
  return (
    <section className="relative">
      {/* Hero Image Container */}
      <div className="relative h-[85vh] lg:h-[90vh] overflow-hidden">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-neutral-50 to-primary-200">
          {/* Photo Credit Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-12 max-w-lg">
              <div className="w-32 h-32 bg-primary-300/40 rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-6xl opacity-60">📸</span>
              </div>
              <p className="text-primary-700 font-medium text-lg mb-4">
                [Hero Image Placeholder]
              </p>
              <p className="text-primary-600 text-sm leading-relaxed">
                Beautiful bakery interior or signature pastry close-up<br />
                High-quality, professional food photography<br />
                Warm, inviting lighting that showcases craftsmanship
              </p>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/10">
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center text-white max-w-2xl px-6"
            >
              {/* Main Brand Name */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-accent mb-6 text-shadow">
                April & Butter
              </h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl font-light mb-12 text-white/90 leading-relaxed"
              >
                A cozy bakery where every detail is crafted with love
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Link
                  href="/visit-us"
                  className="inline-block bg-white text-primary-800 hover:bg-primary-50 px-10 py-4 font-light text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"
                >
                  Visit Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-24 lg:h-32 bg-white"></div>
    </section>
  )
}

export default MinimalHero