'use client';

import { useEffect, useRef, useState } from 'react';

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [hoveredWorkflow, setHoveredWorkflow] = useState<number | null>(null);
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

  const techStack = [
    {
      name: 'React.js',
      description: 'Cloud-native',
      detail: 'Modern, scalable frontend with component-based architecture',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <circle cx="12" cy="12" r="2" />
          <path d="M12,8 C8.13,8 5,9.79 5,12 C5,14.21 8.13,16 12,16 C15.87,16 19,14.21 19,12 C19,9.79 15.87,8 12,8 Z M12,15 C9.24,15 7,13.88 7,12 C7,10.12 9.24,9 12,9 C14.76,9 17,10.12 17,12 C17,13.88 14.76,15 12,15 Z" />
          <path d="M7.5,16.82 C5.85,16.25 4.72,15.3 4.72,14.16 C4.72,13.02 5.85,12.07 7.5,11.5 M16.5,11.5 C18.15,12.07 19.28,13.02 19.28,14.16 C19.28,15.3 18.15,16.25 16.5,16.82 M7.5,7.18 C5.85,7.75 4.72,8.7 4.72,9.84 C4.72,10.98 5.85,11.93 7.5,12.5 M16.5,12.5 C18.15,11.93 19.28,10.98 19.28,9.84 C19.28,8.7 18.15,7.75 16.5,7.18" />
        </svg>
      ),
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Flutter',
      description: 'Mobile-first',
      detail: 'Cross-platform mobile apps for iOS and Android',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M14.6 16.6l-5.5-5.5L6.4 8.4l8.2-8.2h9.2L14.6 16.6z" />
          <path d="M5.8 18.4l5.5-5.5 3.7 3.7-5.5 5.5-3.7-3.7z" opacity="0.7" />
          <path d="M14.6 16.6l-3.7 3.7-3.1-3.1 3.7-3.7 3.1 3.1z" opacity="0.4" />
        </svg>
      ),
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      name: 'Node.js',
      description: 'AI-powered backend',
      detail: 'High-performance server with intelligent processing',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12,1.85c-0.31,0-0.61,0.08-0.87,0.23l-8.5,4.9C2.24,7.21,2,7.6,2,8.03v7.94c0,0.43,0.24,0.82,0.63,1.05l8.5,4.9 c0.26,0.15,0.56,0.23,0.87,0.23s0.61-0.08,0.87-0.23l8.5-4.9c0.39-0.23,0.63-0.62,0.63-1.05V8.03c0-0.43-0.24-0.82-0.63-1.05 l-8.5-4.9C12.61,1.93,12.31,1.85,12,1.85z" />
          <path d="M12,12.9l-6-3.46V6.96l6,3.46V12.9z M12,11.1L6,7.64l6-3.46l6,3.46L12,11.1z M18,13.44l-6,3.46v-2.48l6-3.46V13.44z" fill="white" />
        </svg>
      ),
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Python',
      description: 'AI-powered backend',
      detail: 'Machine learning and data processing powerhouse',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12,3c-1.66,0-3,1.34-3,3v2h6V7h2c1.66,0,3,1.34,3,3v4c0,1.66-1.34,3-3,3h-1v-3h-2v5h3c2.76,0,5-2.24,5-5V10 c0-2.76-2.24-5-5-5H12z" />
          <path d="M12,21c1.66,0,3-1.34,3-3v-2H9v1H7c-1.66,0-3-1.34-3-3v-4c0-1.66,1.34-3,3-3h1v3h2V5H7C4.24,5,2,7.24,2,10v4 c0,2.76,2.24,5,5,5H12z" opacity="0.7" />
          <circle cx="15" cy="7" r="1" fill="white" />
          <circle cx="9" cy="17" r="1" fill="white" />
        </svg>
      ),
      color: 'from-yellow-400 to-blue-500',
      bgColor: 'bg-yellow-50',
    },
    {
      name: 'AWS',
      description: 'Cloud-native',
      detail: 'Scalable cloud infrastructure for global reach',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M6.76,11.26l-1.43-0.47v-0.6l1.43-0.47v0.54l-0.93,0.28l0.93,0.28V11.26z M10.5,10.75l-1.43,0.47v-0.54l0.93-0.28 l-0.93-0.28V9.58l1.43,0.47V10.75z M8.12,12.16L8.9,8.85h0.43l-0.78,3.31H8.12z" />
          <path d="M18.89,16.32c-2.76,2.04-6.77,3.12-10.22,3.12c-4.83,0-9.18-1.79-12.47-4.76c-0.26-0.23-0.03-0.55,0.28-0.37 c3.56,2.07,7.95,3.32,12.49,3.32c3.06,0,6.43-0.63,9.53-1.95C19.17,15.43,19.6,15.97,18.89,16.32z" />
          <path d="M20.12,14.87c-0.35-0.45-2.33-0.21-3.22-0.11c-0.27,0.03-0.31-0.2-0.07-0.38c1.58-1.11,4.17-0.79,4.47-0.42 c0.3,0.38-0.08,2.98-1.57,4.23c-0.23,0.19-0.44,0.09-0.34-0.16C19.72,17.23,20.48,15.32,20.12,14.87z" />
        </svg>
      ),
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'MongoDB',
      description: 'Secure collab',
      detail: 'Flexible NoSQL database for real-time data',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12,3c-0.5,0-0.9,0.2-1.2,0.6C8.3,6.9,7,10.8,7,14.5c0,1.9,0.4,3.7,1.1,5.3c0.3,0.7,0.8,1.2,1.5,1.5 c0.4,0.2,0.9,0.3,1.4,0.3c0.5,0,0.9-0.1,1.4-0.3c0.7-0.3,1.2-0.8,1.5-1.5c0.7-1.6,1.1-3.4,1.1-5.3c0-3.7-1.3-7.6-3.8-10.9 C12.9,3.2,12.5,3,12,3z M12,20.5c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.1-0.5-0.4-0.6-0.7c-0.6-1.5-0.9-3.1-0.9-4.7 c0-3.4,1.2-6.9,3.5-9.9c0.1-0.1,0.2-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2c2.3,3,3.5,6.5,3.5,9.9c0,1.6-0.3,3.2-0.9,4.7 c-0.1,0.3-0.3,0.6-0.6,0.7C12.4,20.4,12.2,20.5,12,20.5z" />
          <path d="M12,2L12,2c-0.3,0-0.5,0.2-0.5,0.5v1c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5v-1C12.5,2.2,12.3,2,12,2z" />
        </svg>
      ),
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
    },
    {
      name: 'OpenAI',
      description: 'AI-powered',
      detail: 'Advanced AI for intelligent code assistance',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12,2L12,2c-0.83,0-1.5,0.67-1.5,1.5v17c0,0.83,0.67,1.5,1.5,1.5h0c0.83,0,1.5-0.67,1.5-1.5v-17 C13.5,2.67,12.83,2,12,2z" />
          <circle cx="12" cy="12" r="3" fill="white" />
          <path d="M18.36,6.64c-0.59-0.59-1.54-0.59-2.12,0l-12,12c-0.59,0.59-0.59,1.54,0,2.12c0.59,0.59,1.54,0.59,2.12,0l12-12 C18.95,8.18,18.95,7.23,18.36,6.64z" opacity="0.5" />
          <path d="M6.64,5.64c0.59-0.59,0.59-1.54,0-2.12c-0.59-0.59-1.54-0.59-2.12,0c-0.59,0.59-0.59,1.54,0,2.12L16.64,17.76 c0.59,0.59,1.54,0.59,2.12,0c0.59-0.59,0.59-1.54,0-2.12L6.64,5.64z" opacity="0.5" />
        </svg>
      ),
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Firebase',
      description: 'Secure collab',
      detail: 'Real-time database and authentication',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M5.8,20.1L17,8.9l-4.2-8L8.3,9.8L5.8,20.1z M17,8.9l3.7-3.5L19,1l-2,7.9L17,8.9z" />
          <path d="M5.8,20.1l11.2-6.5L8.3,9.8L5.8,20.1z" opacity="0.6" />
          <path d="M19.4,19.2l-1.4-13.2L17,8.9L5.8,20.1L19.4,19.2z" opacity="0.3" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
    },
    {
      name: 'WebRTC',
      description: 'Secure collab',
      detail: 'Peer-to-peer video, voice, and screen sharing',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M17,10.5V7c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v10c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1v-3.5l4,4v-11L17,10.5z" />
          <circle cx="9" cy="10" r="1.5" fill="white" />
          <path d="M6,15c0-1.66,1.34-3,3-3s3,1.34,3,3" fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
      ),
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
    },
  ];

  const workflowSteps = [
    { title: 'User', icon: '👤', description: 'Students & Mentors' },
    { title: 'AI/Peer', icon: '🤖', description: 'Smart Assistance' },
    { title: 'Project', icon: '💻', description: 'Build & Code' },
    { title: 'Dashboard', icon: '📊', description: 'Track Progress' },
    { title: 'Analytics', icon: '📈', description: 'Insights & Growth' },
  ];

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative py-20 bg-gradient-to-b from-purple-50 via-white to-blue-50 overflow-hidden"
      aria-labelledby="tech-stack-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 id="tech-stack-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Built on Modern Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by cutting-edge tools and frameworks for optimal performance
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible ? `animate-fade-in-up delay-${Math.min((index + 1) * 100, 900)}` : 'opacity-0'
              }`}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className={`relative ${tech.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-200 h-full flex flex-col`}
              >
                {/* Pulsing Background on Hover */}
                {hoveredTech === index && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 rounded-2xl animate-pulse-bg`}
                    aria-hidden="true"
                  ></div>
                )}

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-500 ${
                    hoveredTech === index ? 'scale-125 rotate-6' : ''
                  }`}
                  aria-hidden="true"
                >
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="relative text-lg font-bold text-gray-900 text-center mb-2">
                  {tech.name}
                </h3>

                {/* Description Badge */}
                <div
                  className={`relative inline-block mx-auto px-3 py-1 bg-gradient-to-r ${tech.color} rounded-full text-white text-xs font-bold mb-3 shadow-md`}
                >
                  {tech.description}
                </div>

                {/* Detail - Shows on Hover */}
                <div
                  className={`relative text-xs text-gray-600 text-center transition-all duration-300 overflow-hidden ${
                    hoveredTech === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {tech.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Workflow Diagram */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            System Workflow
          </h3>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden lg:flex items-center justify-between">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Card */}
                  <div
                    className={`relative group transition-all duration-500 transform ${
                      hoveredWorkflow === index ? 'scale-110' : ''
                    }`}
                    onMouseEnter={() => setHoveredWorkflow(index)}
                    onMouseLeave={() => setHoveredWorkflow(null)}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300 w-40">
                      {/* Icon */}
                      <div className="text-5xl mb-3 text-center">{step.icon}</div>
                      
                      {/* Title */}
                      <h4 className="text-lg font-bold text-gray-900 text-center mb-2">
                        {step.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-xs text-gray-600 text-center">
                        {step.description}
                      </p>

                      {/* Glow Effect on Hover */}
                      {hoveredWorkflow === index && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl animate-pulse-glow" aria-hidden="true"></div>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="flex items-center mx-4" aria-hidden="true">
                      <svg className="w-12 h-6 text-blue-500 animate-pulse-slow" fill="currentColor" viewBox="0 0 48 24">
                        <path d="M0,12 L40,12 M40,12 L35,7 M40,12 L35,17" stroke="currentColor" strokeWidth="3" fill="none" />
                        <circle cx="45" cy="12" r="3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Flow */}
            <div className="lg:hidden space-y-6">
              {workflowSteps.map((step, index) => (
                <div key={index}>
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="text-4xl flex-shrink-0">{step.icon}</div>
                      
                      <div className="flex-1">
                        {/* Title */}
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>

                      {/* Step Number */}
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  {index < workflowSteps.length - 1 && (
                    <div className="flex justify-center py-2" aria-hidden="true">
                      <svg className="w-6 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 32">
                        <path d="M12,0 L12,28 M12,28 L7,23 M12,28 L17,23" stroke="currentColor" strokeWidth="3" fill="none" />
                        <circle cx="12" cy="30" r="2" />
                      </svg>
                    </div>
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
