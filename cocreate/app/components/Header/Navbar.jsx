'use client'
import Link from 'next/link'
import Image from 'next/image'
import lightaccount from '../../../public/light-account.png'
import darkaccount from '../../../public/dark-account.png'  
import ThemeSwitcher from './ThemeSwitcher'
import { useTheme } from '../../context/theme'
import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar({ onToggleSidebar }) {
  const { theme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-background w-full">
      <div className="py-2 px-5 md:p-2 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={onToggleSidebar}
              className="mr-4 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="text-xl font-bold">
              CoCreate
            </Link>
          </div>
          
          <div className='flex row sm:space-x-6 space-x-4'>
            <div className="flex items-center space-x-2">
              <Link href="/signin">
                <button className="hover:text-[var(--hover1)] border px-2 py-0.5 rounded-lg border-[var(--border)] text-sm">SignIn</button>
              </Link>
              <Image 
                src={theme === "dark" ? darkaccount : lightaccount} 
                alt="account icon"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </div>
            <div>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}