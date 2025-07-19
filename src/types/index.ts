// Common types for April & Butter Bakery

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'pastries' | 'breads' | 'cakes' | 'beverages'
  image?: string
  allergens?: string[]
  isVegan?: boolean
  isGlutenFree?: boolean
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  inquiryType: 'general' | 'catering' | 'preorder' | 'feedback'
}

export interface PreOrderForm extends ContactForm {
  items: {
    menuItemId: string
    quantity: number
    specialInstructions?: string
  }[]
  pickupDate: string
  pickupTime: string
}

export interface BusinessHours {
  day: string
  open: string
  close: string
  isClosed: boolean
}

export interface BakeryInfo {
  name: string
  tagline: string
  description: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  phone: string
  email: string
  hours: BusinessHours[]
  socialMedia: {
    instagram?: string
    facebook?: string
  }
}