import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Admissions", href: "/admissions" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {!logoFailed ? (
              <img
                src="/navvy_image.png"
                alt="Savvy Juniors"
                className="h-28 w-28 p-2 object-contain"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-primary">S</span>
                <span className="text-2xl font-bold text-accent">a</span>
                <span className="text-2xl font-bold text-primary">vvy</span>
                <span className="text-2xl font-bold text-accent ml-1">Juniors</span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors text-sm font-medium ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-2 transition-colors text-sm font-medium ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10 px-2 rounded"
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
