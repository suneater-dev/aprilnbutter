'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, Coffee } from 'lucide-react'

const VisitInfo = () => {
  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 7:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 5:00 PM' }
  ]

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
            Visit Our Cozy Corner
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Step into our warm, welcoming space where the aroma of fresh bread 
            mingles with the gentle hum of friendly conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-2">Find Us</h3>
                <p className="text-neutral-600 leading-relaxed">
                  425 Maple Street<br />
                  Riverside District<br />
                  Portland, OR 97205
                </p>
                <p className="text-sm text-primary-600 mt-2">
                  Located in the heart of the charming Riverside District, 
                  just two blocks from Riverside Park.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-2">Call Us</h3>
                <p className="text-neutral-600">
                  <a href="tel:+15034821234" className="hover:text-primary-700 transition-colors duration-300">
                    (503) 482-1234
                  </a>
                </p>
                <div className="bg-primary-50 rounded-lg p-4 mt-3">
                  <p className="text-primary-700 font-medium mb-1">Pre-order by calling us!</p>
                  <p className="text-sm text-primary-600">
                    Call ahead to reserve your favorite pastries or place special orders 
                    for events and gatherings.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-primary-800 mb-4">Hours</h3>
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-primary-100 last:border-0">
                      <span className="text-neutral-600">{schedule.day}</span>
                      <span className="font-medium text-primary-700">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience Card */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="w-8 h-8 text-primary-600" />
                <h3 className="text-xl font-display text-primary-800">The April & Butter Experience</h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cozy seating with natural textures and soft lighting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Free WiFi perfect for quiet work or reading</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Fresh pastries baked throughout the day</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Artisan coffee and specialty tea selection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Instagram-worthy spots throughout</span>
                </li>
              </ul>
            </div>

            {/* Parking & Transit */}
            <div className="bg-white rounded-xl border border-primary-100 p-6">
              <h4 className="font-semibold text-primary-800 mb-3">Getting Here</h4>
              <div className="space-y-2 text-sm text-neutral-600">
                <p><span className="font-medium">Parking:</span> Street parking available, plus nearby public lot</p>
                <p><span className="font-medium">Transit:</span> Bus lines 15 & 22 stop right outside</p>
                <p><span className="font-medium">Bike:</span> Bike rack available at entrance</p>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="space-y-4">
              <Link
                href="/contact"
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-warm"
              >
                Contact & Pre-Order
              </Link>
              <Link
                href="/visit-us"
                className="block w-full border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white text-center px-6 py-4 rounded-xl font-medium transition-all duration-300"
              >
                Get Directions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisitInfo