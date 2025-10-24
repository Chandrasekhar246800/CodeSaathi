'use client';

import { useEffect, useRef, useState } from 'react';

interface Milestone {
  phase: string;
  date: string;
  goal: string;
  icon: string;
  isCurrent?: boolean;
  detailedGoal: string;
  quote: string;
  quoteAuthor: string;
  projectedStats: string;
  cta?: string;
  gradient: string;
}

export default function Roadmap() {
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

  const milestones: Milestone[] = [
    {
      phase: 'MVP Launch',
      date: 'Q1 2026',
      goal: 'Target 10,000 users',
      icon: '🚀',
      isCurrent: true,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      detailedGoal: 'Launch our Minimum Viable Product with core AI-powered learning features, mentor matching system, and collaborative coding workspace. Focus on perfecting user experience and gathering early feedback.',
      quote: 'This is where dreams take flight. Our MVP will democratize coding education for thousands of students across India.',
      quoteAuthor: 'Founder, CodeSaathi',
      projectedStats: '10K+ active learners • 500+ mentors • 50+ institutions',
      cta: 'Be among our first 10,000 users! Shape the future of coding education.',
    },
    {
      phase: 'Early Adopters',
      date: 'Q2 2026',
      goal: 'Community building & feedback',
      icon: '👥',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      detailedGoal: 'Engage deeply with our early adopter community, iterate based on real-world feedback, and build the features students actually need. Launch referral program and community forums.',
      quote: 'Your voice matters. Every feature we build will be shaped by the community we serve.',
      quoteAuthor: 'Product Lead, CodeSaathi',
      projectedStats: '25K+ users • 1,000+ mentors • 100+ partner institutions',
      cta: 'Join our early adopter program and get lifetime premium benefits!',
    },
    {
      phase: 'Mobile App Release',
      date: 'Q3 2026',
      goal: 'Mobile app goes live',
      icon: '📱',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      detailedGoal: 'Launch native iOS and Android apps with offline learning capabilities, push notifications for mentor sessions, and mobile-optimized coding interface. Make learning accessible anytime, anywhere.',
      quote: 'Education should fit in your pocket. Our mobile app brings world-class coding education to every smartphone.',
      quoteAuthor: 'Mobile Team Lead',
      projectedStats: '50K+ downloads • 15K+ daily active users • 4.8+ app rating',
      cta: 'Pre-register for mobile app and get early access!',
    },
    {
      phase: 'Community Scale',
      date: 'Q4 2026',
      goal: 'Reach 100,000 learners',
      icon: '🌟',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      detailedGoal: 'Scale our platform to serve 100,000+ students across 500+ institutions. Launch advanced features: live coding sessions, hackathons, job board, and industry partnerships for real-world projects.',
      quote: 'At scale, we become a movement. 100,000 students means 100,000 futures transformed.',
      quoteAuthor: 'Growth Director',
      projectedStats: '100K+ students • 5K+ mentors • 500+ institutions • 50+ hiring partners',
      cta: 'Help us reach 100K students! Partner with us or spread the word.',
    },
    {
      phase: 'Global Impact',
      date: 'Q1 2027',
      goal: 'International expansion',
      icon: '🌍',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      detailedGoal: 'Expand to Southeast Asia, Middle East, and Africa. Multi-language support, regional content, and partnerships with international universities. Make coding education a global movement.',
      quote: 'Borders don\'t limit dreams. We\'re building a global community of empowered developers.',
      quoteAuthor: 'International Expansion Lead',
      projectedStats: '500K+ global users • 20+ countries • 15+ languages • 2,000+ institutions',
      cta: 'Join our global journey! International partnerships welcome.',
    },
  ];

  // Winding path positions for desktop (percentage-based)
  const pathPositions = [
    { left: '10%', top: '20%' },
    { left: '70%', top: '15%' },
    { left: '25%', top: '45%' },
    { left: '75%', top: '60%' },
    { left: '40%', top: '85%' },
  ];

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
      aria-labelledby="roadmap-title"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 id="roadmap-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Journey Ahead
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every milestone is a step toward transforming coding education — join us on this exciting adventure
          </p>
        </div>

        {/* Desktop Winding Path */}
        <div className="hidden lg:block relative" style={{ minHeight: '800px' }}>
          {/* SVG Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="25%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="75%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <path
              d="M 100 160 Q 400 140 700 130 Q 900 135 250 360 Q 150 400 750 480 Q 950 520 400 680"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              className="animate-dash"
            />
          </svg>

          {/* Milestones on Winding Path */}
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 transform ${
                isVisible ? `animate-scale-pop delay-${(index + 1) * 200}` : 'opacity-0 scale-0'
              }`}
              style={{
                left: pathPositions[index].left,
                top: pathPositions[index].top,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className="relative group"
                aria-label={`${milestone.phase} milestone`}
              >
                {/* Milestone Bubble */}
                <div
                  className={`bg-gradient-to-br ${milestone.gradient} w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-500 relative hover:scale-110 ${
                    milestone.isCurrent ? 'animate-pulse-glow scale-110' : 'scale-100'
                  }`}
                >
                  <span className="text-5xl mb-2">{milestone.icon}</span>
                  
                  {/* Floating particles around current milestone */}
                  {milestone.isCurrent && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-white rounded-full animate-float"
                          style={{
                            left: `${50 + 60 * Math.cos((i * Math.PI) / 3)}%`,
                            top: `${50 + 60 * Math.sin((i * Math.PI) / 3)}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </>
                  )}
                </div>

                {/* "You Are Here" Indicator */}
                {milestone.isCurrent && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-gentle flex items-center gap-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative">⭐ You Are Here</span>
                      </div>
                      {/* Arrow pointing down */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-purple-600"></div>
                    </div>
                  </div>
                )}

                {/* Phase Info Below Bubble */}
                <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 text-center w-64 pointer-events-none">
                  <div className="bg-white rounded-2xl shadow-2xl p-5 border-3 border-purple-200">
                    <div className="text-sm font-extrabold text-purple-600 uppercase tracking-wide mb-2">{milestone.date}</div>
                    <div className="text-xl font-extrabold text-gray-900 mb-3 leading-tight">{milestone.phase}</div>
                    <div className="text-base font-bold text-gray-800 leading-snug">{milestone.goal}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Path */}
        <div className="lg:hidden">
          <div className="relative space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : 'opacity-0'
                }`}
              >
                {/* Connecting Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-1/2 top-32 h-16 w-1 bg-gradient-to-b from-purple-400 to-pink-400 transform -translate-x-1/2 z-0 animate-pulse"></div>
                )}

                <div className="relative w-full">
                  {/* "You Are Here" Mobile */}
                  {milestone.isCurrent && (
                    <div className="mb-4 flex justify-center">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-gentle flex items-center gap-2">
                        <span>⭐ You Are Here</span>
                      </div>
                    </div>
                  )}

                  <div className={`bg-white rounded-3xl p-6 shadow-xl border-4 ${milestone.isCurrent ? 'border-purple-400 animate-pulse-glow' : 'border-gray-200'}`}>
                    {/* Icon */}
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center text-5xl shadow-lg relative`}>
                      {milestone.icon}
                      
                      {/* Floating particles for current */}
                      {milestone.isCurrent && (
                        <>
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                              style={{
                                left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                                top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                                animationDelay: `${i * 0.3}s`,
                              }}
                            ></div>
                          ))}
                        </>
                      )}
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <div className="text-sm font-extrabold text-purple-600 uppercase tracking-wide mb-2">{milestone.date}</div>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{milestone.phase}</h3>
                      <p className="text-base font-bold text-gray-800">{milestone.goal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Ribbon */}
        <div
          className={`mt-20 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
            {/* Animated background waves */}
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
              <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 Q 25 40, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#wave)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Join Our Journey
              </h3>
              <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto">
                Your ideas, feedback, and collaboration power our milestones. Together, we're building the future of coding education.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Join the Community
                </button>
                <button className="px-10 py-5 bg-transparent border-3 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Become a Partner
                </button>
              </div>

              {/* Community Avatars */}
              <div className="flex justify-center items-center gap-2 mt-8">
                <div className="flex -space-x-3">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-3 border-white shadow-lg animate-float"
                      style={{
                        background: `linear-gradient(135deg, hsl(${i * 45}, 70%, 60%), hsl(${i * 45 + 30}, 70%, 50%))`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className="ml-4 text-white font-semibold">
                  <span className="text-2xl">+10,000</span>
                  <p className="text-sm opacity-90">Community Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          animation: dash 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
