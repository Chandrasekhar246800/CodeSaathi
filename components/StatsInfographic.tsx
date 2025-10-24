'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsInfographic() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    institutions: 0,
    debugging: 0,
    retention: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        }
      },
      { threshold: 0.2 }
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

  const animateCounters = () => {
    const duration = 2500;
    const steps = 80;
    const targets = {
      students: 15,
      institutions: 500,
      debugging: 82,
      retention: 45,
    };
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        students: Math.floor(targets.students * easeOutQuart),
        institutions: Math.floor(targets.institutions * easeOutQuart),
        debugging: Math.floor(targets.debugging * easeOutQuart),
        retention: Math.floor(targets.retention * easeOutQuart),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, duration / steps);
  };

  const mainStats = [
    {
      value: `${counters.students}M+`,
      label: 'Students Learning',
      icon: '👨‍🎓',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 'delay-100',
    },
    {
      value: `${counters.institutions}+`,
      label: 'Institutions',
      icon: '🏫',
      gradient: 'from-purple-500 to-pink-500',
      delay: 'delay-200',
    },
    {
      value: `${counters.debugging}%`,
      label: 'Debugging Speed Up',
      icon: '⚡',
      gradient: 'from-orange-500 to-red-500',
      delay: 'delay-300',
    },
    {
      value: `${counters.retention}%`,
      label: 'Retention Uplift',
      icon: '📈',
      gradient: 'from-teal-500 to-green-500',
      delay: 'delay-400',
    },
  ];

  const diversityBadges = [
    {
      title: 'Languages Supported',
      value: '15+',
      description: 'English, Hindi, Tamil, Telugu, Bengali, and more',
      icon: '🌐',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Gender Equity',
      value: '42%',
      description: 'Women learners on platform',
      icon: '⚖️',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Rural Outreach',
      value: '65%',
      description: 'Users from Tier-2/3 cities',
      icon: '🌾',
      gradient: 'from-green-500 to-emerald-600',
    },
  ];

  const impactHighlights = [
    {
      title: 'Digital Inclusion',
      description: 'Bridging the digital divide with accessible coding education for all communities',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'blue',
    },
    {
      title: 'Job Readiness',
      description: 'Preparing students with industry-relevant skills and real-world project experience',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'teal',
    },
    {
      title: 'Tier-2/3 Engagement',
      description: 'Empowering students beyond metros with quality mentorship and resources',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'purple',
    },
    {
      title: 'Women in Tech',
      description: 'Creating inclusive spaces and support networks for women entering technology',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'pink',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden"
      aria-labelledby="stats-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 id="stats-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results, real transformation, real success stories
          </p>
        </div>

        {/* Main Stats Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible ? `animate-scale-pop ${stat.delay}` : 'opacity-0 scale-0'
              }`}
            >
              <div className="relative group">
                <div
                  className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-200 ${
                    isVisible ? 'animate-pulse-color' : ''
                  }`}
                  role="article"
                  aria-label={`${stat.label}: ${stat.value}`}
                >
                  {/* Icon */}
                  <div
                    className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div
                    className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm sm:text-base font-semibold text-gray-700">
                    {stat.label}
                  </div>

                  {/* Hover Effect Line */}
                  <div
                    className={`mt-4 h-1 bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-500 ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diversity Badges */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Diversity & Inclusion
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {diversityBadges.map((badge, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isVisible ? `animate-scale-pop delay-${(index + 6) * 100}` : 'opacity-0 scale-0'
                }`}
              >
                <div className="relative group">
                  <div
                    className={`bg-gradient-to-br ${badge.gradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                  >
                    {/* Icon & Value */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl" aria-hidden="true">{badge.icon}</span>
                      <span className="text-5xl font-extrabold">{badge.value}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-2">{badge.title}</h4>

                    {/* Description */}
                    <p className="text-sm opacity-90">{badge.description}</p>

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Highlights */}
        <div
          className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Real-World Impact
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactHighlights.map((impact, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isVisible ? `animate-fade-in-up delay-${(index + 9) * 100}` : 'opacity-0'
                }`}
              >
                <div
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 ${
                    impact.color === 'blue' ? 'border-blue-500' :
                    impact.color === 'teal' ? 'border-teal-500' :
                    impact.color === 'purple' ? 'border-purple-500' :
                    'border-pink-500'
                  } h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                      impact.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      impact.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                      impact.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-pink-100 text-pink-600'
                    }`}
                    aria-hidden="true"
                  >
                    {impact.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {impact.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {impact.description}
                  </p>

                  {/* Check Mark */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Active Initiative</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
