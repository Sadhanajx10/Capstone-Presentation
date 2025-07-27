import React from 'react'
import { motion } from 'framer-motion'
import { usePresentationStore } from '../store/presentationStore'

const ProgressBar = () => {
  const { getProgress } = usePresentationStore()
  const progress = getProgress()

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-700"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  )
}

export default ProgressBar 