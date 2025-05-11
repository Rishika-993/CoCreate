'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../Header/Navbar';
import Sidebar from '../Header/Sidebar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setIsSidebarOpen(!mobile);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} isMobile={isMobile} />
        <main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen && !isMobile ? 'ml-56' : 'ml-16'}`}>
          {children}
        </main>
      </div>
    </div>      
  );
};

export default Layout;