import React from 'react'
import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

const WelcomeSlide = () => {
  return (
    <div className="slide-content text-center flex flex-col items-center justify-center min-h-screen">
      {/* Welcome Title */}
      <motion.h1
        className="text-5xl font-bold text-primary-700 mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Welcome to Sana's Capstone Presentation
      </motion.h1>

      {/* Logo */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.8 
        }}
      >
        <img 
          src="/assets/images/android-chrome-512x512.png" 
          alt="High Quality Logo" 
          className="w-32 h-32 object-contain"
          style={{ imageRendering: 'high-quality' }}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-2xl text-gray-700 mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        DevOps Documentation Site
      </motion.p>

      {/* Hook Text */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="text-xl font-medium text-gray-800 leading-relaxed">
          <TypewriterText
            text="One site. Every doc. No more ClickUp clutter for DevOps team"
            speed={60}
            className="text-primary-700 font-semibold"
          />
        </div>
      </motion.div>

      {/* Let's Start Button */}
      <motion.button
        className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Start
      </motion.button>
    </div>
  )
}

export default WelcomeSlide 