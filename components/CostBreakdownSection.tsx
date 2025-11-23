'use client';

import { useEffect, useRef, useState } from 'react';

export default function CostBreakdownSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeView, setActiveView] = useState<'allocation' | 'modules'>('allocation');
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

  const costAllocation = [
    {
      category: 'Product & Technology',
      percentage: 55,
      budgetMin: 170,
      budgetMax: 330,
      color: 'from-blue-500 to-cyan-500',
      icon: '💻',
      includes: [
        'Cloud infrastructure & scaling',
        'Core AI modules & ML pipelines',
        'Coding playground & IDE',
        'Frontend & mobile apps',
        'Backend services & APIs',
        'QA & testing automation',
        'Security & data protection',
        'DevOps & CI/CD',
        'External API integrations',
      ],
    },
    {
      category: 'Sales / Go-To-Market',
      percentage: 20,
      budgetMin: 60,
      budgetMax: 120,
      color: 'from-purple-500 to-pink-500',
      icon: '📈',
      includes: [
        'Institutional sales team',
        'Campus outreach programs',
        'Recruiter partnerships',
        'B2B client acquisition',
        'Pilot program launches',
        'Sales collateral & demos',
      ],
    },
    {
      category: 'Content & Curriculum',
      percentage: 15,
      budgetMin: 45,
      budgetMax: 90,
      color: 'from-green-500 to-emerald-500',
      icon: '📚',
      includes: [
        'Coding learning paths',
        'Quiz & challenge banks',
        'Language localization (8 languages)',
        'Micro-lesson creation',
        'Video content production',
        'Proctoring content',
        'Interview prep materials',
      ],
    },
    {
      category: 'Operations & Infrastructure',
      percentage: 5,
      budgetMin: 15,
      budgetMax: 30,
      color: 'from-orange-500 to-red-500',
      icon: '⚙️',
      includes: [
        'Legal & compliance',
        'Admin tools & systems',
        'SaaS subscriptions',
        'Remote work infrastructure',
        'Office & operational costs',
      ],
    },
    {
      category: 'Marketing & Brand',
      percentage: 5,
      budgetMin: 15,
      budgetMax: 30,
      color: 'from-indigo-500 to-purple-500',
      icon: '🎯',
      includes: [
        'Hackathons & contests',
        'Campus ambassador program',
        'Launch campaigns',
        'PR & media outreach',
        'Brand development',
        'Community building',
      ],
    },
  ];

  const techModules = [
    { name: 'Coding Playground & Infrastructure', percentage: 23, color: 'from-blue-600 to-cyan-600', icon: '🖥️' },
    { name: 'AI Tutor/Mentor System', percentage: 15, color: 'from-purple-600 to-pink-600', icon: '🤖' },
    { name: 'Mobile/Web Applications', percentage: 10, color: 'from-green-600 to-emerald-600', icon: '📱' },
    { name: 'Analytics/Admin Dashboards', percentage: 7, color: 'from-yellow-600 to-orange-600', icon: '📊' },
    { name: 'Recruiter/Bootcamp SaaS', percentage: 7, color: 'from-red-600 to-pink-600', icon: '💼' },
    { name: 'Multilingual/Content Stack', percentage: 7, color: 'from-teal-600 to-cyan-600', icon: '🌐' },
    { name: 'Contests/Hackathons Platform', percentage: 5, color: 'from-indigo-600 to-purple-600', icon: '🏆' },
    { name: 'Other Tech Components', percentage: 26, color: 'from-gray-600 to-slate-600', icon: '⚡' },
  ];

  return (
    <section
      ref={sectionRef}
      id="cost-breakdown"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6">
            <span>💰</span>
            <span className="text-sm font-medium">Investment Breakdown</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
            Cost{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Breakdown
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            Total Initial Development Investment: <strong className="text-blue-600">₹3-6 Crores</strong>
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Seed round covering 12-18 months of platform build, pilot launch, and go-to-market strategy
          </p>
        </div>

        {/* Toggle Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={() => setActiveView('allocation')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              activeView === 'allocation'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-blue-400'
            }`}
          >
            <span className="mr-2">📊</span>
            Budget Allocation
          </button>
          <button
            onClick={() => setActiveView('modules')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              activeView === 'modules'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-400'
            }`}
          >
            <span className="mr-2">🔧</span>
            Tech Modules
          </button>
        </div>

        {/* Budget Allocation View */}
        {activeView === 'allocation' && (
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How We Allocate Build Costs
            </h3>

            <div className="space-y-6 mb-16">
              {costAllocation.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-transparent"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="p-8">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-6">
                      <div className="flex items-center gap-4 lg:w-2/5">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{item.category}</h4>
                          <div className={`text-3xl font-extrabold bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
                            {item.percentage}%
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-3/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 mb-2">Budget Range</div>
                          <div className="text-2xl font-bold text-gray-900">
                            ₹{item.budgetMin}-{item.budgetMax} Lakhs
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                          <div className="text-xs text-gray-600 mb-1">Estimated USD</div>
                          <div className="text-lg font-bold text-blue-700">
                            ${Math.round((item.budgetMin * 100000) / 84 / 1000)}K-${Math.round((item.budgetMax * 100000) / 84 / 1000)}K
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                      />
                    </div>

                    {/* Includes List */}
                    <div>
                      <h5 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">What&apos;s Included:</h5>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {item.includes.map((include, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                            <span>{include}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Salary Note */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👥</div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Initial Team Salaries & Hiring</h4>
                  <p className="text-white/90 text-lg mb-4">
                    <strong className="text-yellow-300">₹110-140 Lakhs/year</strong> for core team
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Includes Full Stack Engineers, AI/ML Engineers, Product Managers, DevOps Engineers, UX Designers, Content Engineers, and other key roles essential for building and scaling the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tech Modules View */}
        {activeView === 'modules' && (
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key Tech & Content Modules Distribution
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {techModules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent group hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{module.name}</h4>
                      <div className={`text-3xl font-extrabold bg-gradient-to-r ${module.color} text-transparent bg-clip-text`}>
                        ~{module.percentage}%
                      </div>
                    </div>
                  </div>

                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${module.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${module.percentage}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Technology Investment Summary</h4>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    The core of our spend is building <strong className="text-blue-600">robust, scalable technology</strong> and <strong className="text-purple-600">high-quality content</strong>, backed by a skilled engineering team and localized for India&apos;s diverse learners.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <div className="font-bold text-gray-900">Go-to-Market Scale</div>
                        <div className="text-sm text-gray-600">Campus engagement for immediate impact</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow">
                      <span className="text-2xl">🌍</span>
                      <div>
                        <div className="font-bold text-gray-900">Localized for India</div>
                        <div className="text-sm text-gray-600">8 languages, inclusive design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <div
          className={`mt-20 grid sm:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">12-18</div>
            <div className="text-gray-600 font-medium">Months of Development</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-purple-600 mb-2">₹3-6 Cr</div>
            <div className="text-gray-600 font-medium">Total Investment</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-pink-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Transparent Allocation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
