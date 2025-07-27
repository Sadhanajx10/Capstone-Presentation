import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'

const CodeBlock = ({ children, className = '' }) => {
  const codeRef = useRef(null)
  const [copied, setCopied] = useState(false)

  // Extract language from className
  const language = className.replace('language-', '') || 'text'

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [children])

  const handleCopy = async () => {
    if (children) {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {/* Copy Button */}
      <motion.button
        className="absolute top-2 right-2 p-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-300" />
        )}
      </motion.button>

      {/* Language Badge */}
      <div className="absolute top-2 left-2">
        <span className="px-2 py-1 text-xs font-mono text-gray-400 bg-gray-800/80 rounded">
          {language}
        </span>
      </div>

      {/* Code Block */}
      <pre className="code-block mt-8 mb-4">
        <code
          ref={codeRef}
          className={`language-${language} text-sm leading-relaxed`}
        >
          {children}
        </code>
      </pre>
    </motion.div>
  )
}

export default CodeBlock 