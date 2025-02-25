'use client'
//import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="rounded-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-white/20 dark:border-zinc-800 p-1 flex space-x-1 shadow-md">
      {THEMES_OPTIONS.map((themeOption) => {
        const isActive = themeOption.id === theme

        return (
          <button
            key={themeOption.id}
            className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-200 focus-visible:outline-2 ${
              isActive
                ? 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white'
                : 'text-zinc-500 dark:text-zinc-400'
            }`}
            type="button"
            aria-label={`Switch to ${themeOption.label} theme`}
            onClick={() => setTheme(themeOption.id)}
          >
            {themeOption.icon}
          </button>
        )
      })}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <a
          href="https://github.com/jayson-s/jayson-portfolio"
          target="_blank"
          rel="noopener noreferrer author"
        >
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2025 - Jayson Sandhu</span>
            <span>Built with Next.js</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}