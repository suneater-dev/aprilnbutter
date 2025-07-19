'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-primary-800 mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-primary-600 rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p className="text-lg">
                April & Butter is more than just a bakery—it's a 
                <span className="font-medium text-primary-700"> warm embrace</span> in 
                the form of freshly baked goods and a cozy atmosphere that feels like home.
              </p>
              
              <p>
                Every morning before dawn, our bakers begin their gentle ritual of mixing, 
                kneading, and shaping with <span className="font-medium text-primary-700">wholesome ingredients</span> and 
                time-honored techniques. We believe in the magic of simple pleasures—the 
                aroma of butter melting into warm croissants, the satisfaction of perfectly 
                risen sourdough, and the joy of sharing sweet moments.
              </p>

              <p>
                Our space features <span className="font-medium text-primary-700">natural textures, muted neutrals, 
                and soft lighting</span> that creates an atmosphere of calm elegance. 
                Dried florals and earth tones invite you to slow down and savor 
                not just our pastries, but precious moments of quiet in your day.
              </p>

              <div className="bg-white/70 rounded-xl p-6 mt-8">
                <p className="text-primary-800 font-medium text-lg italic">
                  "Our mission is simple: to create a sweet escape from the noise, 
                  where every bite tells a story of care, craftsmanship, and community."
                </p>
              </div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
            >
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">🌾</span>
                </div>
                <h4 className="font-semibold text-primary-800 mb-1">Wholesome</h4>
                <p className="text-sm text-neutral-600">Quality ingredients, always</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">🤗</span>
                </div>
                <h4 className="font-semibold text-primary-800 mb-1">Welcoming</h4>
                <p className="text-sm text-neutral-600">Your neighborhood refuge</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">💝</span>
                </div>
                <h4 className="font-semibold text-primary-800 mb-1">Crafted</h4>
                <p className="text-sm text-neutral-600">Made with love, daily</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl shadow-warm overflow-hidden">
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">🏪</span>
                  </div>
                  <p className="text-primary-700 font-medium mb-2">
                    [Bakery interior photo placeholder]
                  </p>
                  <p className="text-sm text-primary-600">
                    Cozy seating area with natural textures,<br />
                    dried florals, and warm lighting
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200/50 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200/40 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection