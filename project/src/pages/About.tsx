import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              About me
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              I'm Mateus, a systems builder focused on helping businesses grow without breaking.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Background</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              My background
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                I've spent years working at the intersection of design, automation, and systems.
                I've seen companies struggle not because they lack ambition, but because their
                infrastructure wasn't built for scale.
              </p>
              <p>
                My approach combines strategic thinking with hands-on execution. I understand
                both the business side and the technical implementation—because one without the
                other doesn't work.
              </p>
              <p className="font-semibold text-neutral-900">
                I work with businesses that are serious about building foundations that last.
                No jargon, no complexity you don't need—just systems that scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900">
              How I work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Strategy without execution is fiction
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                I don't write reports that sit in drawers. Every strategy I develop comes
                with a clear implementation path and the support to make it happen.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Systems enable people, not replace them
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Good infrastructure frees your team to do their best work. It eliminates
                friction, reduces manual effort, and creates space for creativity and strategy.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-violet-50 to-white border-l-4 border-violet-500">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Growth should be predictable, not chaotic
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Sustainable businesses grow steadily, not erratically. I help you build the
                foundation that makes controlled, predictable scaling possible.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-white border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Complexity is the enemy of scale
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Simple systems scale. Complex ones break. I design for clarity, eliminating
                unnecessary complexity while preserving what actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Values</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-8">
              What I value
            </h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Clarity over cleverness</h3>
                <p className="text-neutral-700 leading-relaxed">
                  The best solution is the one everyone understands. I avoid unnecessary
                  complexity and communicate in plain language.
                </p>
              </div>
              <div className="relative pl-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Action over analysis</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Perfect planning doesn't exist. I believe in thorough preparation followed
                  by decisive action and continuous refinement.
                </p>
              </div>
              <div className="relative pl-6 border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Impact over activity</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Being busy isn't the same as being effective. I measure success by business
                  outcomes, not hours worked or deliverables created.
                </p>
              </div>
              <div className="relative pl-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Truth over comfort</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Sometimes the most valuable thing I can do is tell you what you need to hear,
                  not what you want to hear. Honest feedback builds better businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Who I work with</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              Who I work with
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                I partner with businesses that are serious about sustainable growth. Companies
                that understand the difference between quick wins and lasting change.
              </p>
              <p>
                My clients range from fast-growing startups preparing to scale to established
                companies navigating operational transformation. What they share is ambition,
                commitment, and the willingness to invest in their foundation.
              </p>
              <p className="font-semibold text-neutral-900">
                If you're looking for someone to validate existing plans, I'm probably not
                the right fit. If you want a partner who will challenge assumptions, bring
                fresh perspective, and help you build something that lasts—let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Work with me
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-10">
              If my approach resonates, let's explore what partnership could look like.
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
