'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    dropOff: 0,
    employability: 0,
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
            animateStats();
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

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const dropOffTarget = 68;
    const employabilityTarget = 45;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        dropOff: Math.floor(dropOffTarget * progress),
        employability: Math.floor(employabilityTarget * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedStats({
          dropOff: dropOffTarget,
          employability: employabilityTarget,
        });
      }
    }, duration / steps);
  };

  const studentChallenges = [
    {
      title: 'Motivation Crisis',
      description: 'Students lose interest without clear goals and real-world applications',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Social Isolation',
      description: 'Learning alone without peer interaction leads to burnout',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Missing Mentorship',
      description: 'No access to experienced developers for guidance and support',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const systemicIssues = [
    {
      title: 'Platform Fragmentation',
      description: 'Learning resources scattered across multiple platforms',
      percentage: 85,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'No Progress Tracking',
      description: 'Difficult to measure growth and identify knowledge gaps',
      percentage: 72,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-teal-500 to-green-500',
    },
    {
      title: 'Collaboration Deficit',
      description: 'Limited tools for team projects and peer collaboration',
      percentage: 78,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-20 bg-gradient-to-b from-blue-50 to-gray-50 overflow-hidden"
      aria-labelledby="problem-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-40 left-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 id="problem-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              The Problem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current coding education faces critical challenges that hold back millions of aspiring developers
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT: Student Challenges */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-xl" aria-hidden="true">
                  👨‍💻
                </span>
                Student Challenges
              </h3>

              {/* Challenge Items */}
              <div className="space-y-6 mb-8">
                {studentChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div
                      className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      {challenge.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{challenge.title}</h4>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-gray-200">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 text-center">
                  <div className="text-5xl font-extrabold text-red-600 mb-2">
                    {animatedStats.dropOff}%
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Course Drop-off Rate
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center">
                  <div className="text-5xl font-extrabold text-orange-600 mb-2">
                    {animatedStats.employability}%
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Job Readiness Gap
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Systemic Issues */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-indigo-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl" aria-hidden="true">
                  ⚠️
                </span>
                Systemic Issues
              </h3>

              {/* Infographic Items */}
              <div className="space-y-6">
                {systemicIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <div className="flex gap-4 items-start mb-3">
                      <div
                        className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${issue.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true"
                      >
                        {issue.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{issue.title}</h4>
                        <p className="text-gray-600 text-sm">{issue.description}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="ml-[72px] mb-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-gray-500">Impact Level</span>
                        <span className="text-sm font-bold text-gray-900">{issue.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${issue.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${issue.percentage}%` : '0%',
                            transitionDelay: `${600 + index * 100}ms`,
                          }}
                          role="progressbar"
                          aria-valuenow={issue.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${issue.title} impact level`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Block Quote */}
        <div
          className={`transition-all duration-1000 delay-600 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <blockquote className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="absolute top-4 left-4 text-6xl text-white/20 font-serif" aria-hidden="true">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-white/20 font-serif" aria-hidden="true">"</div>
            <p className="relative text-2xl sm:text-3xl font-bold text-white text-center leading-relaxed">
              No coder should learn alone. The future demands teamwork, feedback, and guidance.
            </p>
            <div className="mt-6 text-center">
              <div className="inline-block w-16 h-1 bg-white/50 rounded-full"></div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
