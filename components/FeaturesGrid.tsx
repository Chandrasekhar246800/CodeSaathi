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
    // Student & Learner Features (14 modules)
    {
      title: 'Playground (Live Cloud IDE)',
      description: 'VSCode-like environment with real code execution, AI debugging, syntax hints, and live multi-cursor collaboration.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      category: 'student',
    },
    {
      title: 'Challenges & Contests',
      description: '1000s of coding problems, daily challenges, hackathons, and college-wide & global contests to test your skills.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      category: 'student',
    },
    {
      title: 'Adaptive Learning Path',
      description: 'Personalized roadmap that evolves based on your performance, weaknesses, streaks, and AI-powered insights.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      gradient: 'from-teal-500 to-green-500',
      category: 'student',
    },
    {
      title: 'Interview Prep Engine',
      description: 'Company-wise questions, behavioral simulations, system design basics, AI & human mock interviews.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500',
      category: 'student',
    },
    {
      title: 'My Roadmap & Progress',
      description: 'Visual progress tracker with milestones, skill graphs, completed modules, and strength/weakness dashboard.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-600',
      category: 'student',
    },
    {
      title: 'AI Assistant',
      description: 'On-demand tutor for code help, explanations, doubt solving, voice input, multilingual answers & hints.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500',
      category: 'student',
    },
    {
      title: 'Progress & Analytics',
      description: 'Deep insights: submission history, improvement rate, time spent, accuracy profile & concept mastery graphs.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-yellow-500 to-orange-500',
      category: 'student',
    },
    {
      title: 'Leaderboard & Rankings',
      description: 'Global, country, college, friends & skill-specific rankings with badges, trophies, and seasonal competitions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      category: 'student',
    },
    {
      title: 'Multilingual Support',
      description: 'Learn in English, Hindi, Telugu, Tamil, Bengali, Kannada, Malayalam, Marathi with localized AI & content.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-600',
      category: 'student',
    },
    {
      title: 'Audio Learning',
      description: 'Text-to-speech for explanations, voice commands, and audio-first learning for accessibility.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      gradient: 'from-blue-600 to-indigo-600',
      category: 'student',
    },
    {
      title: 'Peer Matching & Mentorship',
      description: 'AI-matched study partners, project teammates & senior mentors with chat, video calls & shared coding.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500',
      category: 'student',
    },
    {
      title: 'Interactive Videos & Guides',
      description: 'AI-generated animated content, concept animations, problem walkthroughs, visualizations & quizzes.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      category: 'student',
    },
    {
      title: 'Live Collaborative Coding',
      description: 'Real-time multi-cursor coding with shared terminal, voice chat integration & team debugging features.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      gradient: 'from-red-500 to-pink-500',
      category: 'student',
    },
    {
      title: 'Gamification Engine',
      description: 'XP, levels, titles, badges, streaks, missions & seasonal competitions to transform learning into a game.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-600',
      category: 'student',
    },
    
    // Institution & Enterprise Features (6 modules)
    {
      title: 'Teacher Analytics Dashboard',
      description: 'Topic mastery heatmaps, student comparison, progress tracking, weak student alerts & cohort performance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-blue-600 to-indigo-700',
      category: 'institution',
    },
    {
      title: 'Company Dashboard',
      description: 'Corporate bootcamp management: employee training, assessment creation, progress reports & skill mapping.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-purple-600 to-pink-600',
      category: 'institution',
    },
    {
      title: 'Recruiter Testing Suite',
      description: 'Full proctoring with video/screen monitoring, code replay timeline, plagiarism detection & AI misuse alerts.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-red-600 to-orange-600',
      category: 'institution',
    },
    {
      title: 'Institution Management',
      description: 'Batch creation, assignments & labs, attendance, reports, mentor allocation & college-wide admin control.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-teal-600 to-green-600',
      category: 'institution',
    },
    {
      title: 'Inclusion Focus',
      description: 'Special features for tier 2/3 students, rural groups, low-bandwidth users, scholarships & local mentorship.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      gradient: 'from-indigo-600 to-purple-700',
      category: 'institution',
    },
    {
      title: 'Scalable Bootcamps',
      description: 'Fully automated curriculum templates, assessment pipelines, daily check-ins, mentor reviews & certificates.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      gradient: 'from-cyan-600 to-blue-700',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6">
            <span>⭐</span>
            <span className="text-sm font-medium">Complete Ecosystem</span>
          </div>
          
          <h2 id="features-grid-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              All 20 Modules
            </span>
            {' '}in One Platform
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything from <strong>AI mentorship</strong> to <strong>recruiter testing</strong> — no switching, no fragmentation, just growth
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
                <span className="text-4xl" aria-hidden="true">🚀</span>
                For Learners — 14 Modules
              </h3>
              <p className="text-lg text-gray-600 font-medium">
                Learn, Practice, Collaborate & Prove — AI mentorship, live coding, contests, interviews & more
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
                <span className="text-4xl" aria-hidden="true">🏢</span>
                For Institutions & Companies — 6 Modules
              </h3>
              <p className="text-lg text-gray-600 font-medium">
                Analytics, bootcamps, recruiter testing, proctoring — enterprise-grade education management
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
