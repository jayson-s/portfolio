'use client'
import { TextEffect } from '@/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Jayson Sandhu
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-500 dark:text-zinc-400"
          //delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
