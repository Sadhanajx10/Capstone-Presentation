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
    startPresentation
  } = usePresentationStore()

  // Handle splash screen transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
      startPresentation()
    }, 5000) // 3 seconds splash

    return () => clearTimeout(timer)
  }, [startPresentation])

  // Timer effect
  useEffect(() => {
    let interval
    if (isTimerRunning && startTime) {
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        updateElapsedTime(elapsed)
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