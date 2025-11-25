import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Programs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to nurture development at every stage
            </p>
          </div>

          {/* Infant Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Infant (2 weeks – 12 months)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A gentle, nurturing start for the youngest learners. Our Infant Room is designed to feel like a second home—calm, secure, and responsive. Babies experience rich sensory play, early communication, movement exploration, and warm one-to-one interactions that build strong attachment and trust. We follow each baby's natural routine and create personalised care plans in partnership with families.
              </p>
            </div>
            <div className="lg:order-first animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <img 
                src="/programs_image.jpg" 
                alt="Infant Program" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Toddler Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Toddler (12 months – 2 years)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Confidence, movement, and early independence bloom here. Toddlers learn through discovery—touching, moving, climbing, exploring, and experimenting. Our environment invites curiosity with open-ended materials, sensory activities, early language experiences, and opportunities to practise self-help skills. Educators model language, emotions, and social behaviours to support toddlers' rapidly growing brains.
              </p>
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              <img 
                src="/programs_image.jpg" 
                alt="Toddler Program" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Early Learners Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Early Learners (2 – 3 years)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A perfect bridge between toddlerhood and preschool. Children at this stage enjoy more structured yet playful learning. They explore early numeracy, language development, creative arts, imaginative play, and social collaboration. We focus on communication, emotional regulation, physical coordination, and building confidence in group settings.
              </p>
            </div>
            <div className="lg:order-first animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <img 
                src="/programs_image.jpg" 
                alt="Early Learners Program" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Foundation Stage FS1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.7s" }}>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Foundation Stage / FS1 (3 – 4 years)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Preparing young learners for school—through play and inquiry. Children engage in deeper investigations, hands-on problem solving, early phonics, mark-making, role play, expressive arts, and outdoor learning. The EYFS framework guides developmental goals while the Reggio approach keeps learning joyful, child-led, and connected to real experiences.
              </p>
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: "0.8s" }}>
              <img 
                src="/programs_image.jpg" 
                alt="Foundation Stage FS1" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Foundation Stage FS2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right" style={{ animationDelay: "0.9s" }}>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Foundation Stage / FS2 (4 – 5 years)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A strong, holistic foundation for primary school and life. Our FS2 programme builds early literacy, numeracy, critical thinking, social responsibility, and independence. Children learn through projects, exploration, and meaningful discussions—developing confidence, resilience, and a genuine love for learning. By the end of this stage, children are emotionally, socially, and academically ready for school.
              </p>
            </div>
            <div className="lg:order-first animate-slide-in-left" style={{ animationDelay: "1.0s" }}>
              <img 
                src="/programs_image.jpg" 
                alt="Foundation Stage FS2" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Programs;