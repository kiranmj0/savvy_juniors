import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  BookOpen,
  Music,
  Zap,
  Trophy,
  Smile,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 210,
    hours: 8,
    minutes: 7,
    seconds: 50,
  });
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Users,
      title: "Great Teacher",
      description:
        "Expert educators dedicated to nurturing each child's unique development and potential.",
    },
    {
      icon: Trophy,
      title: "Bus Service",
      description:
        "Safe and reliable transportation service for all our students with trained drivers.",
    },
    {
      icon: Music,
      title: "Music Training",
      description:
        "Engaging music sessions that develop rhythm, coordination, and creative expression.",
    },
    {
      icon: Zap,
      title: "Sports Training",
      description:
        "Physical development programs that build strength, confidence, and teamwork skills.",
    },
    {
      icon: BookOpen,
      title: "Outing Service",
      description:
        "Educational excursions and field trips to enhance learning through real-world experiences.",
    },
    {
      icon: Smile,
      title: "Outing Service",
      description:
        "Fun outdoor activities that promote social interaction and environmental awareness.",
    },
  ];

  const classes = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1427504494785-cdecdca3e254?w=400&h=300&fit=crop",
      title: "Practical Activities",
      description:
        "Hands-on learning experiences that develop motor skills and cognitive abilities through play.",
      age: "2-5",
      price: "15$/Day",
      seats: "15 Seats",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1503454537688-e6017211a1d5?w=400&h=300&fit=crop",
      title: "Practical Activities",
      description:
        "Structured play-based learning that encourages exploration and discovery at every stage.",
      age: "2-5",
      price: "15$/Day",
      seats: "15 Seats",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7fe14e6104?w=400&h=300&fit=crop",
      title: "Practical Activities",
      description:
        "Creative and engaging activities that support holistic development of young learners.",
      age: "2-5",
      price: "15$/Day",
      seats: "15 Seats",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1503454537688-e6017211a1d5?w=300&h=200&fit=crop",
      title: "Weekly Drawing Class",
      date: "April 19, 2019",
      author: "Admin",
      excerpt:
        "Discover how our drawing classes help develop fine motor skills and creative expression in young learners.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7fe14e6104?w=300&h=200&fit=crop",
      title: "Playing With Puzzle",
      date: "April 19, 2019",
      author: "Admin",
      excerpt:
        "Puzzles are powerful tools for cognitive development. Learn how they enhance problem-solving skills.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1427504494785-cdecdca3e254?w=300&h=200&fit=crop",
      title: "Match Puzzle in Class",
      date: "April 19, 2019",
      author: "Admin",
      excerpt:
        "Interactive matching games that make learning fun while building essential cognitive abilities.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=300&h=200&fit=crop",
      title: "How to Match Generally",
      date: "April 19, 2019",
      author: "Admin",
      excerpt:
        "Master the art of matching activities for early childhood development and academic readiness.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-shape w-20 h-20 bg-primary/10 rounded-full absolute top-20 left-10 animate-float-1"></div>
          <div className="floating-shape w-16 h-16 bg-accent/10 rounded-full absolute top-40 right-20 animate-float-2"></div>
          <div className="floating-shape w-12 h-12 bg-primary/5 rounded-full absolute bottom-40 left-1/4 animate-float-3"></div>
          <div className="floating-shape w-24 h-24 bg-accent/5 rounded-full absolute bottom-20 right-1/3 animate-float-4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="inline-block animate-text-reveal">Book your play and stay visit at</span>
                  <br />
                  <span className="text-primary inline-block animate-text-reveal-delay bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Savvy Juniors</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Join us for <span className="font-semibold text-primary animate-pulse-gentle">A Very British Tea Party</span> - 10am every weekday
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-orange-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl text-center group relative overflow-hidden"
                >
                  <span className="relative z-10">Book Your Visit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
                <a
                  href="https://maps.google.com/?q=Grandiose,Dubai+Sports+City,Dubai,UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:scale-105"
                >
                  View Location <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex gap-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="text-center group cursor-pointer">
                  <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 counter-animate">4k</p>
                  <p className="text-gray-600 text-sm group-hover:text-primary transition-colors">Video Class</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 counter-animate" style={{ animationDelay: '0.2s' }}>18k</p>
                  <p className="text-gray-600 text-sm group-hover:text-primary transition-colors">Total Student</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 counter-animate" style={{ animationDelay: '0.4s' }}>20+</p>
                  <p className="text-gray-600 text-sm group-hover:text-primary transition-colors">Complete Graduation</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
              <div className="relative h-96 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/home_image.jpg"
                  alt="Kids learning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - The Savvy Story */}
      <section className="min-h-screen flex items-center bg-primary text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              id="about-image"
              data-animate
              className={`relative transition-all duration-1000 transform ${isVisible['about-image'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl animate-pulse-gentle"></div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full animate-ping"></div>
              <img
                src="/newslet.jpg"
                alt="Savvy Juniors Early Childhood Centre"
                className="relative w-full rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1"
              />
            </div>

            <div
              id="about-content"
              data-animate
              className={`space-y-6 transition-all duration-1000 transform ${isVisible['about-content'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
            >
              <div>
                <p className="text-white/80 font-semibold text-sm mb-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  ABOUT US
                </p>
                <h2 className="text-4xl font-bold mb-6 animate-slide-in-left">
                  <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">The Savvy Story</span>
                </h2>
                {/* <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">The Savvy Story</span>
                </h2> */}
              </div>

              <div className="text-white/80 space-y-4 text-gray-600 leading-relaxed">
                <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Savvy Juniors Early Childhood Centre opened early 2026, bringing a fresh, research-led, and child-centred early years experience to families in the UAE. We welcome children from 45 days to 5 years, offering a warm, nurturing environment where every child is valued, understood, and celebrated.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  Our approach blends the British curriculum alongside Montessori approach, enriched by the latest insights in early childhood neuroscience. This ensures that children experience learning that is child-led, purposeful, and deeply connected to the way young brains naturally grow.
                </p>
                <p className="font-medium text-white/80 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                  At Savvy Juniors, childhood is honoured. Curiosity is encouraged. Independence is nurtured. And every milestone—big or small—is treasured.
                </p>
              </div>

              <Link
                to="/about"
                className="text-white/80 hover:text-black/80 font-semibold flex items-center gap-2 transition-all duration-300 inline-flex group animate-fade-in-up hover:gap-4"
                style={{ animationDelay: '1.2s' }}
              >
                More about us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-10 w-16 h-16 bg-primary/5 rounded-full animate-float-1"></div>
          <div className="absolute bottom-1/3 right-20 w-20 h-20 bg-accent/5 rounded-full animate-float-2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div
            id="programs-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 transform ${isVisible['programs-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">Our Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to nurture development at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              id="programs-content"
              data-animate
              className={`transition-all duration-1000 transform ${isVisible['programs-content'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
            >
              <h3 className="text-3xl font-bold text-primary mb-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Infant (2 weeks – 12 months)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                A gentle, nurturing start for the youngest learners. Our Infant Room is designed to feel like a second home—calm, secure, and responsive. Babies experience rich sensory play, early communication, movement exploration, and warm one-to-one interactions that build strong attachment and trust. We follow each baby's natural routine and create personalised care plans in partnership with families.
              </p>
              <Link
                to="/programs"
                className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-4 group animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                View All Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div
              id="programs-image"
              data-animate
              className={`transition-all duration-1000 transform ${isVisible['programs-image'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/programs_image.jpg"
                  alt="Our Programs"
                  className="relative w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="min-h-screen flex items-center bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full animate-float-slow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-gentle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              id="contact-content"
              data-animate
              className={`transition-all duration-1000 transform ${isVisible['contact-content'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
            >
              <h2 className="text-4xl font-bold mb-6 animate-slide-in-left">
                <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Contact/Concierge</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Ready to give your child the best start in life? Get in touch with our team to learn more about our programs, schedule a visit, or begin the enrollment process.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                  <span className="w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></span>
                  <span className="hover:text-accent transition-colors cursor-pointer">Phone: +971 58 580 0346</span>
                </div>
                <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                  <span className="w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></span>
                  <span className="hover:text-accent transition-colors cursor-pointer">Email: contact@savvyjuniors.ae</span>
                </div>
                <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                  <span className="w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></span>
                  <span className="hover:text-accent transition-colors cursor-pointer">Address: Grandiose, Dubai Sports City, Dubai, UAE</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block hover:scale-105 hover:shadow-xl group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: '1s' }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </div>
            <div
              id="contact-image"
              data-animate
              className={`transition-all duration-1000 transform ${isVisible['contact-image'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-white/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/contact_us_image.jpg"
                  alt="Contact Us"
                  className="relative w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-accent/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float-1"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float-2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              id="admission-image"
              data-animate
              className={`transition-all duration-1000 transform ${isVisible['admission-image'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
            >
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <img
                  src="/admission_image.jpg"
                  alt="Admission Onboarding"
                  className="relative w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
              </div>
            </div>
            <div
              id="admission-content"
              data-animate
              className={`transition-all duration-1000 transform ${isVisible['admission-content'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-in-right">
                <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">Admission Onboarding</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Join the Savvy Juniors family and give your child the best start in life. Our admission process is designed to ensure the best fit for your family and your child's unique needs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 animate-slide-in-right group cursor-pointer" style={{ animationDelay: '0.4s' }}>
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle group-hover:scale-125 transition-transform"></span>
                  <span className="text-gray-700 group-hover:text-primary transition-colors">Schedule a tour of our facilities</span>
                </div>
                <div className="flex items-center gap-3 animate-slide-in-right group cursor-pointer" style={{ animationDelay: '0.6s' }}>
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle group-hover:scale-125 transition-transform"></span>
                  <span className="text-gray-700 group-hover:text-primary transition-colors">Complete the application form</span>
                </div>
                <div className="flex items-center gap-3 animate-slide-in-right group cursor-pointer" style={{ animationDelay: '0.8s' }}>
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle group-hover:scale-125 transition-transform"></span>
                  <span className="text-gray-700 group-hover:text-primary transition-colors">Meet with our educational team</span>
                </div>
              </div>
              <Link
                to="/admissions"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block hover:scale-105 hover:shadow-xl group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: '1s' }}
              >
                <span className="relative z-10">Start Application</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm mb-3">OUR ACTIVITIES</p>
            <h2 className="text-4xl font-bold mb-4">Best Services For Kids</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              We provide comprehensive services designed to support your child's
              growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-purple-700/50 backdrop-blur p-8 rounded-2xl hover:bg-purple-700 transition-all transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-purple-100">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Classes Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm mb-3">
              POPULAR CLASSES
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Weekly Classes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {classes.map((classItem, index) => (
              <div
                key={classItem.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {classItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {classItem.description}
                  </p>
                  <div className="bg-primary text-white p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="font-bold">{classItem.age}</p>
                        <p className="text-xs text-purple-100">Age</p>
                      </div>
                      <div>
                        <p className="font-bold">{classItem.price}</p>
                        <p className="text-xs text-purple-100">Price</p>
                      </div>
                      <div>
                        <p className="font-bold">{classItem.seats}</p>
                        <p className="text-xs text-purple-100">Size</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-accent hover:bg-orange-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all">
              View all classes
            </button>
          </div>
        </div>
      </section> */}

      {/* Event Countdown Section */}
      {/* <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Event Schedule</h2>
            <p className="text-purple-100">Annual Class Party 2019</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  {timeLeft.days}
                </span>
              </div>
              <p className="font-semibold">Days</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  {timeLeft.hours}
                </span>
              </div>
              <p className="font-semibold">Hours</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  {timeLeft.minutes}
                </span>
              </div>
              <p className="font-semibold">Minutes</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  {timeLeft.seconds}
                </span>
              </div>
              <p className="font-semibold">Seconds</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-purple-100 mb-6">12/10/2019</p>
            <button className="bg-accent hover:bg-orange-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all">
              Join this event
            </button>
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm mb-3">
              LATEST BLOG POST
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Our Latest Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group hover:shadow-lg transition-shadow rounded-lg overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden bg-gray-200 rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {post.date} • {post.author}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-accent hover:text-orange-600 font-semibold flex items-center gap-2 transition-colors">
                    Read more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
          }
        }

        @keyframes float-4 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(-90deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes counter-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
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

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite;
        }

        .animate-float-4 {
          animation: float-4 9s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-text-reveal {
          animation: text-reveal 1s ease-out forwards;
          opacity: 0;
        }

        .animate-text-reveal-delay {
          animation: text-reveal 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .counter-animate {
          animation: counter-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        .floating-shape {
          will-change: transform;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
