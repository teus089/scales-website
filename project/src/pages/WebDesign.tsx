import { Link } from 'react-router-dom';
import { Code, ArrowRight, Check } from 'lucide-react';

export default function WebDesign() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Code className="h-8 w-8 text-emerald-300" />
              <span className="text-sm font-bold text-emerald-300 uppercase tracking-wider">Service</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Web Design
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Create modern, conversion-focused websites that represent your brand with clarity and sophistication.
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
                  Why it matters
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  Digital experiences make lasting impressions and drive measurable outcomes. Your website is often the first interaction potential customers have with your business, and it sets the tone for everything that follows.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  Whether you're dealing with an outdated website, poor user experience, mobile optimization issues, or slow load times, I build professional websites that position you as a credible market leader and provide a foundation for digital growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 border-l-4 border-emerald-500">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">What you get</h3>
                <ul className="space-y-3">
                  {[
                    'Modern, responsive design that works on all devices',
                    'Fast loading speeds optimized for performance',
                    'SEO-friendly structure for better search visibility',
                    'Clear calls-to-action designed for conversions',
                    'Professional branding and visual hierarchy',
                    'Intuitive navigation and user experience',
                    'Content management system for easy updates',
                    'Analytics integration to track performance'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Who this is for</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  Ideal for businesses ready to invest in their digital presence and understand that effective design is strategic, not cosmetic.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  This service works best for companies that value quality, have clear business objectives, and want a website that actively contributes to their growth rather than just existing online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">Pricing</h2>
            <p className="text-neutral-700 mb-8">
              I'll design and build a custom website that looks professional and works well on any device.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-emerald-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Starter</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$500 + $50/month</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• 3–5 page custom website</li>
                  <li className="text-sm text-neutral-700">• Responsive design</li>
                  <li className="text-sm text-neutral-700">• Basic SEO setup</li>
                  <li className="text-sm text-neutral-700">• Contact / lead form</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-emerald-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Professional</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$1,000 + $100/month</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• 6–10 page custom website</li>
                  <li className="text-sm text-neutral-700">• Conversion-focused layout</li>
                  <li className="text-sm text-neutral-700">• SEO best practices</li>
                  <li className="text-sm text-neutral-700">• Analytics & tracking setup</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-neutral-200 p-6 hover:border-emerald-500 transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Premium</h3>
                <p className="text-3xl font-bold text-neutral-900 mb-6">$2,000 + $150/month</p>
                <ul className="space-y-3">
                  <li className="text-sm text-neutral-700">• Fully custom website</li>
                  <li className="text-sm text-neutral-700">• Advanced UI/UX design</li>
                  <li className="text-sm text-neutral-700">• Performance optimization</li>
                  <li className="text-sm text-neutral-700">• Automation or CRM integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
              Ready to elevate your web presence?
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
              Let's discuss your project and create a website that drives real business results.
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
