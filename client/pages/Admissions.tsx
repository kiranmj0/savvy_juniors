import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Admission Onboarding
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
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Schedule a tour of our facilities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Complete the application form
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Meet with our educational team
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Receive admission confirmation
                    </li>
                  </ul>
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
                src="/admission_image.jpg"
                alt="Admissions at Savvy Juniors"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
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