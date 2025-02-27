'use client'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useEffect, useState, ReactNode } from 'react'

export function AnimatedBackground({ children }: { children: ReactNode }) {
  const { theme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    const resolvedTheme = theme === 'system' ? systemTheme : theme
    setCurrentTheme(resolvedTheme)
  }, [theme, systemTheme])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        style={{
          background: currentTheme === 'dark'
            ? 'linear-gradient(135deg, #111827, #1F2937, #374151)'
            : 'linear-gradient(135deg, #a8c0ff, #8ec5fc, #ffffff)',
          backgroundSize: '300% 300%',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />

      {/* Page Content */}
      {children}
    </div>
  )
}