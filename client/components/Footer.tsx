import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg relative text-white bg-primary">
      <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative group bg-white rounded-full p-3 shadow-lg">
                <img
                  src={getAssetPath("navvy_image.png")}
                  alt="Savvy Juniors"
                  className="relative h-20 w-20 object-contain transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = 'flex';
                  }}
                />

                {/* Fallback text logo */}
                <div className="hidden items-center gap-1">
                  <span className="text-2xl font-bold text-blue-600">S</span>
                  <span className="text-2xl font-bold text-orange-500">a</span>
                  <span className="text-2xl font-bold text-blue-600">vvy</span>
                  <span className="text-2xl font-bold text-orange-500 ml-1">Juniors</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/80 max-w-md">
              Nurturing young minds with research-led, child-centered early childhood education.
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-white">Useful Links</h3>
            <div className="space-y-1">
              <Link
                to="/"
                className="block py-1 px-2 transition-all text-white hover:font-bold text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-1 px-2 transition-all text-white hover:font-bold text-sm"
              >
                About Us
              </Link>
              <Link
                to="/programs"
                className="block py-1 px-2 transition-all text-white hover:font-bold text-sm"
              >
                Programs
              </Link>
              <Link
                to="/contact"
                className="block py-1 px-2 transition-all text-white hover:font-bold text-sm"
              >
                Contact Us
              </Link>
              <Link
                to="/admissions"
                className="block py-1 px-2 transition-all text-white hover:font-bold text-sm"
              >
                Admissions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-white">Contact Info</h3>
            <div className="space-y-2">
              {/* Phone */}
              <a
                href="tel:+971585800346"
                className="flex items-center gap-2 py-1 transition-all text-white hover:font-bold text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+971 58 580 0346</span>
              </a>
              {/* Location */}
              <a
                href="https://maps.google.com/?q=Grandiose,Dubai+Sports+City,Dubai,UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 py-1 transition-all text-white hover:font-bold text-sm"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-tight">Grandiose, Dubai Sports City, Dubai, UAE</span>
              </a>
              {/* Email */}
              <a
                href="mailto:contact@savvyjuniors.ae"
                className="flex items-center gap-2 py-1 transition-all text-white hover:font-bold text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">contact@savvyjuniors.ae</span>
              </a>
            </div>
          </div>


          {/* Recent Posts */}
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Weekly Drawing Class
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Playing With Puzzle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Match Puzzle in Class
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  How to Match Generally
                </a>
              </li>
            </ul>
          </div> */}

          {/* Newsletter */}
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to our newsletter for updates on events and new blog posts.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 rounded text-gray-900 text-sm"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-2 py-2 rounded font-medium text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-white/20 pt-8">
          {/* Social Links & Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 order-2 sm:order-1">
              <a href="#" className="hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/80 text-center sm:text-right order-1 sm:order-2">
              Savvy Juniors © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
