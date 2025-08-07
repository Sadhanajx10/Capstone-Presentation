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
    // Clear any existing localStorage timer data
    localStorage.removeItem('presentation-store')
    
    // Reset timer on page load
    resetPresentation()
    console.log('🔄 Timer reset on page load')
    
    const timer = setTimeout(() => {
      setShowSplash(false)
      // Start timer immediately when first slide appears
      startPresentation()
      console.log('🚀 Presentation started, timer should be at 0:00')
    }, 1000) // 1 second splash - faster transition

    return () => clearTimeout(timer)
  }, []) // Empty dependency array - only run on page load/refresh

  // Timer effect - resets every 10 minutes
  useEffect(() => {
    console.log('⏰ Timer effect - isTimerRunning:', isTimerRunning, 'startTime:', startTime)
    
    let interval
    if (isTimerRunning && startTime) {
      console.log('⏰ Starting timer interval')
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        // Reset timer every 10 minutes (600,000 ms)
        const resetInterval = 600000 // 10 minutes
        const adjustedElapsed = elapsed % resetInterval
        updateElapsedTime(adjustedElapsed)
        console.log('⏰ Timer update - elapsed:', adjustedElapsed)
      }, 1000)
    } else {
      console.log('⏰ Timer not running - isTimerRunning:', isTimerRunning, 'startTime:', startTime)
    }

    return () => {
      if (interval) {
        console.log('⏰ Clearing timer interval')
        clearInterval(interval)
      }
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