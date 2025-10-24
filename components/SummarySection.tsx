'use client';

import { useEffect, useRef, useState } from 'react';

export default function SummarySection() {
  const [isVisible, setIsVisible] = useState(false);
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
      title: 'AI Guidance',
      description: '24/7 code debug, smart lessons',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      delay: 'delay-100',
    },
    {
      title: 'Mentor Community',
      description: 'Real peer match, group chat, custom tips',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      delay: 'delay-200',
    },
    {
      title: 'Project Workspace',
      description: 'Live coding, shared repos, team boards',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-teal-500 to-green-500',
      delay: 'delay-300',
    },
    {
      title: 'Multilingual Learning',
      description: 'Code in English, Hindi, Tamil, and more',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500',
      delay: 'delay-400',
    },
  ];

  const missionVision = [
    {
      text: 'Democratizing coding. Empowering every learner.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      text: 'Largest collaborative coding ecosystem.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '15M', label: 'Coders' },
    { value: '85%', label: 'Skill Boost' },
    { value: '500+', label: 'Institutions' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      aria-labelledby="summary-title"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 id="summary-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            What is{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              CodeSaathi?
            </span>
          </h2>

          {/* Animated Summary */}
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            India's peer-powered platform where{' '}
            <span className="text-blue-600 font-bold">AI</span>,{' '}
            <span className="text-purple-600 font-bold">mentors</span>, and{' '}
            <span className="text-teal-600 font-bold">learners</span> unite to build future-ready coders.
          </p>
        </div>

        {/* Mission & Vision */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {missionVision.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              role="article"
              aria-label={`Mission vision ${index + 1}`}
            >
              <div className="flex-shrink-0 text-blue-600" aria-hidden="true">
                {item.icon}
              </div>
              <p className="text-gray-800 font-medium text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? `animate-slide-up ${feature.delay}` : 'opacity-0'
              }`}
              role="article"
              aria-labelledby={`feature-${index}-title`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                id={`feature-${index}-title`}
                className="text-xl font-bold text-gray-900 mb-2"
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Hover Effect Line */}
              <div
                className={`mt-4 h-1 w-0 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-full transition-all duration-500`}
                aria-hidden="true"
              ></div>
            </div>
          ))}
        </div>

        {/* Fast Fact Strip */}
        <div
          className={`bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 rounded-2xl p-8 shadow-2xl transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          role="complementary"
          aria-label="Platform statistics"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium text-lg uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
