'use client';

import { useEffect, useRef, useState } from 'react';

export default function FeaturesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: 'AI Debugging & Code Suggestions',
      description: 'Intelligent error detection and real-time code improvements powered by advanced AI algorithms.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      category: 'student',
    },
    {
      title: 'Animated Walkthroughs',
      description: 'Interactive explainer videos and step-by-step visual guides that make complex concepts crystal clear.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      category: 'student',
    },
    {
      title: 'Learning Analytics Dashboard',
      description: 'Personalized insights tracking progress, strengths, weaknesses, and optimal learning paths tailored for you.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-teal-500 to-green-500',
      category: 'student',
    },
    {
      title: 'Peer Code Review System',
      description: 'Give and receive constructive feedback from peers and mentors to refine your coding skills.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500',
      category: 'student',
    },
    {
      title: 'Real-Time Collaborative Coding',
      description: 'Work simultaneously with teammates on shared code projects with live cursor tracking and instant sync.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-600',
      category: 'student',
    },
    {
      title: 'Multi-Language & Voice Support',
      description: 'Learn coding in English, Hindi, Tamil, and more with voice commands and audio explanations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500',
      category: 'student',
    },
    {
      title: 'Gamified Progress & Leaderboards',
      description: 'Earn badges, climb leaderboards, and track milestones with engaging gamification that motivates learning.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: 'from-yellow-500 to-orange-500',
      category: 'student',
    },
    {
      title: 'Weekly Contests & Hackathons',
      description: 'Compete in coding challenges, hackathons, and tournaments to test skills and win recognition.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      category: 'student',
    },
    {
      title: 'Mentor Management System',
      description: 'Track mentor availability, expertise, and performance with comprehensive management tools for institutions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-600',
      category: 'institution',
    },
    {
      title: 'Institution Tracking Dashboard',
      description: 'Monitor student progress, course completion rates, and learning outcomes across your entire institution.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-blue-600 to-indigo-600',
      category: 'institution',
    },
    {
      title: 'Scalable Training Programs',
      description: 'Deploy and manage large-scale coding bootcamps and training initiatives with automated workflows.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500',
      category: 'institution',
    },
    {
      title: 'Skill Assessment & Quality Tracking',
      description: 'Evaluate mentor quality, track skill development, and generate detailed performance analytics reports.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      category: 'institution',
    },
  ];

  const studentFeatures = features.filter(f => f.category === 'student');
  const institutionFeatures = features.filter(f => f.category === 'institution');

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-labelledby="features-grid-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-40 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 id="features-grid-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your coding journey and achieve excellence
          </p>
        </div>

        {/* For Students & Parents Section */}
        <div className="mb-20">
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">👨‍💻</span>
                For Students & Parents
              </h3>
              <p className="text-lg text-gray-600 font-medium">
                Fast learning, project portfolio, real feedback — everything to succeed
              </p>
            </div>

            {/* Student Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 transform ${
                    isVisible ? `animate-fade-in-up delay-${Math.min(index * 100 + 300, 900)}` : 'opacity-0'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent h-full flex flex-col">
                    {/* Gradient Overlay on Hover */}
                    {hoveredCard === index && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-2xl`}
                        aria-hidden="true"
                      ></div>
                    )}

                    {/* Icon with Animation */}
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 transition-all duration-500 ${
                        hoveredCard === index ? 'scale-110 rotate-12 shadow-xl' : ''
                      }`}
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h4 className="relative text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="relative text-sm text-gray-600 leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Hover Indicator */}
                    <div
                      className={`mt-4 h-1 bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-500 ${
                        hoveredCard === index ? 'w-full' : 'w-0'
                      }`}
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Institutions Section */}
        <div>
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">🏫</span>
                For Institutions
              </h3>
              <p className="text-lg text-gray-600 font-medium">
                Track skills, mentor quality, scalable training — manage education at scale
              </p>
            </div>

            {/* Institution Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {institutionFeatures.map((feature, index) => {
                const globalIndex = studentFeatures.length + index;
                return (
                  <div
                    key={index}
                    className={`group relative transition-all duration-700 transform ${
                      isVisible ? `animate-fade-in-up delay-${Math.min(index * 100 + 600, 900)}` : 'opacity-0'
                    }`}
                    onMouseEnter={() => setHoveredCard(globalIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent h-full flex flex-col">
                      {/* Gradient Overlay on Hover */}
                      {hoveredCard === globalIndex && (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-2xl`}
                          aria-hidden="true"
                        ></div>
                      )}

                      {/* Icon with Animation */}
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 transition-all duration-500 ${
                          hoveredCard === globalIndex ? 'scale-110 rotate-12 shadow-xl' : ''
                        }`}
                        aria-hidden="true"
                      >
                        {feature.icon}
                      </div>

                      {/* Title */}
                      <h4 className="relative text-lg font-bold text-gray-900 mb-3 leading-tight">
                        {feature.title}
                      </h4>

                      {/* Description */}
                      <p className="relative text-sm text-gray-600 leading-relaxed flex-grow">
                        {feature.description}
                      </p>

                      {/* Hover Indicator */}
                      <div
                        className={`mt-4 h-1 bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-500 ${
                          hoveredCard === globalIndex ? 'w-full' : 'w-0'
                        }`}
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
