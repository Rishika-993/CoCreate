"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import RightSideBar from "./RightSideBar";
// import {Users, PenTool} from 'lucide-react'
import Image from "next/image";
import featuredPosts from "../../data/FeaturedPosts.json";
import Lottie from "lottie-react";
import particleAnimation from "../../../public/lottie/particlex.json";

export default function Homepage() {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
      lottieRef.current.setSpeed(0.15); // Set the speed here
    }
  }, []);
  return (
    <main className="flex">
      <div className=" lg:mr-80 mb-6 space-y-12 dark:bg-black">
        {/* Hero Section */}
        <section className="relative text-center py-16 sm:py-20 bg-gray-50 dark:bg-gradient-to-r from-slate-950 to-slate-800 px-4 sm:px-10 overflow-hidden">
          <div className="w-full h-full absolute top-10 left-0 right-0 bottom-0 opacity-5 pointer-events-none">
            <Lottie
              animationData={particleAnimation}
              loop
              autoplay
              style={{
                width: "100%",
                height: "100%",
                transform: "scale(4) scaleX(1.3)", // Adjust the zoom level here
                transformOrigin: "center", // Keeps the scaling centered
              }}
              lottieRef={lottieRef}
            />
          </div>
          {/* <div className="absolute bottom-0 left-0 w-full dark:h-60 dark:bg-gradient-to-t from-background to-transparent" /> */}

          <div className="relative z-10 px-4 sm:px-10">
            <h1 className="text-3xl md:text-5xl font-bold p-4 pt-20 m-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Where Ideas Converge
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Unleash the power of collaborative blogging. Join minds, share
              insights, and craft compelling stories together.{" "}
            </p>
            <Link
              href="/blog"
              className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
            {/* <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center justify-center">
          <PenTool className="mr-2" size={20} />
          Start a Collaborative Post
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center justify-center">
          <Users className="mr-2" size={20} />
          Join a Collaboration
        </button>
      </div> */}
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="dark:text-white px-4 sm:px-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={12}
                      height={12}
                      className="rounded-full"
                    />
                    <span className="text-xs dark:text-gray-300">
                      {post.author.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      •
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-purple-600 dark:hover:text-purple-400">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 ">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Stay Updated
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to get the latest blog posts and news right in your
              inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 rounded-lg border border-pink-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Topics Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Popular Topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
              "Web Development",
            ].map((topic) => (
              <Link
                key={topic}
                href={`/topics/${topic.toLowerCase()}`}
                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </section>
        <RightSideBar />
      </div>
    </main>
  );
}
