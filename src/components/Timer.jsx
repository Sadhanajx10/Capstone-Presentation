import React from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { usePresentationStore } from '../store/presentationStore'

const Timer = () => {
  const { getFormattedTime, elapsedTime, isTimerRunning } = usePresentationStore()
  
  // Debug logging
  React.useEffect(() => {
    console.log('⏰ Timer component - elapsedTime:', elapsedTime, 'isTimerRunning:', isTimerRunning)
  }, [elapsedTime, isTimerRunning])
  
  // Calculate time warnings (10 minutes = 600000ms)
  const totalTime = 600000 // 10 minutes
  const warningThreshold = totalTime * 0.8 // 8 minutes
  const criticalThreshold = totalTime * 0.9 // 9 minutes
  
  const getTimeColor = () => {
    if (elapsedTime > criticalThreshold) return 'text-red-400'
    if (elapsedTime > warningThreshold) return 'text-yellow-400'
    return 'text-gray-300'
  }

  const getTimeBackground = () => {
    if (elapsedTime > criticalThreshold) return 'bg-red-500/20'
    if (elapsedTime > warningThreshold) return 'bg-yellow-500/20'
    return 'bg-gray-800/50'
  }

  // Always show timer, even if not running yet
  // if (!isTimerRunning) return null

  return (
    <motion.div
      className={`fixed top-4 left-4 ${getTimeBackground()} border border-gray-300 rounded-lg px-3 py-2 z-40`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-gray-400" />
        <span className={`font-mono text-sm font-medium ${isTimerRunning ? getTimeColor() : 'text-gray-400'}`}>
          {isTimerRunning ? getFormattedTime() : 'Ready'}
        </span>
      </div>
      
      {/* Progress indicator */}
      <div className="mt-1 w-full bg-gray-300 rounded-full h-1">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${isTimerRunning ? Math.min((elapsedTime / totalTime) * 100, 100) : 0}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default Timer 