'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const CleanVisitInfo = () => {
  const hours = [
    { day: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 7:00 PM' },
    { day: 'Sunday', time: '8:00 AM – 5:00 PM' }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-primary-800 mb-8">
            Visit Us
          </h2>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
            Step into our warm, welcoming space in the heart of Portland's Riverside District
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Location & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Address */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-medium text-primary-800 mb-4 uppercase tracking-wide">
                Location
              </h3>
              <div className="space-y-2 text-neutral-600 font-light">
                <p>425 Maple Street</p>
                <p>Riverside District</p>
                <p>Portland, OR 97205</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-medium text-primary-800 mb-4 uppercase tracking-wide">
                Contact
              </h3>
              <div className="space-y-3 text-neutral-600 font-light">
                <p>
                  <a 
                    href="tel:+15034821234" 
                    className="hover:text-primary-800 transition-colors duration-300"
                  >
                    (503) 482-1234
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:hello@aprilandbutter.com"
                    className="hover:text-primary-800 transition-colors duration-300"
                  >
                    hello@aprilandbutter.com
                  </a>
                </p>
              </div>
            </div>

            {/* Pre-order Notice */}
            <div className="bg-primary-50 p-8 text-center lg:text-left">
              <p className="text-primary-800 font-medium mb-2">
                Pre-order by calling us
              </p>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                Reserve your favorite pastries or place special orders for events and gatherings
              </p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-medium text-primary-800 mb-8 uppercase tracking-wide">
                Hours
              </h3>
              <div className="space-y-6">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-0">
                    <span className="text-neutral-600 font-light">{schedule.day}</span>
                    <span className="text-primary-800 font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Getting Here */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-medium text-primary-800 mb-4 uppercase tracking-wide">
                Getting Here
              </h3>
              <div className="space-y-3 text-neutral-600 font-light text-sm">
                <p>Street parking available</p>
                <p>Bus lines 15 & 22 nearby</p>
                <p>Bike rack at entrance</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-block bg-primary-800 text-white hover:bg-primary-700 px-12 py-4 font-light text-sm uppercase tracking-wide transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CleanVisitInfo