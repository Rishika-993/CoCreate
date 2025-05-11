"use client";
import React from "react";
import Image from "next/image";
import { Bookmark, Search, Tag } from "lucide-react";
import sidebarData from "../../data/SidebarData.json";

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block w-80 fixed right-0 top-8 h-screen overflow-y-auto p-6 pb-24 bg-white dark:bg-black  border-l border-[var(--border)]">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full pl-10 pr-4 py-2 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg 
                     text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-400"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      {/* Curated Picks Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6 dark:text-white">Trending</h2>
        <div className="space-y-8">
          {sidebarData.curatedPicks.map((pick, index) => (
            <article key={index} className="flex flex-row space-x-2">
              <div className="flex relative w-12 h-12">
                {" "}
                {/* give a fixed height */}
                <Image
                  src={pick.author.image}
                  alt={pick.author.title}
                  width={48}
                  height={48}
                  // sizes="48px"
                  className="object-cover rounded-full h-6 w-6"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs dark:text-gray-300">
                    {pick.author.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    •
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {pick.category}
                  </span>
                </div>

                {/* Title and image row */}
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-xs text-gray-900 dark:text-gray-100 flex-1">
                    {pick.title}
                  </h3>
                </div>
                {/* Date, read time, and bookmark row */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>{pick.date}</span>
                    <span className="mx-1">•</span>
                    <span>{pick.readTime}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-2">
                <div className="flex relative w-12  h-full">
                  <Image
                    src={pick.image}
                    alt={pick.title}
                    // width={12}
                    // height={12}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-xl font-semibold my-4 dark:text-white">
          Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {sidebarData.categories.map((category, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 
                           dark:bg-gray-800   00 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Tag className="w-3 h-3 inline-block mr-2" />
              {category}
            </button>
          ))}
        </div>
        <button className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
          View More Categories
        </button>
      </section>
    </aside>
  );
};

export default RightSidebar;
