'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Mail, 
  BookOpen, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Tags,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen, isMobile }) => {
  const menuItems = [
    { title: 'Home', icon: Home, href: '/' },
    { title: 'Blog', icon: BookOpen, href: '/blog' },
    { title: 'Contact', icon: Mail, href: '/contact' },
    { title: 'Twitter Post', icon: Twitter, href: '/twitter-content' },
    { title: 'Instagram Post', icon: Instagram, href: '/instagram-content' },
    { title: 'LinkedIn Post', icon: Linkedin, href: '/linkedin-content' },
    { title: 'Categories', icon: Tags, href: '/tags' },
  ];

  const sidebarClasses = isMobile
    ? `fixed top-[81px] left-0 h-[calc(100vh)] bg-white dark:bg-black
       transform transition-transform duration-300 ease-in-out z-50
       w-16 shadow-lg overflow-hidden border-r border-gray-200 dark:border-gray-700
       ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
    : `fixed top-[81px] left-0 h-[calc(100vh-81px)] bg-white dark:bg-black
       w-56 shadow-lg overflow-hidden z-50 border-r border-gray-200 dark:border-gray-700`;

  return (
    <div className={sidebarClasses}>
      <div className="flex flex-col h-full w-full">
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}
                  className="flex items-center p-2 rounded-md hover:bg-purple-500 dark:hover:bg-purple-800 group
                    text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {!isMobile && (
                    <>
                      <span className="flex-1 ml-3">{item.title}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {!isMobile && (
          <div className="p-4 border-t dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 CoCreate
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;