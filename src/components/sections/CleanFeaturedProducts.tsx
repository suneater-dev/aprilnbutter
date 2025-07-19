'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const CleanFeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Buttery Croissants',
      description: 'Flaky layers of golden perfection, baked fresh each morning',
      placeholder: '[Croissant close-up photo]'
    },
    {
      id: 2,
      name: 'Honey Scones',
      description: 'Tender crumbs with local wildflower honey drizzle',
      placeholder: '[Scone artistic photo]'
    },
    {
      id: 3,
      name: 'Vanilla Sponge Cake',
      description: 'Light, airy layers with Madagascar vanilla buttercream',
      placeholder: '[Cake slice photo]'
    },
    {
      id: 4,
      name: 'Artisan Sourdough',
      description: 'Seven-day starter creates our signature tangy flavor',
      placeholder: '[Bread loaf photo]'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-primary-800 mb-8">
            Our Signature Collection
          </h2>
          <p className="text-lg text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
            Each piece crafted daily with the finest ingredients and time-honored techniques
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 mb-20"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-primary-100 mb-8 overflow-hidden group-hover:shadow-xl transition-all duration-500">
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-200/60 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-3xl opacity-70">📷</span>
                    </div>
                    <p className="text-primary-700 font-medium mb-2">
                      {product.placeholder}
                    </p>
                    <p className="text-sm text-primary-600/80">
                      Professional food photography<br />
                      Beautiful styling and lighting
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-accent text-primary-800 group-hover:text-primary-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-block border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white px-12 py-4 font-light text-sm uppercase tracking-wide transition-all duration-300"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CleanFeaturedProducts