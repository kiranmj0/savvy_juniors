import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAssetPath } from "@/lib/assets";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">Admissions and Onboarding</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the Savvy Juniors family and give your child the best start in life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Welcome to Our Community
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Savvy Juniors, we believe every child deserves a nurturing environment where they can grow, learn, and thrive. Our admission process is designed to ensure the best fit for your family and your child's unique needs.
                </p>
                <p>
                  We welcome children from 45 days to 5 years old, providing age-appropriate programs that blend the British curriculum with Montessori principles, all backed by the latest early childhood development research.
                </p>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Admission Steps:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        <i className="fas fa-calendar-alt"></i>
                      </span>
                      <span>Schedule a tour of our facilities</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      <span>Complete the application form</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        <i className="fas fa-users"></i>
                      </span>
                      <span>Meet with our educational team</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <span>Receive admission confirmation</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
                  >
                    Start Your Application
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src={getAssetPath("admissions-hero.png")}
                alt="Admissions at Savvy Juniors"
                className="w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admissions;