import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function Classes() {
  const programs = [
    {
      age: "2 weeks – 12 months",
      title: "Infant",
      description:
        "A gentle, nurturing start for the youngest learners. Our Infant Room is designed to feel like a second home—calm, secure, and responsive. Babies experience rich sensory play, early communication, movement exploration, and warm one-to-one interactions that build strong attachment and trust.",
    },
    {
      age: "12 months – 2 years",
      title: "Toddler",
      description:
        "Confidence, movement, and early independence bloom here. Toddlers learn through discovery—touching, moving, climbing, exploring, and experimenting. Our environment invites curiosity with open-ended materials and sensory activities.",
    },
    {
      age: "2 – 3 years",
      title: "Early Learners",
      description:
        "A perfect bridge between toddlerhood and preschool. Children at this stage enjoy more structured yet playful learning. They explore early numeracy, language development, creative arts, imaginative play, and social collaboration.",
    },
    {
      age: "3 – 4 years",
      title: "Foundation Stage / FS1",
      description:
        "Preparing young learners for school—through play and inquiry. Children engage in deeper investigations, hands-on problem solving, early phonics, mark-making, role play, and expressive arts.",
    },
    {
      age: "4 – 5 years",
      title: "Foundation Stage / FS2",
      description:
        "A strong, holistic foundation for primary school and life. Our FS2 programme builds early literacy, numeracy, critical thinking, social responsibility, and independence.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-20">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive early childhood programs designed for every stage of
              development
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border-l-4 border-primary hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">
                      Ages {program.age}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                      {program.description}
                    </p>
                  </div>
                  <button className="bg-accent hover:bg-orange-600 text-gray-900 px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-12 bg-primary text-white rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Our Programs?
            </h2>
            <p className="text-purple-100 mb-8">
              Contact us to schedule a tour and learn more about how Savvy
              Juniors can nurture your child's development.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent hover:bg-orange-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
