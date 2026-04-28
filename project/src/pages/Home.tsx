import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Zap, Target, Workflow } from 'lucide-react';

const instagramUrl = 'https://www.instagram.com/teus10x/?utm_source=ig_embed&utm_campaign=loading';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Technology and innovation"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              I build systems that help businesses grow without complexity
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              I'm Mateus. I design and build websites, automate workflows, and help companies scale their operations. No jargon, no complexity you don't need—just clean systems that work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-all hover:scale-105"
              >
                Book a meeting
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all"
              >
                View services
              </Link>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit teus10x on Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-orange-500"></div>
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              The problem with growth
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                Most businesses hit a ceiling not because they lack ambition, but because their systems weren't built to handle what comes next.
              </p>
              <p>
                Growth exposes every weak point. Teams become bottlenecks. Processes that worked at 10 people fail at 50. Revenue grows, but margins shrink.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-neutral-900">
                I help you build differently—so growth becomes predictable, not chaotic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
              What I offer
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Services focused on making your business run smoother and scale faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative bg-white border-2 border-neutral-200 hover:border-emerald-500 transition-all hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-6">
                <div className="mb-4 overflow-hidden h-40">
                  <img
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Web Design"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Web Design
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Digital presence that drives business results through modern, conversion-focused design.
                </p>
              </div>
            </div>
            <div className="group relative bg-white border-2 border-neutral-200 hover:border-blue-500 transition-all hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-6">
                <div className="mb-4 overflow-hidden h-40">
                  <img
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Marketing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Marketing
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Strategic marketing that generates qualified leads through data-driven approaches.
                </p>
              </div>
            </div>
            <div className="group relative bg-white border-2 border-neutral-200 hover:border-violet-500 transition-all hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-violet-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-6">
                <div className="mb-4 overflow-hidden h-40">
                  <img
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="AI Integration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  AI Integration
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Practical AI implementation that solves real problems without the hype.
                </p>
              </div>
            </div>
            <div className="group relative bg-white border-2 border-neutral-200 hover:border-amber-500 transition-all hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-6">
                <div className="mb-4 overflow-hidden h-40">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Automation"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Automation
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Eliminate manual work and scale efficiently through intelligent process automation.
                </p>
              </div>
            </div>
            <div className="group relative bg-white border-2 border-neutral-200 hover:border-cyan-500 transition-all hover:shadow-xl md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-6">
                <div className="mb-4 overflow-hidden h-40">
                  <img
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Custom Software"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Custom Software Development
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Tailored solutions for unique business challenges that off-the-shelf software can't solve.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              View all services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Workflow className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Process</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-8">
                How I work
              </h2>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-4 border-blue-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Discovery
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    I start by understanding where you are, where you want to go, and what's actually holding you back. Deep diagnosis, not surface checks.
                  </p>
                </div>
                <div className="relative pl-8 border-l-4 border-cyan-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Design
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    I create a clear roadmap with prioritized work, defined outcomes, and realistic timelines. Strategy that makes sense to your team.
                  </p>
                </div>
                <div className="relative pl-8 border-l-4 border-emerald-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Deliver
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    I implement alongside your team. Regular checkpoints, clear accountability, and continuous refinement until the new system is running.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 z-10"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Collaborative workspace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Why it works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              Why this works
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                Most consultants sell frameworks and leave. I build systems your team actually uses.
              </p>
              <p>
                I'm not here to write a report that sits in a drawer. I work alongside you, transfer knowledge, and make sure the changes stick.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-neutral-900">
                My approach combines strategic thinking with hands-on execution. I understand both the business side and the technical implementation—because one without the other doesn't work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Let's talk
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-10">
              If you're ready to build systems that scale, reach out.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg"
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
