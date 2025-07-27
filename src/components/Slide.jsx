import React from 'react'
import { motion } from 'framer-motion'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './CodeBlock'
import ArchitectureDiagram from './ArchitectureDiagram'
import LiveDemo from './LiveDemo'
import ComparisonChart from './ComparisonChart'
import WelcomeSlide from './WelcomeSlide'

// MDX Components
const components = {
  h1: (props) => (
    <motion.h1 
      {...props} 
      className="text-7xl font-bold text-gradient mb-6"
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        delay: 0.2, 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    />
  ),
  h2: (props) => (
    <motion.h2 
      {...props} 
      className="text-5xl font-semibold text-gray-900 mb-4"
      initial={{ y: 30, opacity: 0, x: -20 }}
      animate={{ y: 0, opacity: 1, x: 0 }}
      transition={{ 
        delay: 0.3, 
        duration: 0.6,
        type: "spring",
        stiffness: 80
      }}
    />
  ),
  h3: (props) => (
    <motion.h3 
      {...props} 
      className="text-4xl font-medium text-gray-700 mb-3"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    />
  ),
  p: (props) => (
    <motion.p 
      {...props} 
      className="text-2xl text-gray-700 leading-relaxed mb-4"
      initial={{ y: 25, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        delay: 0.5, 
        duration: 0.7,
        type: "spring",
        stiffness: 60
      }}
    />
  ),
  ul: (props) => (
    <motion.ul 
      {...props} 
      className="list-disc list-inside text-2xl text-gray-700 space-y-2 mb-4"
      initial={{ y: 30, opacity: 0, x: -30 }}
      animate={{ y: 0, opacity: 1, x: 0 }}
      transition={{ 
        delay: 0.6, 
        duration: 0.8,
        type: "spring",
        stiffness: 70
      }}
    />
  ),
  ol: (props) => (
    <motion.ol 
      {...props} 
      className="list-decimal list-inside text-2xl text-gray-700 space-y-2 mb-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    />
  ),
  li: (props) => (
    <motion.li 
      {...props} 
      className="ml-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
    />
  ),
  strong: (props) => <strong {...props} className="text-gray-900 font-semibold" />,
  em: (props) => <em {...props} className="text-primary-700 italic" />,
  code: (props) => (
    <code {...props} className="bg-gray-800 text-primary-300 px-2 py-1 rounded text-sm font-mono" />
  ),
  pre: (props) => <CodeBlock {...props} />,
  blockquote: (props) => (
    <motion.blockquote 
      {...props} 
      className="border-l-4 border-primary-500 pl-6 py-4 bg-primary-500/10 rounded-r-lg italic text-gray-700"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
    />
  ),
  // Custom components
  ArchitectureDiagram,
  LiveDemo,
  ComparisonChart
}

const Slide = ({ 
  title, 
  content, 
  type = 'content',
  layout = 'center',
  background,
  className = '',
  children,
  component
}) => {
  const getLayoutClasses = () => {
    switch (layout) {
      case 'left':
        return 'text-left'
      case 'right':
        return 'text-right'
      case 'split':
        return 'grid grid-cols-2 gap-8 items-center'
      case 'full':
        return 'w-full h-full'
      default:
        return 'text-center'
    }
  }

  const getBackgroundStyle = () => {
    if (background?.type === 'gradient') {
      return `linear-gradient(${background.direction || 'to right'}, ${background.colors.join(', ')})`
    }
    if (background?.type === 'image') {
      return `url(${background.url})`
    }
    return 'transparent'
  }

  return (
    <motion.div
      className={`slide-content ${getLayoutClasses()} ${className} min-h-screen`}
      style={{
        background: getBackgroundStyle(),
        backgroundSize: background?.type === 'image' ? 'cover' : 'auto',
        backgroundPosition: background?.type === 'image' ? 'center' : 'auto'
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {type === 'content' && (
        <motion.div 
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: content }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        />
      )}
      
      {type === 'custom' && component === 'WelcomeSlide' && <WelcomeSlide />}
      
      {type === 'custom' && !component && children}
      
      {type === 'architecture' && (
        <ArchitectureDiagram {...content} />
      )}
      
      {type === 'demo' && (
        <LiveDemo {...content} />
      )}
      
      {type === 'comparison' && (
        <ComparisonChart {...content} />
      )}
    </motion.div>
  )
}

export default Slide 