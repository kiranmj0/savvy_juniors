import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your enquiry has been submitted successfully. We will contact you soon.');
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact/Concierge
            </h1>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Savvy Juniors Website
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-xl">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telephone Number</h3>
                    <a href="tel:+971585800346" className="text-gray-600 hover:text-primary hover:font-semibold transition-colors">
                      +971 58 580 0346
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <span className="text-primary text-xl mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <a
                      href="https://maps.google.com/?q=Grandiose,Dubai+Sports+City,Dubai,UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary hover:font-semibold transition-colors"
                    >
                      Grandiose, Dubai Sports City,<br />Dubai, UAE
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-xl">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@savvyjuniors.ae" className="text-gray-600 hover:text-primary hover:font-semibold transition-colors">
                      contact@savvyjuniors.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/971585800346"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-500 hover:font-semibold transition-colors"
                    >
                      +971 58 580 0346
                    </a>
                  </div>
                </div>

                {/* <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Join Newsletter</h3>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div> */}
              </div>
            </div>

            {/* Right Side Image and Enquiry Form */}
            <div className="space-y-8">
              {/* Image placeholder - add contact image if needed */}

              {/* <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enquiry Form</h2>

                {submitStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg mb-6 flex items-center gap-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;