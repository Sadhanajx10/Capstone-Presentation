import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentationStore } from '../store/presentationStore'
import Slide from './Slide'
import FloatingElements from './FloatingElements'
import { slides } from '../data/slides'

const Presentation = () => {
  const { 
    currentSlide, 
    setTotalSlides, 
    nextSlide, 
    prevSlide,
    autoAdvance,
    autoAdvanceInterval,
    resetPresentation
  } = usePresentationStore()

  // Reset presentation and set total slides count on mount
  useEffect(() => {
    resetPresentation()
    setTotalSlides(slides.length)
  }, [resetPresentation, setTotalSlides])

  // Handle URL-based navigation (for direct links)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const slideParam = urlParams.get('slide')
    if (slideParam) {
      const slideIndex = parseInt(slideParam)
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < slides.length) {
        usePresentationStore.getState().setCurrentSlide(slideIndex)
      }
    }
  }, [slides.length])

  // Auto-advance functionality
  useEffect(() => {
    if (!autoAdvance) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoAdvanceInterval)

    return () => clearInterval(interval)
  }, [autoAdvance, autoAdvanceInterval, nextSlide])

  // Handle click navigation
  const handleClick = (e) => {
    const { clientX } = e
    const { innerWidth } = window
    
    if (clientX > innerWidth / 2) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div 
      className="relative w-full h-screen bg-primary-50 cursor-pointer overflow-y-auto"
      onClick={handleClick}
    >
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slide-container min-h-screen"
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 25,
            duration: 0.8 
          }}
        >
          <Slide {...currentSlideData} />
        </motion.div>
      </AnimatePresence>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200">
        <div className="text-sm font-medium text-gray-700">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Navigation Hints - Bottom Corners */}
      <div className="absolute bottom-6 left-6 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm border border-gray-200">
        Press G for TOC
      </div>
      <div className="absolute bottom-6 right-6 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm border border-gray-200">
        Press ? for help
      </div>

      {/* Auto-advance Indicator */}
      {autoAdvance && (
        <motion.div
          className="absolute top-8 left-8 bg-primary-500/20 text-primary-700 px-3 py-1 rounded-full text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Auto-advance ON
        </motion.div>
      )}
    </div>
  )
}

export default Presentation 