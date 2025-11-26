import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-16">
        <div>
          <Link
            to="/"
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                About <span className="text-primary">Savvy Juniors</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <img
                  src="/about_us_image.jpg"
                  alt="About Savvy Juniors"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="text-left space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Savvy Juniors Early Childhood Centre opened early 2026,
                  bringing a fresh, research-led, and child-centred early years
                  experience to families in the UAE. We welcome children from 45
                  days to 5 years, offering a warm, nurturing environment where
                  every child is valued, understood, and celebrated.
                </p>
                <p>
                  Our approach blends the British curriculum alongside Montessori principles, enriched by the latest insights in early childhood neuroscience.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 text-gray-600 leading-relaxed mb-8">
              <p className="text-xl font-medium text-gray-900">
                At Savvy Juniors, childhood is honoured. Curiosity is encouraged. Independence is nurtured. And every milestone—big or small—is treasured.
              </p>
              <p>
                Savvy Juniors nursery space was designed to be a safe and nurturing environment where children feel loved, respected, and supported both physically and emotionally. We have transformed our spaces into sanctuaries filled with abundant natural light, educational play equipment, and supplies.
              </p>
            </div>

            <div className="mt-12 p-8 bg-white rounded-xl border-l-4 border-primary">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Learning Philosophy
              </h2>
              <ul className="text-left space-y-4 text-gray-600">
                <li className="flex gap-3 items-center">
                  <span className="text-primary text-xl"><i className="fas fa-book"></i></span>
                  <span>
                    <strong>Child-led discovery:</strong> We follow children's interests while intentionally guiding learning...
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-primary text-xl"><i className="fas fa-brain"></i></span>
                  <span>
                    <strong>Science-backed practice:</strong> Our programmes are thoughtfully designed to optimise early childhood development.
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-primary text-xl"><i className="fas fa-heart"></i></span>
                  <span>
                    <strong>Holistic growth:</strong> We support academic readiness, emotional intelligence, physical development, and social confidence.
                  </span>
                </li>
              </ul>
            </div>

            {/* <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
