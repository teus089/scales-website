import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const services = [
  { name: 'Web Design', href: '/services/web-design' },
  { name: 'Marketing', href: '/services/marketing' },
  { name: 'AI Integration', href: '/services/ai-integration' },
  { name: 'Automation', href: '/services/automation' },
  { name: 'Custom Software Development', href: '/services/custom-software' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Refer & Earn', href: '/referrals' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex items-baseline whitespace-nowrap">
                <span
                  className="italic text-black font-bold"
                  style={{
                    fontSize: '24px',
                    letterSpacing: '-0.5px',
                    transform: 'skewX(-12deg)',
                    display: 'inline-block'
                  }}
                >
                  scales
                </span>
                <span
                  className="italic font-black text-emerald-500"
                  style={{
                    fontSize: '24px',
                    letterSpacing: '-1px',
                    transform: 'skewX(-12deg)',
                    display: 'inline-block'
                  }}
                >
                  10x
                </span>
              </span>
              <TrendingUp className="h-5 w-5 text-emerald-500" style={{ transform: 'translateY(-2px)' }} />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-neutral-900'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-3 w-3" />
                    </Link>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="w-64 bg-white border border-neutral-200 shadow-lg">
                          <div className="py-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-neutral-900'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-900" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-900" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'text-neutral-900'
                      : 'text-neutral-600'
                  }`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 space-y-1 mt-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-sm text-neutral-500"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
