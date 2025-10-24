'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-teal-500/10"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent">
                CodeSaathi
              </span>
              <br />
              <span className="text-gray-800">
                Your Smart Coding Companion
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transform isolated learning into tech-powered collaboration and mentorship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-gentle overflow-hidden">
                <span className="relative z-10">Try Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-md hover:shadow-xl border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                See Features
              </button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-3xl p-8 backdrop-blur-sm border border-blue-200/30 shadow-2xl">
                {/* Animated Coding Workspace Illustration */}
                <div className="space-y-6">
                  {/* Student Avatar with Code */}
                  <div className="flex items-start space-x-4 animate-float">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      S
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                      <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>

                  {/* AI Assistant with Response */}
                  <div className="flex items-start space-x-4 ml-8 animate-float delay-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      AI
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                      <div className="h-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded w-4/5 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>

                  {/* Mentor Avatar with Guidance */}
                  <div className="flex items-start space-x-4 animate-float delay-400">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      M
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                      <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-3 animate-float delay-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-mono text-gray-700">{'</>'}</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3 animate-float delay-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-mono text-gray-700">{'{ }'}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-teal-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
