import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import { usePresentationStore } from '../store/presentationStore'
import { slides } from '../data/slides'
import Slide from './Slide'

const TableOfContents = () => {
  const { currentSlide, goToSlide, toggleTOC } = usePresentationStore()
  const [hoveredSlide, setHoveredSlide] = useState(null)

  const handleSlideClick = (slideIndex) => {
    goToSlide(slideIndex)
    // Keep TOC open so user can see content immediately
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleTOC}
      >
        <motion.div
          className="bg-white/95 border border-gray-300 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary-700">Table of Contents</h2>
            <button
              onClick={toggleTOC}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Slides List */}
          <div className="space-y-2 overflow-y-auto max-h-[60vh]">
            {slides.map((slide, index) => (
                              <motion.button
                  key={slide.id}
                  onClick={() => handleSlideClick(index)}
                  className={`text-left p-3 rounded-lg border transition-all w-full ${
                    index === currentSlide
                      ? 'bg-primary-500/20 border-primary-500 text-gray-900'
                      : 'bg-gray-100/50 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === currentSlide
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{slide.title}</h3>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {slide.type === 'content' ? 'Content' : 
                         slide.type === 'architecture' ? 'Architecture Diagram' :
                         slide.type === 'demo' ? 'Live Demo' :
                         slide.type === 'comparison' ? 'Comparison Chart' : 'Custom'}
                      </p>
                    </div>
                  </div>
                  {index === currentSlide && (
                    <Play className="w-4 h-4 text-primary-500" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Navigation Tips */}
          <div className="mt-4 p-3 bg-gray-100/50 rounded-lg border border-gray-300">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Navigation Tips</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600">
                          <div>
              <p><span className="keyboard-shortcut">Click:</span> Navigate to slide</p>
              <p><span className="keyboard-shortcut">X</span> Close TOC</p>
            </div>
              <div>
                <p><span className="keyboard-shortcut">→</span> Next slide</p>
                <p><span className="keyboard-shortcut">G</span> Table of contents</p>
                <p><span className="keyboard-shortcut">Esc</span> Close modals</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TableOfContents 