'use client'
import Link from 'next/link'
import Image from 'next/image'
import lightaccount from '../../../public/light-account.png'
import darkaccount from '../../../public/dark-account.png'  
import ThemeSwitcher from './ThemeSwitcher'
import { useTheme } from '../../context/theme'
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar'

export default function Navbar() {
  const { theme } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-background">
        <div className="py-2 px-5 md:p-2 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden mr-4 rounded-md"
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
                <button className="hover:text-[var(--hover1)] border px-2 rounded-lg border-[var(--border)]">SignIn</button>
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
      
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} isMobile={true} />
      </div>
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar isOpen={true} setIsOpen={() => {}} isMobile={false} />
      </div>
      
      {/* Spacer div to prevent content from going under the fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}