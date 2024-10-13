'use client'

import { useTheme } from '../../context/theme'
import { Moon, Sun } from 'lucide-react'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[var(--box)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-[var(--box-foreground)]" />
      ) : (
        <Sun className="w-5 h-5 text-[var(--box-foreground)]" />
      )}
    </button>
  )
}