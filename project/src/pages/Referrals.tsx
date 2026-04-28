import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Users } from 'lucide-react';

export default function Referrals() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Refer a client, get $200
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Know a business that could benefit from better systems? I'd like to thank you for the introduction.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">How it works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              Simple and straightforward
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                Most of my clients come through referrals. When someone you trust recommends my work, it means something. I want to acknowledge that.
              </p>
              <p>
                For every client you refer who completes a paid project with me, I'll send you $200. No limits, no fine print. Just a straightforward thank you for the introduction.
              </p>
              <p className="font-semibold text-neutral-900">
                A successful referral is simple: someone you introduce who works with me and completes a paid project. That's it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-8">
              How it works
            </h2>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Make the introduction
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Send me an email with the referral's name and contact information. Include a brief note about their business if you'd like.
                </p>
              </div>
              <div className="relative pl-8 border-l-4 border-cyan-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  I take it from there
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  I'll reach out to start a conversation. No pressure, no aggressive sales tactics. Just an honest discussion about whether my work is a good fit for their needs.
                </p>
              </div>
              <div className="relative pl-8 border-l-4 border-emerald-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Project completes, you get paid
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Once the referred client completes their first paid project with me, I'll send you $200. You'll receive payment within one week of project completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Ready to refer someone?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-10">
              Send me an email with their details and I'll take it from there.
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
