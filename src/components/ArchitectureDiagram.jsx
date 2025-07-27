import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import mermaid from 'mermaid'

const ArchitectureDiagram = ({ title, description, diagram, highlights = [], diagramLabel }) => {
  const diagramRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

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

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-gradient mb-4">{title}</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">{description}</p>
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

      {/* Diagram Container - Full Height with Scroll */}
      <div className="flex-1 overflow-y-auto">
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

          {/* Diagram - Full Height */}
          <div
            ref={diagramRef}
            className="w-full bg-transparent rounded-lg p-8 border-2 border-dashed border-gray-300"
            style={{ minHeight: '100vh' }}
          />
          
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