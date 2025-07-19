'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Buttery Croissants',
      description: 'Flaky, golden pastries with layers of butter, baked fresh every morning',
      image: '[Croissant photo placeholder]',
      price: 'From $3.50'
    },
    {
      id: 2,
      name: 'Honey Scones',
      description: 'Tender, crumbly scones drizzled with local wildflower honey',
      image: '[Scone photo placeholder]',
      price: 'From $4.25'
    },
    {
      id: 3,
      name: 'Vanilla Sponge Cake',
      description: 'Light, airy cake with Madagascar vanilla and silky buttercream',
      image: '[Cake photo placeholder]',
      price: 'From $28.00'
    },
    {
      id: 4,
      name: 'Artisan Sourdough',
      description: 'Handcrafted with our 7-day starter, crispy crust and tangy flavor',
      image: '[Bread photo placeholder]',
      price: 'From $6.50'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-primary-800 mb-4">
            Our Signature Treats
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Each morning, we craft these beloved favorites with the finest ingredients 
            and time-honored techniques passed down through generations.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-primary-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105">
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🥐</span>
                    </div>
                    <p className="text-sm text-primary-600 font-medium">
                      {product.image}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display text-primary-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-700 font-semibold">
                      {product.price}
                    </span>
                    <span className="text-xs text-primary-500 opacity-75">
                      Daily fresh
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-block border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            See Full Menu
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts