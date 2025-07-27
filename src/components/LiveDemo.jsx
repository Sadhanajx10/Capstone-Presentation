import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Wifi, WifiOff, RefreshCw } from 'lucide-react'

const LiveDemo = ({ title, url, fallback }) => {
  const [isOnline, setIsOnline] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check online status
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    window.addEventListener('online', checkOnlineStatus)
    window.addEventListener('offline', checkOnlineStatus)

    return () => {
      window.removeEventListener('online', checkOnlineStatus)
      window.removeEventListener('offline', checkOnlineStatus)
    }
  }, [])

  const handleIframeLoad = () => {
    console.log('Iframe loaded successfully')
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    console.log('Iframe failed to load')
    setIsLoading(false)
    setHasError(true)
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setHasError(false)
    // Force iframe reload
    const iframe = document.getElementById('demo-iframe')
    if (iframe) {
      iframe.src = iframe.src
    }
  }

  return (
    <div className="w-full h-full flex flex-col p-4">
      {/* Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold text-gradient mb-2">{title}</h1>
        
        {/* Status Indicators */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-400">
              Online
            </span>
          </div>
        </div>
      </motion.div>

      {/* Demo Container */}
      <div className="flex-1 relative">
        {/* Screenshot Display */}
        <motion.div
          className="w-full h-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Clickable Website Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {isLoading && (
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
                <p className="text-gray-600">Loading image...</p>
              </div>
            )}
            
            {hasError && (
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="text-red-500 text-6xl">⚠️</div>
                <p className="text-red-600 font-semibold">Image failed to load</p>
                <p className="text-gray-600 text-sm">Path: /Capstone-Presentation/assets/images/website.png</p>
                <button 
                  onClick={() => window.open(url, '_blank')}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                >
                  Open Website
                </button>
              </div>
            )}
            
            <img 
              src="/Capstone-Presentation/assets/images/website.png" 
              alt="Documentation Website Screenshot" 
              className={`max-w-full max-h-full object-contain cursor-pointer ${isLoading || hasError ? 'hidden' : ''}`}
              onClick={() => window.open(url, '_blank')}
              onLoad={() => {
                setIsLoading(false);
                setHasError(false);
              }}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
                console.error('Failed to load image:', '/Capstone-Presentation/assets/images/website.png');
              }}
            />
          </div>

          {/* External Link Button */}
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Open in new tab"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </motion.a>
        </motion.div>
      </div>


    </div>
  )
}

export default LiveDemo 