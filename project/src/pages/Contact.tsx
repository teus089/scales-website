import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Let's talk
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              If you're serious about building infrastructure that scales, we should talk.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Schedule a call
            </h2>
            <p className="text-lg text-neutral-700">
              Book a time that works for you
            </p>
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/breezewebsites?hide_event_type_details=1"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </section>
    </div>
  );
}
