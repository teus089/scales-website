import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Check } from 'lucide-react';

export default function Marketing() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <TrendingUp className="h-8 w-8 text-blue-300" />
              <span className="text-sm font-bold text-blue-300 uppercase tracking-wider">Service</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Marketing
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Data-driven marketing strategies that cut through noise and reach your ideal customers.
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
                  Growth that's sustainable
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  I focus on sustainable growth through channels that actually work for your business. No gimmicks, no growth hacking tricks that fall apart after three months.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  You get predictable lead generation, better customer acquisition costs, and clear visibility into what's working. Marketing becomes a reliable growth engine instead of a constant experiment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">What you get</h3>
                <ul className="space-y-3">
                  {[
                    'Strategic marketing plan aligned with business goals',
                    'Audience research and customer profiling',
                    'Multi-channel campaign development',
                    'Content strategy and execution',
                    'Email marketing and automation',
                    'Social media strategy and management',
                    'Organic social media posting (3-7 posts per week)',
                    'Platform-specific content formatting and scheduling',
                    'Caption writing and hashtag research',
                    'Paid advertising campaign setup and management',
                    'Ad creative guidance and testing',
                    'Performance tracking and analytics',
                    'Regular reporting and optimization'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Who this is for</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  Best for companies that want marketing grounded in business objectives, not vanity metrics. You care about revenue impact, not just engagement numbers.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  This works best for businesses with proven product-market fit ready to scale acquisition, and companies willing to invest in sustainable growth rather than quick wins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">Full-Service Marketing</h2>
            <p className="text-neutral-700 mb-6">
              Comprehensive marketing strategies that include campaign development, multi-channel management, and ongoing optimization. I focus on data-driven approaches that cut through the noise and reach your ideal customers, delivering sustainable growth through channels that actually work for your business.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 border-l-4 border-blue-500 mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">What you get</h3>
              <ul className="space-y-3">
                {[
                  'Strategic marketing plan aligned with business goals',
                  'Audience research and customer profiling',
                  'Multi-channel campaign development',
                  'Content strategy and execution',
                  'Email marketing and automation',
                  'Social media strategy and management',
                  'Paid advertising campaign setup and management',
                  'Ad creative guidance and testing',
                  'Performance tracking and analytics',
                  'Regular reporting and optimization'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-neutral-600 italic">
              Ad spend is separate and paid directly to platforms (Google, Meta, etc.). I help you determine the right budget based on your goals and industry benchmarks. Contact me for custom pricing based on your business needs and campaign scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">Organic Social Media Marketing</h2>
            <p className="text-neutral-700 mb-8">
              Consistent, quality content for your social media channels. This focuses on organic posting and engagement—building your presence naturally through regular content rather than paid advertising. Perfect for businesses that want to maintain an active, authentic social presence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-blue-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Standard</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$150/week</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• 3–4 organic posts per week</li>
                  <li className="text-sm text-neutral-700">• Platform-specific formatting</li>
                  <li className="text-sm text-neutral-700">• Caption writing & hashtag research</li>
                  <li className="text-sm text-neutral-700">• Content scheduling</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-blue-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Premium</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$250/week</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• 5–7 organic posts per week</li>
                  <li className="text-sm text-neutral-700">• Platform-specific formatting</li>
                  <li className="text-sm text-neutral-700">• Caption writing & hashtag research</li>
                  <li className="text-sm text-neutral-700">• Content scheduling</li>
                  <li className="text-sm text-neutral-700">• Light engagement support</li>
                  <li className="text-sm text-neutral-700">• Performance check-ins & adjustments</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-neutral-600 italic mt-6">
              This service is focused on organic social media marketing—creating and posting content to build your brand presence naturally over time, without paid ads.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
              Ready to grow strategically?
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
              Let's build a marketing system that delivers consistent, measurable results.
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
