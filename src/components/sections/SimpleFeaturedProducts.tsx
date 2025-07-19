'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const SimpleFeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Buttery Croissants',
      description: 'Golden, flaky layers baked fresh each morning',
      placeholder: '[Croissant Photo]'
    },
    {
      id: 2,
      name: 'Honey Scones',
      description: 'Tender crumbs with local wildflower honey',
      placeholder: '[Scone Photo]'
    },
    {
      id: 3,
      name: 'Vanilla Sponge Cake',
      description: 'Light layers with Madagascar vanilla cream',
      placeholder: '[Cake Photo]'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 mb-6">
            Signature Collection
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-neutral-900 mb-8">
            Crafted Daily with Love
          </h2>
          <p className="text-lg text-neutral-700 font-light max-w-2xl mx-auto leading-relaxed">
            Each morning, we create these beloved favorites using time-honored techniques 
            and the finest ingredients.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 mb-6 overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-full p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-300/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl opacity-70">📷</span>
                    </div>
                    <p className="text-primary-700 font-medium text-sm">
                      {product.placeholder}
                    </p>
                    <p className="text-xs text-primary-600 mt-1">
                      Professional food styling
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-display text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-block border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] transition-all duration-300"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleFeaturedProducts