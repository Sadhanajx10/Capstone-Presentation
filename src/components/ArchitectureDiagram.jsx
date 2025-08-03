import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import mermaid from 'mermaid'

const ArchitectureDiagram = ({ title, description, diagram, highlights = [], diagramLabel }) => {
  const diagramRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Configure Mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      themeVariables: {
        primaryColor: '#0ea5e9',
        primaryTextColor: '#1f2937',
        primaryBorderColor: '#0284c7',
        lineColor: '#6b7280',
        secondaryColor: '#d946ef',
        tertiaryColor: '#10b981',
        background: '#ffffff',
        nodeTextColor: '#1f2937',
        clusterBkg: '#f3f4f6',
        clusterBorder: '#d1d5db',
        defaultLinkColor: '#6b7280',
        titleColor: '#1f2937',
        edgeLabelBackground: '#f9fafb',
        mainBkg: '#ffffff',
        errorBkgColor: '#dc2626',
        errorTextColor: '#ffffff',
        fontSize: '20px',
        fontFamily: 'Reem Kufi, sans-serif'
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 120,
        rankSpacing: 120
      }
    })

    // Render diagram
    if (diagramRef.current && diagram) {
      console.log('Rendering diagram:', diagram)
      mermaid.render('architecture-diagram', diagram).then(({ svg }) => {
        console.log('Diagram rendered successfully')
        diagramRef.current.innerHTML = svg
        setIsLoaded(true)
      }).catch((error) => {
        console.error('Error rendering diagram:', error)
        setIsLoaded(true)
      })
    }
  }, [diagram])

  // Zoom and pan handlers
  const handleZoomIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setZoomLevel(prev => Math.min(prev * 1.2, 3))
  }

  const handleZoomOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setZoomLevel(prev => Math.max(prev / 1.2, 0.3))
  }

  const handleReset = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e) => {
    if (e.button === 0) { // Left click only
      e.preventDefault()
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault()
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.max(0.3, Math.min(3, zoomLevel * delta))
    
    // Calculate new position to zoom towards mouse
    const scaleChange = newZoom / zoomLevel
    const newX = x - (x - position.x) * scaleChange
    const newY = y - (y - position.y) * scaleChange
    
    setZoomLevel(newZoom)
    setPosition({ x: newX, y: newY })
  }

  const handleScrollUp = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setPosition(prev => ({ ...prev, y: prev.y + 50 }))
  }

  const handleScrollDown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setPosition(prev => ({ ...prev, y: prev.y - 50 }))
  }

  const handleScrollLeft = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setPosition(prev => ({ ...prev, x: prev.x + 50 }))
  }

  const handleScrollRight = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setPosition(prev => ({ ...prev, x: prev.x - 50 }))
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-6xl font-bold text-gradient mb-4">{title}</h1>
        <p className="text-3xl text-gray-700 max-w-3xl mx-auto">{description}</p>
        {diagramLabel && (
          <motion.div
            className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {diagramLabel}
          </motion.div>
        )}
      </motion.div>

      {/* Zoom Controls */}
      <div 
        className="flex justify-center mb-4 space-x-2"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <motion.button
          onClick={handleZoomOut}
          className="px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Zoom Out"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </motion.button>
        
        <motion.button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Reset View"
        >
          Reset
        </motion.button>
        
        <motion.button
          onClick={handleZoomIn}
          className="px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Zoom In"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </motion.button>
        
        <div className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg">
          {Math.round(zoomLevel * 100)}%
        </div>
      </div>

      {/* Scroll Controls */}
      <div 
        className="flex justify-center mb-4 space-x-2"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <motion.button
          onClick={handleScrollUp}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Scroll Up"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
        
        <motion.button
          onClick={handleScrollLeft}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Scroll Left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        
        <motion.button
          onClick={handleScrollRight}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Scroll Right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
        
        <motion.button
          onClick={handleScrollDown}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Scroll Down"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </div>

      {/* Diagram Container - Full Height with Scroll */}
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          className="relative w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Loading State */}
          {!isLoaded && (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          )}

          {/* Zoom Container */}
          <div
            className="relative overflow-auto"
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              minHeight: '60vh',
              maxHeight: '70vh'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {/* Diagram - Full Height */}
            <div
              ref={diagramRef}
              className="w-full bg-transparent rounded-lg p-8 border-2 border-dashed border-gray-300"
              style={{ 
                minHeight: '100vh',
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: '0 0',
                transition: isDragging ? 'none' : 'transform 0.2s ease-out'
              }}
            />
          </div>
          
          {/* Fallback content if diagram fails */}
          {isLoaded && diagramRef.current && !diagramRef.current.innerHTML.includes('svg') && (
            <div className="text-center text-gray-600 mt-8">
              <p className="text-xl mb-4">Diagram loading...</p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
            </div>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <motion.div
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-primary-700 font-medium">{highlight}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ArchitectureDiagram