import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Check } from 'lucide-react';

export default function CustomSoftware() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-cyan-900 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Layers className="h-8 w-8 text-cyan-300" />
              <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider">Service</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Custom Software Development
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Purpose-built software designed specifically for your business needs when off-the-shelf solutions fall short.
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
                  Built for your business
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  When generic software forces you to adapt your processes to its limitations, custom development gives you the freedom to build exactly what you need. No compromises, no workarounds, no paying for features you'll never use.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  Custom applications give you competitive advantage through technology, delivering exactly what you need without the bloat. You get software that fits your workflows, not the other way around.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">What you get</h3>
                <ul className="space-y-3">
                  {[
                    'Discovery and requirements analysis',
                    'Custom application architecture design',
                    'Full-stack development (frontend and backend)',
                    'Database design and optimization',
                    'API development and integrations',
                    'Security implementation and testing',
                    'Deployment and infrastructure setup',
                    'Ongoing support and maintenance'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Who this is for</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
                  Ideal for established businesses with specific requirements that generic software can't address. You've outgrown off-the-shelf solutions and need something built for your exact needs.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  Perfect when competitive differentiation depends on unique technological capabilities, or when existing software creates more problems than it solves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">Pricing</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Custom software development doesn't have fixed pricing because every project has different requirements, complexity, and scope. A simple internal tool costs less than an enterprise application with multiple integrations.
              </p>
              <p>
                I'll discuss your specific needs, understand your business objectives, and provide a clear project estimate before any work begins. The cost depends on:
              </p>
              <ul className="space-y-2 pl-6">
                <li>• The complexity of features and functionality required</li>
                <li>• Number and complexity of integrations with existing systems</li>
                <li>• User interface and user experience requirements</li>
                <li>• Scale and performance needs</li>
                <li>• Security and compliance requirements</li>
                <li>• Timeline and project urgency</li>
              </ul>
              <p>
                After the initial development, ongoing maintenance and support are available through monthly retainer agreements based on your needs.
              </p>
              <p className="font-semibold text-neutral-900">
                Custom software projects typically start at $10,000 and scale based on complexity. Contact me to discuss your specific requirements and receive a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-cyan-50 to-teal-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
              Ready to build something custom?
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
              Let's discuss your unique requirements and build software that gives you a competitive edge.
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
