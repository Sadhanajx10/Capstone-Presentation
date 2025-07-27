import React from 'react'
import { motion } from 'framer-motion'

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-primary-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
        >
                  <img 
          src="./assets/images/Aeropay_home_logo.png" 
          alt="Aeropay Logo" 
          className="w-96 h-auto object-contain"
        />
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center justify-center space-x-2">
            <motion.div
              className="w-3 h-3 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-3 h-3 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Loading presentation...
          </p>
        </motion.div>

        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 -z-10 bg-primary-50"
          animate={{
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

export default SplashScreen 