'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BromaStyleGrid = () => {
  const products = [
    {
      id: 1,
      category: 'COOKIES',
      title: 'Double Chocolate Chip Cookies',
      image: '/images/Cookies.jpg',
      alt: 'Delicious double chocolate chip cookies with rich chocolate chips, freshly baked and stacked on a rustic wooden surface',
      slug: 'double-chocolate-chip-cookies'
    },
    {
      id: 2,
      category: 'BARS',
      title: 'Chewy Funfetti Blondies',
      image: '/images/Bars.jpg',
      alt: 'Colorful funfetti blondies with rainbow sprinkles, cut into perfect squares and displayed on parchment paper',
      slug: 'chewy-funfetti-blondies'
    },
    {
      id: 3,
      category: 'COOKIES',
      title: 'S\'mores Cookies',
      image: '/images/cookies-2.jpg',
      alt: 'Gooey s\'mores cookies with graham cracker, chocolate, and marshmallow layers, perfectly golden brown',
      slug: 'smores-cookies'
    },
    {
      id: 4,
      category: 'BROWNIES',
      title: 'Fudgy Oreo Brownies',
      image: '/images/brownies.jpg',
      alt: 'Rich, fudgy brownies topped with crushed Oreo cookies, cut into generous squares with a glossy chocolate finish',
      slug: 'fudgy-oreo-brownies'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16"
        >
          {/* Left side text */}
          <div className="mb-8 md:mb-0">
            <h2 className="font-nav font-bold text-neutral-900 leading-tight uppercase tracking-[0.05em] whitespace-nowrap" style={{ fontSize: '30px' }}>
              Perfect for your cozy bakery visit
            </h2>
          </div>

          {/* Right side link */}
          <div>
            <Link
              href="/menu"
              className="text-sm font-medium uppercase tracking-[0.1em] text-neutral-900 hover:text-neutral-600 transition-colors duration-300 inline-flex items-center group"
            >
              VIEW FULL MENU
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
              {/* Portrait Image */}
              <div className="aspect-[3/4] mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300 relative">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Category Tag */}
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600">
                  {product.category}
                </p>
                
                {/* Divider Line */}
                <div className="w-full h-px bg-neutral-300" style={{ height: '0.25px' }}></div>
                
                {/* Title */}
                <h3 className="font-nav font-semibold text-neutral-900 leading-tight group-hover:text-neutral-600 transition-colors duration-300" style={{ fontSize: '16px' }}>
                  {product.title}
                </h3>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BromaStyleGrid