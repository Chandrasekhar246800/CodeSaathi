'use client';

import { useEffect, useRef, useState } from 'react';

export default function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
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

  const solutions = [
    {
      title: 'AI Code Assistant',
      benefits: ['Smart debugging', 'Personalized hints', 'Live explanations'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      glowColor: 'shadow-blue-500/50',
    },
    {
      title: 'Peer Mentor Matching',
      benefits: ['Study groups', 'Forums', '1:1 chat', 'Mentor feedback'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      glowColor: 'shadow-purple-500/50',
    },
    {
      title: 'Collab Workspace',
      benefits: ['Real-time coding', 'Repo sharing', 'Voice/video chat', 'Code review cycles'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-teal-500 via-green-500 to-emerald-500',
      glowColor: 'shadow-teal-500/50',
    },
    {
      title: 'Adaptive Visual Roadmaps',
      benefits: ['Personalized paths', 'Video walkthroughs', 'Gamified progress'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      glowColor: 'shadow-orange-500/50',
    },
  ];

  const workflowSteps = [
    {
      title: 'Learn',
      description: 'Access curated courses, tutorials, and AI-guided lessons',
      details: 'Start with personalized learning paths tailored to your skill level and goals',
      icon: '📚',
    },
    {
      title: 'Collaborate',
      description: 'Join study groups and work with peers on projects',
      details: 'Connect with mentors and fellow learners in real-time collaborative spaces',
      icon: '🤝',
    },
    {
      title: 'Get AI Feedback',
      description: 'Receive instant code reviews and improvement suggestions',
      details: 'Our AI assistant analyzes your code and provides actionable feedback',
      icon: '🤖',
    },
    {
      title: 'Build Projects',
      description: 'Apply skills in real-world projects and build your portfolio',
      details: 'Showcase your work and gain practical experience with team projects',
      icon: '🚀',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      aria-labelledby="solutions-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 id="solutions-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced tools and features designed to revolutionize your coding journey
          </p>
        </div>

        {/* Innovation Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 transform ${
                isVisible ? `animate-pop-in delay-${index + 1}00` : 'opacity-0 scale-90'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-white rounded-2xl p-6 border-2 border-gray-100 transition-all duration-500 ${
                  hoveredCard === index
                    ? `transform -translate-y-4 scale-105 shadow-2xl ${solution.glowColor} border-transparent`
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Glowing Effect */}
                {hoveredCard === index && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-10 rounded-2xl animate-pulse-glow`}
                    aria-hidden="true"
                  ></div>
                )}

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center text-white mb-4 transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 rotate-6' : ''
                  }`}
                  aria-hidden="true"
                >
                  {solution.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className={`flex items-start gap-2 text-gray-600 transition-all duration-300 ${
                        hoveredCard === index ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${benefitIndex * 50}ms` }}
                    >
                      <span className={`flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-br ${solution.gradient} rounded-full mt-2`} aria-hidden="true"></span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Expansion Indicator */}
                <div
                  className={`mt-4 pt-4 border-t-2 ${
                    hoveredCard === index ? 'border-gray-300' : 'border-transparent'
                  } transition-all duration-300`}
                >
                  <div
                    className={`text-sm font-semibold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent transition-opacity duration-300 ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Learn More →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Diagram */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Your Learning Journey
            </h3>

            {/* Workflow Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <button
                    className={`w-full text-left bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                      activeStep === index
                        ? 'border-blue-500 scale-105'
                        : 'border-transparent hover:border-blue-200'
                    }`}
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                    aria-expanded={activeStep === index}
                    aria-controls={`tooltip-${index}`}
                  >
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <div className="text-3xl" aria-hidden="true">{step.icon}</div>
                    </div>

                    {/* Step Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>

                    {/* Tooltip Details */}
                    <div
                      id={`tooltip-${index}`}
                      className={`mt-4 pt-4 border-t border-gray-200 transition-all duration-300 overflow-hidden ${
                        activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      role="tooltip"
                    >
                      <p className="text-xs text-gray-700 font-medium bg-blue-50 rounded-lg p-3">
                        💡 {step.details}
                      </p>
                    </div>
                  </button>

                  {/* Arrow Connector (hidden on last item and mobile) */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10" aria-hidden="true">
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Arrow Indicators */}
            <div className="lg:hidden flex justify-center mt-6 space-x-2" aria-hidden="true">
              {workflowSteps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-2 h-2 rounded-full ${activeStep === index ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gray-300 mx-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
