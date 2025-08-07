import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePresentationStore } from './store/presentationStore'
import SplashScreen from './components/SplashScreen'
import Presentation from './components/Presentation'
import TableOfContents from './components/TableOfContents'
import HelpModal from './components/HelpModal'
import SpeakerNotes from './components/SpeakerNotes'
import ProgressBar from './components/ProgressBar'
import Timer from './components/Timer'
import KeyboardHandler from './components/KeyboardHandler'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const { 
    showTOC, 
    showHelp, 
    showSpeakerNotes,
    isTimerRunning,
    updateElapsedTime,
    startTime,
    startPresentation,
    resetPresentation
  } = usePresentationStore()

  // Reset timer and handle splash screen transition
  useEffect(() => {
    // Reset timer on page load
    resetPresentation()
    
    const timer = setTimeout(() => {
      setShowSplash(false)
      startPresentation()
    }, 5000) // 5 seconds splash

    return () => clearTimeout(timer)
  }, [startPresentation, resetPresentation])

  // Timer effect - resets every 10 minutes
  useEffect(() => {
    let interval
    if (isTimerRunning && startTime) {
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        // Reset timer every 10 minutes (600,000 ms)
        const resetInterval = 600000 // 10 minutes
        const adjustedElapsed = elapsed % resetInterval
        updateElapsedTime(adjustedElapsed)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isTimerRunning, startTime, updateElapsedTime])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <div className="relative w-full h-screen bg-primary-50 text-gray-900 overflow-hidden">
      {/* Progress Bar */}
      <ProgressBar />
      
      {/* Timer */}
      <Timer />
      
      {/* Keyboard Handler */}
      <KeyboardHandler />
      
      {/* Main Content */}
      <Presentation />
      
      {/* Modals */}
      <AnimatePresence>
        {showTOC && <TableOfContents />}
        {showHelp && <HelpModal />}
        {showSpeakerNotes && <SpeakerNotes />}
      </AnimatePresence>
    </div>
  )
}

export default App 