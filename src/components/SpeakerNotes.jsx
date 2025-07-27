import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { usePresentationStore } from '../store/presentationStore'
import { slides } from '../data/slides'

const SpeakerNotes = () => {
  const { currentSlide, toggleSpeakerNotes, getFormattedTime, elapsedTime } = usePresentationStore()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const currentSlideData = slides[currentSlide]

  // Auto-minimize after 5 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isMinimized) {
        setIsMinimized(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isMinimized])

  const handleMouseEnter = () => {
    setIsMinimized(false)
  }

  const handleMouseLeave = () => {
    if (!isFullscreen) {
      setIsMinimized(true)
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setIsMinimized(false)
  }

  if (!currentSlideData?.speakerNotes) return null

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed z-50 transition-all duration-300 ${
          isFullscreen 
            ? 'inset-0' 
            : isMinimized
            ? 'bottom-4 right-4 w-16 h-16'
            : 'bottom-4 right-4 w-96 h-64'
        }`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Minimized State */}
        {isMinimized && !isFullscreen && (
          <motion.button
            className="w-full h-full bg-primary-500 rounded-full shadow-lg flex items-center justify-center"
            onClick={() => setIsMinimized(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Clock className="w-6 h-6 text-white" />
          </motion.button>
        )}

        {/* Expanded State */}
        {(!isMinimized || isFullscreen) && (
          <motion.div
            className={`w-full h-full bg-gray-900/95 border border-gray-700 rounded-lg shadow-2xl flex flex-col ${
              isFullscreen ? 'p-8' : 'p-4'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <h3 className="font-semibold text-white">Speaker Notes</h3>
                <span className="text-sm text-gray-400">
                  Slide {currentSlide + 1} of {slides.length}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-1 hover:bg-gray-800 rounded transition-colors"
                  title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Maximize2 className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                <button
                  onClick={toggleSpeakerNotes}
                  className="p-1 hover:bg-gray-800 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Elapsed Time</span>
                <span className="font-mono text-2xl font-bold text-white">
                  {getFormattedTime()}
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-1">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((elapsedTime / 600000) * 100, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Slide Info */}
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">
                {currentSlideData.title}
              </h4>
              <p className="text-sm text-gray-400">
                {currentSlideData.type === 'content' ? 'Content Slide' : 
                 currentSlideData.type === 'architecture' ? 'Architecture Diagram' :
                 currentSlideData.type === 'demo' ? 'Live Demo' :
                 currentSlideData.type === 'comparison' ? 'Comparison Chart' : 'Custom Slide'}
              </p>
            </div>

            {/* Speaker Notes Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="prose prose-invert prose-sm max-w-none">
                <div className="whitespace-pre-line text-gray-300 leading-relaxed">
                  {currentSlideData.speakerNotes}
                </div>
              </div>
            </div>

            {/* Navigation Hints */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>Press <span className="keyboard-shortcut">←</span> for previous</span>
                  <span>Press <span className="keyboard-shortcut">→</span> for next</span>
                </div>
                <span>Press <span className="keyboard-shortcut">S</span> to close</span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default SpeakerNotes 