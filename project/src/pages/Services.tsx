import { Link } from 'react-router-dom';
import { ArrowRight, Code, TrendingUp, Brain, Zap, Layers } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Services
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Strategic solutions designed to drive sustainable business growth. Each service
              is focused on delivering measurable results, not checking boxes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="group relative p-8 border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50/50 to-transparent hover:from-emerald-50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-emerald-500 text-white rounded-lg">
                  <Code className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Web Design</h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                Create modern, conversion-focused websites that represent your brand with clarity and sophistication.
                Digital experiences make lasting impressions and drive measurable outcomes. Whether you're dealing
                with an outdated website, poor user experience, mobile optimization issues, or slow load times, I build
                professional websites that position you as a credible market leader and provide a foundation for digital growth.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed font-semibold">
                Ideal for businesses ready to invest in their digital presence and understand that
                effective design is strategic, not cosmetic.
              </p>
            </div>

            <div className="group relative p-8 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-500 text-white rounded-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Marketing</h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                Data-driven marketing strategies cut through noise and reach your ideal customers. I offer two approaches:
              </p>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-blue-300">
                  <p className="font-semibold text-neutral-900 mb-1">Full-Service Marketing</p>
                  <p className="text-sm text-neutral-700">
                    Comprehensive campaigns including strategic planning, multi-channel management, paid advertising,
                    email automation, and ongoing optimization. Delivers sustainable growth through channels that work
                    for your business with clear visibility into performance. Best for companies with proven product-market
                    fit ready to scale acquisition.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-blue-300">
                  <p className="font-semibold text-neutral-900 mb-1">Organic Social Media Marketing</p>
                  <p className="text-sm text-neutral-700">
                    Consistent, quality content for your social channels—regular posting, platform-specific formatting, and
                    authentic engagement that builds your brand presence naturally over time. Best for businesses that want to
                    maintain an active social presence through organic content.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative p-8 border-l-4 border-violet-500 bg-gradient-to-r from-violet-50/50 to-transparent hover:from-violet-50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-violet-500 text-white rounded-lg">
                  <Brain className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">AI Integration</h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                I help you identify high-impact AI opportunities and implement solutions that deliver measurable
                results without the hype. Strategic AI integration focuses on concrete business value, reducing
                costs, improving decision-making speed, and unlocking capabilities that weren't previously feasible.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed font-semibold">
                Perfect for businesses serious about AI but skeptical of overhyped solutions. Ideal for companies
                with clear processes that could benefit from intelligent automation.
              </p>
            </div>

            <div className="group relative p-8 border-l-4 border-amber-500 bg-gradient-to-r from-amber-50/50 to-transparent hover:from-amber-50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-500 text-white rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Automation</h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                Process automation frees your team from repetitive tasks. I identify high-value automation
                opportunities and implement solutions that deliver immediate time savings and long-term efficiency
                gains. Automation reduces operational costs, minimizes errors, and allows your team to focus on
                high-value work.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed font-semibold">
                Best suited for growing businesses experiencing operational bottlenecks and companies where manual
                processes are preventing the team from focusing on strategic priorities.
              </p>
            </div>

            <div className="group relative p-8 border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50/50 to-transparent hover:from-cyan-50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-500 text-white rounded-lg">
                  <Layers className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Custom Software Development</h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                When off-the-shelf solutions fall short, I develop purpose-built software designed specifically for
                your business needs. Custom applications give you competitive advantage through technology,
                delivering exactly what you need without paying for features you don't use.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed font-semibold">
                Ideal for established businesses with specific requirements that generic software can't address,
                especially when competitive differentiation depends on unique technological capabilities.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl mt-16 space-y-8">
            <div className="bg-gradient-to-br from-neutral-50 to-white p-8 border-2 border-neutral-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Ongoing Support & Improvements</h2>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                I'll handle updates, improvements, and tweaks as your needs change. Available as monthly retainers for businesses that need continuous development support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-neutral-200 p-5">
                  <p className="text-2xl font-bold text-neutral-900 mb-2">$750/month</p>
                  <p className="text-sm text-neutral-600 mb-3 font-semibold">Starter</p>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• Minor updates and fixes</li>
                    <li>• Basic support</li>
                  </ul>
                </div>
                <div className="bg-white border border-neutral-200 p-5">
                  <p className="text-2xl font-bold text-neutral-900 mb-2">$1,200/month</p>
                  <p className="text-sm text-neutral-600 mb-3 font-semibold">Professional</p>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• Ongoing improvements</li>
                    <li>• Automation tweaks</li>
                  </ul>
                </div>
                <div className="bg-white border border-neutral-200 p-5">
                  <p className="text-2xl font-bold text-neutral-900 mb-2">$2,000/month</p>
                  <p className="text-sm text-neutral-600 mb-3 font-semibold">Premium</p>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• Priority support</li>
                    <li>• Continuous optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 border-l-4 border-amber-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                One-Time Optimization / Audit
              </h2>
              <p className="text-3xl font-bold text-neutral-900 mb-4">$500</p>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                I'll review your site, funnel, or automation setup and give you a clear list of what's working, what's not, and what to fix first. Perfect for businesses that want an expert assessment without committing to ongoing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
              Let's discuss your specific challenges and determine the right approach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105"
            >
              Book a meeting
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
