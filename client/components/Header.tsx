import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSlideIn, setShowSlideIn] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    // { label: "Contact Us", href: "/contact" },
    { label: "Admissions", href: "/admissions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowSlideIn(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
        : 'bg-white shadow-sm'
        }`}>
        <div className="max-w-7xl lg:max-w-none mx-auto p-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo and Navigation */}
            <div className="flex items-center gap-4 lg:gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                {!logoFailed ? (
                  <img
                    src={getAssetPath("navvy_image.png")}
                    alt="Savvy Juniors"
                    className={`p-1 md:p-2 object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'h-20 w-20 md:h-24 md:w-24' : 'h-24 w-24 md:h-28 md:w-28'
                      }`}
                    loading="eager"
                    decoding="async"
                    onError={() => setLogoFailed(true)}
                  />
                ) : (
                  <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">S</span>
                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">a</span>
                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">vvy</span>
                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent ml-1">Juniors</span>
                  </div>
                )}
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`relative px-2 py-2 text-xs lg:text-sm font-medium transition-all duration-300 transform whitespace-nowrap ${isActive
                        ? 'text-primary bg-primary/10 rounded-md scale-105'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md hover:scale-105'
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg font-medium text-xs lg:text-sm transition-all duration-300 hover:shadow-lg"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
                  }`}>
                  <Menu className={`w-6 h-6 text-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`} />
                </span>
                <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 translate-y-0' : 'rotate-45 translate-y-2'
                  }`}>
                  <X className={`w-6 h-6 text-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`} />
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <nav className="pb-4 pt-4 border-t border-gray-200/50 space-y-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                      ? 'text-white bg-gradient-to-r from-primary to-blue-600 shadow-md'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                      {!isActive && <ChevronRight className="w-4 h-4 text-gray-400" />}
                    </div>
                  </Link>
                );
              })}

              {/* Mobile Contact Link */}
              <Link
                to="/contact"
                className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === '/contact'
                  ? 'text-white bg-gradient-to-r from-primary to-blue-600 shadow-md'
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  Contact
                  {location.pathname !== '/contact' && <ChevronRight className="w-4 h-4 text-gray-400" />}
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* WhatsApp floating button */}
      <div className={`fixed right-4 bottom-24 z-40 transition-all duration-500 ${showSlideIn ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
        <a href="https://wa.me/9971585708135" target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="text-sm font-medium whitespace-nowrap text-white">
                WhatsApp
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
