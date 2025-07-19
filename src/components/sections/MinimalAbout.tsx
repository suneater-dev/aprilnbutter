'use client'

import { motion } from 'framer-motion'

const MinimalAbout = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary-25">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-primary-800">
            Our Story
          </h2>

          {/* Main Content */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light text-neutral-700 leading-relaxed"
            >
              Every morning before dawn, we begin our gentle ritual of crafting each pastry with 
              <span className="text-primary-800 font-normal"> wholesome ingredients</span> and 
              time-honored techniques.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 font-light leading-relaxed"
            >
              Our space is designed as a sanctuary—natural textures, muted tones, and soft lighting 
              create a <span className="text-primary-800 font-normal">cozy atmosphere</span> where 
              you can slow down and savor not just our pastries, but precious moments of quiet.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 font-light leading-relaxed"
            >
              We believe in the magic of simple pleasures—the aroma of butter melting into warm croissants, 
              the satisfaction of perfectly risen sourdough, and the joy of sharing sweet moments with our community.
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-accent text-primary-800 italic leading-relaxed">
                "A sweet escape from the noise, where every bite tells a story of care and craftsmanship."
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16"
          >
            <div className="text-center space-y-4">
              <h4 className="text-lg font-medium text-primary-800 uppercase tracking-wide">
                Daily Fresh
              </h4>
              <p className="text-neutral-600 font-light">
                Baked with love every morning using traditional methods
              </p>
            </div>
            <div className="text-center space-y-4">
              <h4 className="text-lg font-medium text-primary-800 uppercase tracking-wide">
                Wholesome
              </h4>
              <p className="text-neutral-600 font-light">
                Quality ingredients sourced from trusted local partners
              </p>
            </div>
            <div className="text-center space-y-4">
              <h4 className="text-lg font-medium text-primary-800 uppercase tracking-wide">
                Welcoming
              </h4>
              <p className="text-neutral-600 font-light">
                A cozy refuge where everyone feels at home
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MinimalAbout