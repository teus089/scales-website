import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-lg font-semibold tracking-tight text-neutral-900">
              Teus Scales
            </Link>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              Strategic growth partner for businesses that refuse to settle.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/referrals" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Refer & Earn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-600">
            © {currentYear} Teus Scales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
