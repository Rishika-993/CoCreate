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
    { title: 'Contact', icon: Mail, href: '/contact' },
    { title: 'Create Blog', icon: BookOpen, href: '/blog' },
    { title: 'Create Post', icon: Twitter, href: '/twitter-content' },
    { title: 'Create Post', icon: Instagram, href: '/instagram-content' },
    { title: 'Create Post', icon: Linkedin, href: '/linkedin-content' },
    { title: 'Categories', icon: Tags, href: '/tags' },
    { title: 'BookMarks', icon: Tags, href: '/bookmarks' },
  ];

  const sidebarClasses = isMobile
    ? `fixed top-[81px] left-0 h-[calc(100vh-81px)] bg-white dark:bg-black
       transform transition-all duration-300 ease-in-out z-50
       shadow-lg overflow-hidden border-r border-gray-200 dark:border-gray-700
       ${isOpen ? 'w-16 translate-x-0' : 'w-0 -translate-x-full'}`
    : `fixed top-[81px] left-0 h-[calc(100vh-81px)] bg-white dark:bg-black
       shadow-lg z-50 border-r border-gray-200 dark:border-gray-700
       transition-all duration-300 ease-in-out
       ${isOpen ? 'w-56 overflow-y-auto' : 'w-16 overflow-hidden'}`;

  return (
    <div className={sidebarClasses}>
      <div className="flex flex-col h-full w-full">
        <nav className="flex-1 py-4">
          <ul className="space-y-2 px-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}
                  className="flex items-center p-2 rounded-md hover:bg-purple-500 dark:hover:bg-purple-800 group
                    text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 min-w-[20px]" />
                  {(!isMobile && (isOpen || !isMobile)) && (
                    <>
                      <span className={`ml-3 whitespace-nowrap ${!isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                        {item.title}
                      </span>
                      {isOpen && (
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {(!isMobile && isOpen) && (
          <div className="p-4 border-t dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              © 2024 CoCreate
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;