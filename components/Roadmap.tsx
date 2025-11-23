'use client';

import { useEffect, useRef, useState } from 'react';

interface Milestone {
  phase: string;
  date: string;
  goal: string;
  icon: string;
  isCurrent?: boolean;
  keyFeatures: string[];
  gradient: string;
  accentColor: string;
}

export default function Roadmap() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const milestones: Milestone[] = [
    {
      phase: 'MVP Launch',
      date: 'Q1 2026',
      goal: 'Core platform with AI mentorship & collaborative coding',
      icon: '🚀',
      isCurrent: true,
      gradient: 'from-blue-500 to-cyan-500',
      accentColor: 'blue',
      keyFeatures: ['AI-powered learning', 'Mentor matching', 'Cloud IDE', 'Basic challenges'],
    },
    {
      phase: 'Early Adopters',
      date: 'Q2 2026',
      goal: 'Community building & advanced features',
      icon: '👥',
      gradient: 'from-purple-500 to-pink-500',
      accentColor: 'purple',
      keyFeatures: ['Community forums', 'Referral program', 'Live sessions', 'Project showcase'],
    },
    {
      phase: 'Mobile App',
      date: 'Q3 2026',
      goal: 'Native iOS & Android apps',
      icon: '📱',
      gradient: 'from-indigo-500 to-purple-500',
      accentColor: 'indigo',
      keyFeatures: ['Offline learning', 'Push notifications', 'Mobile IDE', 'Voice commands'],
    },
    {
      phase: 'Community Scale',
      date: 'Q4 2026',
      goal: '100K+ learners & enterprise features',
      icon: '🌟',
      gradient: 'from-orange-500 to-red-500',
      accentColor: 'orange',
      keyFeatures: ['Hackathons', 'Job board', 'Industry partners', 'Advanced analytics'],
    },
    {
      phase: 'Global Impact',
      date: 'Q5 2027',
      goal: 'India expansion',
      icon: '🌍',
      gradient: 'from-green-500 to-teal-500',
      accentColor: 'green',
      keyFeatures: ['Multi-language', 'Regional content'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-purple-50 via-white to-blue-50 overflow-hidden"
      aria-labelledby="roadmap-title"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm font-medium">The Journey</span>
          </div>
          
          <h2 id="roadmap-title" className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Roadmap
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From MVP to global impact — every milestone brings us closer to transforming coding education
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full blur-sm"></div>
          </div>

          <div className="grid grid-cols-5 gap-8 relative">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? `animate-fade-in-up` : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Milestone Card */}
                <div className={`relative group cursor-pointer ${activeIndex === index ? 'z-20' : 'z-10'}`}>
                  {/* Icon Circle */}
                  <div className={`relative mx-auto w-32 h-32 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-2xl transition-all duration-500 mb-8 ${
                    activeIndex === index ? 'scale-125 shadow-[0_0_50px_rgba(147,51,234,0.5)]' : 'scale-100'
                  } ${milestone.isCurrent ? 'ring-4 ring-white ring-offset-4 ring-offset-slate-900' : ''}`}>
                    <span className="text-6xl">{milestone.icon}</span>
                    
                    {/* Pulse Ring for Current */}
                    {milestone.isCurrent && (
                      <div className="absolute inset-0 rounded-full">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-ping opacity-75"></span>
                      </div>
                    )}
                    
                    {/* Connection Dot */}
                    <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${milestone.gradient} border-4 ${
                      milestone.isCurrent ? 'border-white' : 'border-slate-900'
                    }`}></div>
                  </div>

                  {/* Current Badge */}
                  {milestone.isCurrent && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                        </span>
                        Current Phase
                      </div>
                    </div>
                  )}

                  {/* Info Card */}
                  <div className={`bg-white border rounded-2xl p-6 transition-all duration-500 ${
                    activeIndex === index 
                      ? `border-${milestone.accentColor}-500 shadow-2xl scale-105 shadow-${milestone.accentColor}-500/20` 
                      : 'border-gray-200 shadow-xl'
                  }`}>
                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                      activeIndex === index ? `text-${milestone.accentColor}-600` : 'text-gray-500'
                    }`}>
                      {milestone.date}
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight">
                      {milestone.phase}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {milestone.goal}
                    </p>

                    {/* Key Features */}
                    <div className={`space-y-2 transition-all duration-500 ${
                      activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <div className="text-xs font-bold text-gray-700 mb-2">Key Features:</div>
                      {milestone.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${milestone.gradient}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 rounded-full"></div>

          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative pl-20 transition-all duration-700 ${
                  isVisible ? `animate-fade-in-up` : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon Circle */}
                <div className={`absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-2xl ${
                  milestone.isCurrent ? 'ring-4 ring-white ring-offset-4 ring-offset-slate-900 scale-110' : ''
                }`}>
                  <span className="text-3xl">{milestone.icon}</span>
                  
                  {milestone.isCurrent && (
                    <div className="absolute inset-0 rounded-full">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-ping opacity-75"></span>
                    </div>
                  )}
                </div>

                {/* Current Badge */}
                {milestone.isCurrent && (
                  <div className="absolute left-20 -top-3">
                    <div className="px-3 py-1 bg-white text-purple-600 rounded-full text-xs font-bold shadow-lg">
                      Current
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`bg-white border rounded-2xl p-6 ${
                  milestone.isCurrent ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-gray-200 shadow-xl'
                }`}>
                  <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
                    {milestone.date}
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    {milestone.phase}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {milestone.goal}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-700 mb-2">Key Features:</div>
                    {milestone.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${milestone.gradient}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-24 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
            </div>

            <div className="relative text-center">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                Be Part of the Journey
              </h3>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of learners, mentors, and institutions shaping the future of coding education
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <button className="group px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    Get Early Access
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Become a Partner
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-4xl font-extrabold text-white mb-2">10K+</div>
                  <div className="text-sm text-white/80">Early Users</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-2">500+</div>
                  <div className="text-sm text-white/80">Institutions</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-2">20+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
