import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Check } from 'lucide-react';

export default function Automation() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-amber-900 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Zap className="h-8 w-8 text-amber-300" />
              <span className="text-sm font-bold text-amber-300 uppercase tracking-wider">Service</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Automation
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Free your team from repetitive tasks with intelligent process automation that delivers immediate time savings.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Efficiency at scale
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  I identify high-value automation opportunities and implement solutions that deliver immediate time savings and long-term efficiency gains. Every automation is designed to be reliable, maintainable, and actually useful.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  You get reduced operational costs, minimized errors, and your team can focus on high-value work instead of repetitive tasks that drain their energy and time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">What you get</h3>
                <ul className="space-y-3">
                  {[
                    'Process analysis and automation opportunity mapping',
                    'Custom workflow automation development',
                    'Integration between tools and systems',
                    'Data processing and transformation automation',
                    'Automated reporting and notifications',
                    'Task scheduling and batch processing',
                    'Error handling and recovery systems',
                    'Documentation and team training'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Who this is for</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  Best suited for growing businesses experiencing operational bottlenecks. You're scaling, but manual processes are holding you back.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  Ideal for companies where manual processes are preventing the team from focusing on strategic priorities, and organizations ready to invest in systems that scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">Pricing</h2>
            <p className="text-neutral-700 mb-8">
              I'll build custom automations that handle repetitive work for you—things like lead capture, email follow-ups, or CRM organization. The one-time fee covers building and deploying your system. Monthly pricing is for ongoing maintenance, support, and improvements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-amber-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Starter</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$1,500 + $250/month</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• Build 1–2 core automations</li>
                  <li className="text-sm text-neutral-700">• Initial testing and deployment</li>
                  <li className="text-sm text-neutral-700">• Monitoring 1–2 automations</li>
                  <li className="text-sm text-neutral-700">• Bug fixes and maintenance</li>
                  <li className="text-sm text-neutral-700">• Email support</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-amber-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Professional</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$3,000 + $500/month</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• Multiple connected automations</li>
                  <li className="text-sm text-neutral-700">• CRM or tool integrations</li>
                  <li className="text-sm text-neutral-700">• Support for multiple automations</li>
                  <li className="text-sm text-neutral-700">• Monthly tweaks or improvements</li>
                  <li className="text-sm text-neutral-700">• Faster response time</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-amber-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Premium</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$5,000 + $1,000/month</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• Custom automation system</li>
                  <li className="text-sm text-neutral-700">• Advanced logic and workflows</li>
                  <li className="text-sm text-neutral-700">• Ongoing optimization</li>
                  <li className="text-sm text-neutral-700">• New automations added over time</li>
                  <li className="text-sm text-neutral-700">• Priority support and reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
              Ready to automate and scale?
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
              Let's identify your biggest bottlenecks and build systems that scale with your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
