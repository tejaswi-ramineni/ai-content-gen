import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="border-b border-white/10 backdrop-blur-xl bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white tracking-wide">Content Creator</span>
              </div>
              <div>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium
                  text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9]
                  transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
                >
                  Launch App
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Main Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
                Create Content with
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899]">
                  AI Magic
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your ideas into engaging content instantly. Powered by advanced AI, 
                crafted for modern creators.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium
                  text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9]
                  transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
                >
                  Start Creating
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative p-8 bg-black/40 backdrop-blur-xl rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Templates</h3>
                <p className="text-gray-300">25+ AI-powered templates for any content type</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative p-8 bg-black/40 backdrop-blur-xl rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom Styles</h3>
                <p className="text-gray-300">Personalize content to match your brand</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#EC4899] to-[#4F46E5] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative p-8 bg-black/40 backdrop-blur-xl rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#4F46E5] mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Free to Start</h3>
                <p className="text-gray-300">Begin creating without any upfront cost</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#EC4899] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative p-8 bg-black/40 backdrop-blur-xl rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#EC4899] mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Expert help available around the clock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}