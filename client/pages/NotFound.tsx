import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-32">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-4">
              Looking for something specific? Check out these pages:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/about"
                className="text-primary hover:underline font-medium"
              >
                About Us
              </Link>
              <Link
                to="/classes"
                className="text-primary hover:underline font-medium"
              >
                Classes
              </Link>
              <Link
                to="/admissions"
                className="text-primary hover:underline font-medium"
              >
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
