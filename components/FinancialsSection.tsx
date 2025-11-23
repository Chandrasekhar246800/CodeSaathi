'use client';

import { useEffect, useRef, useState } from 'react';

export default function FinancialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'funding' | 'projections' | 'breakdown'>('funding');
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

  const fundingAllocation = [
    { category: 'Product & Technology', percentage: 55, amount: '₹1.65-3.3 Cr', color: 'from-blue-500 to-cyan-500', icon: '💻' },
    { category: 'Sales & Go-To-Market', percentage: 20, amount: '₹0.6-1.2 Cr', color: 'from-purple-500 to-pink-500', icon: '📈' },
    { category: 'Content Development', percentage: 15, amount: '₹0.45-0.9 Cr', color: 'from-green-500 to-teal-500', icon: '📚' },
    { category: 'Operations', percentage: 5, amount: '₹0.15-0.3 Cr', color: 'from-orange-500 to-red-500', icon: '⚙️' },
    { category: 'Marketing', percentage: 5, amount: '₹0.15-0.3 Cr', color: 'from-indigo-500 to-purple-500', icon: '📢' },
  ];

  const projections = [
    { year: '2026', revenue: 45, cost: 112, profit: -67, description: 'MVP to Market' },
    { year: '2027', revenue: 500, cost: 230, profit: 270, description: 'Break-even Year' },
    { year: '2028', revenue: 2400, cost: 670, profit: 1730, description: 'Rapid Growth' },
    { year: '2029', revenue: 6200, cost: 1480, profit: 4720, description: 'National Scale' },
    { year: '2030', revenue: 12500, cost: 2750, profit: 9750, description: 'Market Leader' },
  ];

  const milestones = [
    {
      amount: '₹1-1.5 Cr',
      phase: 'Foundation Phase',
      goals: ['MVP development', 'AI feedback tools', '10+ colleges', '10K DAU growth', 'Launch in 1+ Indian language'],
    },
    {
      amount: '₹1.5-2.5 Cr',
      phase: 'Growth Phase',
      goals: ['Core team ramp-up', 'Recruiter SaaS beta', 'B2B onboarding', 'Mentorship features', 'Analytics dashboard'],
    },
    {
      amount: '₹1.5-2 Cr',
      phase: 'Scale Phase',
      goals: ['National scale-up', 'Major hackathon', 'Language expansion', 'B2G pilot', 'Institutional sales support'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="financials"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-50 via-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6">
            <span>💰</span>
            <span className="text-sm font-medium">Investment Opportunity</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
            Financials &{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-transparent bg-clip-text">
              Investment
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Seed round of <strong className="text-green-600">₹3-6 crores</strong> to scale from MVP to national impact with clear path to profitability
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { id: 'funding', label: 'Use of Funds', icon: '💼' },
            { id: 'projections', label: 'Financial Projections', icon: '📊' },
            { id: 'breakdown', label: 'Milestone Breakdown', icon: '🎯' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-green-400'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Funding Allocation Tab */}
        {activeTab === 'funding' && (
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Seed Round Investment: ₹3-6 Crores
              </h3>
              <p className="text-center text-gray-600 text-lg mb-8">
                (approx $350,000-$700,000 USD)
              </p>

              {/* Pie Chart Visual Representation */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Left: Visual Pie */}
                <div className="relative">
                  <svg viewBox="0 0 200 200" className="w-full max-w-md mx-auto">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#e5e7eb" strokeWidth="20" />
                    {/* Product & Tech - 55% */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad1)" strokeWidth="20"
                      strokeDasharray="310 565" strokeDashoffset="0" transform="rotate(-90 100 100)" className="transition-all duration-1000" />
                    {/* Sales - 20% */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad2)" strokeWidth="20"
                      strokeDasharray="113 565" strokeDashoffset="-310" transform="rotate(-90 100 100)" className="transition-all duration-1000" />
                    {/* Content - 15% */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad3)" strokeWidth="20"
                      strokeDasharray="85 565" strokeDashoffset="-423" transform="rotate(-90 100 100)" className="transition-all duration-1000" />
                    {/* Operations - 5% */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad4)" strokeWidth="20"
                      strokeDasharray="28 565" strokeDashoffset="-508" transform="rotate(-90 100 100)" className="transition-all duration-1000" />
                    {/* Marketing - 5% */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad5)" strokeWidth="20"
                      strokeDasharray="29 565" strokeDashoffset="-536" transform="rotate(-90 100 100)" className="transition-all duration-1000" />
                    
                    <defs>
                      <linearGradient id="grad1"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#06B6D4"/></linearGradient>
                      <linearGradient id="grad2"><stop stopColor="#A855F7"/><stop offset="1" stopColor="#EC4899"/></linearGradient>
                      <linearGradient id="grad3"><stop stopColor="#10B981"/><stop offset="1" stopColor="#14B8A6"/></linearGradient>
                      <linearGradient id="grad4"><stop stopColor="#F97316"/><stop offset="1" stopColor="#EF4444"/></linearGradient>
                      <linearGradient id="grad5"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#A855F7"/></linearGradient>
                    </defs>
                    
                    <text x="100" y="95" textAnchor="middle" className="text-2xl font-bold fill-gray-900">₹3-6 Cr</text>
                    <text x="100" y="115" textAnchor="middle" className="text-sm fill-gray-600">Seed Round</text>
                  </svg>
                </div>

                {/* Right: Breakdown Cards */}
                <div className="space-y-4">
                  {fundingAllocation.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{item.category}</h4>
                          <div className="flex items-center gap-3">
                            <div className={`text-2xl font-extrabold bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
                              {item.percentage}%
                            </div>
                            <div className="text-sm text-gray-600">{item.amount}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financial Projections Tab */}
        {activeTab === 'projections' && (
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              5-Year Financial Projections
            </h3>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto mb-12">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Year</th>
                    <th className="px-6 py-4 text-right text-lg font-bold">Revenue (₹ Lakhs)</th>
                    <th className="px-6 py-4 text-right text-lg font-bold">Cost (₹ Lakhs)</th>
                    <th className="px-6 py-4 text-right text-lg font-bold">Net Profit (₹ Lakhs)</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Phase</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        item.profit >= 0 ? 'bg-green-50/30' : 'bg-red-50/30'
                      }`}
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 text-lg">{item.year}</td>
                      <td className="px-6 py-4 text-right text-green-600 font-bold text-lg">
                        ₹{item.revenue.toLocaleString('en-IN')}
                      </td>
                      <td className="px-6 py-4 text-right text-orange-600 font-semibold">
                        ₹{item.cost.toLocaleString('en-IN')}
                      </td>
                      <td className={`px-6 py-4 text-right font-bold text-lg ${
                        item.profit >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.profit >= 0 ? '+' : ''}₹{item.profit.toLocaleString('en-IN')}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {item.description}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6 mb-12">
              {projections.map((item, index) => (
                <div key={index} className={`bg-white rounded-2xl p-6 shadow-xl border-2 ${
                  item.profit >= 0 ? 'border-green-200' : 'border-red-200'
                }`}>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-2xl font-bold text-gray-900">{item.year}</h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {item.description}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue</span>
                      <span className="font-bold text-green-600">₹{item.revenue.toLocaleString('en-IN')} L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost</span>
                      <span className="font-semibold text-orange-600">₹{item.cost.toLocaleString('en-IN')} L</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t-2 border-gray-200">
                      <span className="font-semibold text-gray-900">Net Profit</span>
                      <span className={`font-bold text-lg ${
                        item.profit >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.profit >= 0 ? '+' : ''}₹{item.profit.toLocaleString('en-IN')} L
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
                <div className="text-4xl mb-3">📉</div>
                <h4 className="font-bold text-gray-900 mb-2">Year 1: Investment Phase</h4>
                <p className="text-sm text-gray-600">Major investment in product & infrastructure. Expected net loss as platform scales.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="text-4xl mb-3">⚖️</div>
                <h4 className="font-bold text-gray-900 mb-2">Year 2: Break-even</h4>
                <p className="text-sm text-gray-600">Customer base matures and sales contract pipeline generates sustainable revenue.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-emerald-300">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="font-bold text-gray-900 mb-2">Years 3-5: Rapid Scale</h4>
                <p className="text-sm text-gray-600">Strong operating leverage drives significant profitability and market dominance.</p>
              </div>
            </div>
          </div>
        )}

        {/* Milestone Breakdown Tab */}
        {activeTab === 'breakdown' && (
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Milestone-Linked Expenditure Plan
            </h3>

            <div className="space-y-8 mb-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-green-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/4">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-xl">
                        <span>💰</span>
                        {milestone.amount}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mt-4">{milestone.phase}</h4>
                    </div>
                    <div className="md:w-3/4">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {milestone.goals.map((goal, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
                            <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                            <span className="text-sm text-gray-700 font-medium">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Annual Spend Table */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Spend Breakdown (₹ Lakhs)</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Category</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Y1</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Y2</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Y3</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Y4</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Y5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-gray-900">Talent & Salaries</td>
                      <td className="px-4 py-3 text-center text-gray-700">60</td>
                      <td className="px-4 py-3 text-center text-gray-700">80</td>
                      <td className="px-4 py-3 text-center text-gray-700">120</td>
                      <td className="px-4 py-3 text-center text-gray-700">180</td>
                      <td className="px-4 py-3 text-center text-gray-700">250</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">Cloud/Infra/AI Costs</td>
                      <td className="px-4 py-3 text-center text-gray-700">32</td>
                      <td className="px-4 py-3 text-center text-gray-700">100</td>
                      <td className="px-4 py-3 text-center text-gray-700">400</td>
                      <td className="px-4 py-3 text-center text-gray-700">1000</td>
                      <td className="px-4 py-3 text-center text-gray-700">2000</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-gray-900">Ops, Admin, Compliance</td>
                      <td className="px-4 py-3 text-center text-gray-700">20</td>
                      <td className="px-4 py-3 text-center text-gray-700">50</td>
                      <td className="px-4 py-3 text-center text-gray-700">150</td>
                      <td className="px-4 py-3 text-center text-gray-700">300</td>
                      <td className="px-4 py-3 text-center text-gray-700">500</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-green-50 to-emerald-50 font-bold">
                      <td className="px-4 py-4 text-gray-900">Total Opex</td>
                      <td className="px-4 py-4 text-center text-green-700">112</td>
                      <td className="px-4 py-4 text-center text-green-700">230</td>
                      <td className="px-4 py-4 text-center text-green-700">670</td>
                      <td className="px-4 py-4 text-center text-green-700">1480</td>
                      <td className="px-4 py-4 text-center text-green-700">2750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 shadow-2xl text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Join Our Investment Journey
            </h3>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our ask of ₹3-6 crores will take CodeSaathi from post-MVP to national scale with clear path to profitability by year two
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-green-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-300">
                Schedule Investor Meeting
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-green-600 transition-all duration-300">
                Download Pitch Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
