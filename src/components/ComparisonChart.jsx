import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, CheckCircle, XCircle } from 'lucide-react'

const ComparisonChart = ({ title, before, after }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const MetricCard = ({ label, value, unit, trend, isPositive = true }) => (
    <motion.div
      className="bg-gray-800/50 border border-gray-700 rounded-lg p-4"
      variants={itemVariants}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        {trend && (
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-white">
        {value} {unit}
      </div>
    </motion.div>
  )

  const FeatureList = ({ title, items, isPositive = true }) => (
    <motion.div
      className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
      variants={itemVariants}
    >
      <h3 className={`text-xl font-semibold mb-4 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {isPositive ? (
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            )}
            <span className="text-gray-300">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )

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
      </motion.div>

      {/* Comparison Grid */}
      <motion.div
        className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Before Column */}
        <div className="space-y-6">
          <motion.h2 
            className="text-4xl font-semibold text-red-400 text-center"
            variants={itemVariants}
          >
            {before.title}
          </motion.h2>

          {/* Before Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(before.metrics).map(([key, value]) => (
              <MetricCard
                key={key}
                label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                value={value}
                unit={key.includes('Time') ? '' : key.includes('accuracy') ? '%' : ''}
                isPositive={false}
              />
            ))}
          </div>

          {/* Before Features */}
          <FeatureList
            title="Pain Points"
            items={before.items}
            isPositive={false}
          />
        </div>

        {/* After Column */}
        <div className="space-y-6">
          <motion.h2 
            className="text-4xl font-semibold text-green-400 text-center"
            variants={itemVariants}
          >
            {after.title}
          </motion.h2>

          {/* After Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(after.metrics).map(([key, value]) => (
              <MetricCard
                key={key}
                label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                value={value}
                unit={key.includes('Time') ? '' : key.includes('accuracy') ? '%' : ''}
                isPositive={true}
              />
            ))}
          </div>

          {/* After Features */}
          <FeatureList
            title="Improvements"
            items={after.items}
            isPositive={true}
          />
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Key Improvements
          </h3>
          <p className="text-gray-300">
            Dramatic improvements in search speed, onboarding time, and documentation quality
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ComparisonChart 