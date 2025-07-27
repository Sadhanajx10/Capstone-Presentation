import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowLeft, ArrowRight, Keyboard, Mouse, Monitor } from 'lucide-react'
import { usePresentationStore } from '../store/presentationStore'

const HelpModal = () => {
  const { toggleHelp } = usePresentationStore()

  const shortcuts = [
    { key: '←', description: 'Previous slide' },
    { key: '→', description: 'Next slide' },
    { key: 'Space', description: 'Next slide' },
    { key: 'G', description: 'Table of contents' },
    { key: '?', description: 'Show/hide help' },
    { key: 'S', description: 'Toggle speaker notes' },
    { key: 'Home', description: 'First slide' },
    { key: 'End', description: 'Last slide' },
    { key: 'Escape', description: 'Close modals' },
    { key: '0-9', description: 'Jump to slide number' }
  ]

  const mouseControls = [
    { action: 'Click left side', description: 'Previous slide' },
    { action: 'Click right side', description: 'Next slide' },
    { action: 'Scroll', description: 'Navigate slides' }
  ]

  const features = [
    { icon: Monitor, title: 'Live Demo', description: 'Embedded live site with offline fallback' },
    { icon: Keyboard, title: 'Keyboard Navigation', description: 'Full keyboard support for accessibility' },
    { icon: Mouse, title: 'Click Navigation', description: 'Click anywhere to navigate' }
  ]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleHelp}
      >
        <motion.div
          className="bg-gray-900/95 border border-gray-700 rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold text-gradient">Help & Controls</h2>
            <button
              onClick={toggleHelp}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Keyboard Shortcuts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Keyboard className="w-5 h-5 mr-2 text-primary-400" />
                Keyboard Shortcuts
              </h3>
              <div className="space-y-3">
                {shortcuts.map((shortcut, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <span className="text-gray-300">{shortcut.description}</span>
                    <span className="keyboard-shortcut">{shortcut.key}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mouse Controls */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Mouse className="w-5 h-5 mr-2 text-primary-400" />
                Mouse Controls
              </h3>
              <div className="space-y-3">
                {mouseControls.map((control, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <span className="text-gray-300">{control.description}</span>
                    <span className="text-sm font-mono text-primary-300">{control.action}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 p-6 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <h4 className="font-semibold text-primary-300 mb-3">Pro Tips</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Use <span className="keyboard-shortcut">G</span> to quickly jump to any slide</li>
              <li>• Press <span className="keyboard-shortcut">S</span> to open speaker notes in a separate window</li>
              <li>• The progress bar at the top shows your presentation progress</li>
              <li>• Timer shows elapsed time to help you stay on schedule</li>
              <li>• All animations and transitions are optimized for performance</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default HelpModal 