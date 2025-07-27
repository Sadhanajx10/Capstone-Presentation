import React, { useEffect } from 'react'
import { usePresentationStore } from '../store/presentationStore'

const KeyboardHandler = () => {
  const { handleKeyPress } = usePresentationStore()

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't handle shortcuts when typing in input fields
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return
      }

      // Prevent default for navigation keys
      if (['ArrowLeft', 'ArrowRight', ' ', 'Home', 'End', 'Escape'].includes(event.key)) {
        event.preventDefault()
      }

      handleKeyPress(event.key)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyPress])

  return null
}

export default KeyboardHandler 