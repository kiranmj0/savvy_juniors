import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg relative text-white bg-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative group bg-white rounded-full p-3 shadow-lg">
                <img
                  src="/navvy_image.png"
                  alt="Savvy Juniors"
                  className="relative h-20 w-20 object-contain transform transition-transform duration-500 group-hover:scale-110"
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
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-accent transition-colors">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">+971 58 580 0346</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">
                    Grandiose, Dubai Sports City, Dubai, UAE
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">contact@savvyjuniors.ae</p>
                </div>
              </div>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/80">
              Savvy Juniors © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
