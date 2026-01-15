import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, AlertCircle, X } from "lucide-react";
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
  const [showSendOptions, setShowSendOptions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }
    setShowSendOptions(true);
  };

  const handleNormalSubmit = () => {
    const message = `New Enquiry from Savvy Juniors Website

Name: ${formData.name}
Email: ${formData.email}${formData.phone ? `
Phone: ${formData.phone}` : ''}
Subject: ${formData.subject}

Message:
${formData.message}`;
    const smsUrl = `sms:+971585708135?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
    setShowSendOptions(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitStatus('success');
    setStatusMessage('SMS app opened successfully! Please send the message from your SMS application.');
  };

  const handleWhatsAppSend = () => {
    const message = `🌟 *New Enquiry from Savvy Juniors Website* 🌟

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}${formData.phone ? `
📱 *Phone:* ${formData.phone}` : ''}
📝 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
_Sent via Savvy Juniors Contact Form_`;
    const whatsappUrl = `https://wa.me/971585708135?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowSendOptions(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitStatus('success');
    setStatusMessage('Message sent via WhatsApp successfully!');
  };

  const handleEmailSend = () => {
    const subject = `New Enquiry: ${formData.subject} - Savvy Juniors`;
    const body = `Dear Savvy Juniors Team,

I hope this email finds you well. I am writing to enquire about your services.

--- CONTACT DETAILS ---
Name: ${formData.name}
Email: ${formData.email}${formData.phone ? `
Phone: ${formData.phone}` : ''}

--- ENQUIRY DETAILS ---
Subject: ${formData.subject}

Message:
${formData.message}

--- 
I look forward to hearing from you soon.

Best regards,
${formData.name}

---
This enquiry was sent via the Savvy Juniors website contact form.`;
    const mailtoUrl = `mailto:savvyjuniors.ae@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setShowSendOptions(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitStatus('success');
    setStatusMessage('Email client opened successfully! Please send the email from your email application.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen from-secondary/5 to-primary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent whitespace-nowrap">Contact</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for any inquiries or support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 bg-gradient-to-br from-white/80 to-primary/5 p-6 rounded-xl shadow-lg border border-primary/20 backdrop-blur-sm">
              {/* <h2 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h2> */}
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-white/60 p-4 rounded-lg border border-primary/30 hover:bg-white/80 hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">Phone</h3>
                        <a href="tel:+971585708135" className="text-sm text-gray-700 hover:text-primary font-medium transition-colors">
                          +971585708135
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 p-4 rounded-lg border border-primary/30 hover:bg-white/80 hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">Address</h3>
                        <a
                          href="https://maps.app.goo.gl/U27fcS7pT5nN1taT9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-700 hover:text-primary font-medium transition-colors"
                        >
                          Grandiose, Dubai Sports Village, Dubai Sports City,<br />Dubai, UAE
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 p-4 rounded-lg border border-primary/30 hover:bg-white/80 hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">Email</h3>
                        <a href="mailto:savvyjuniors.ae@gmail.com" className="text-sm text-gray-700 hover:text-primary font-medium transition-colors">
                          savvyjuniors.ae@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 p-4 rounded-lg border border-primary/30 hover:bg-white/80 hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">WhatsApp</h3>
                        <a
                          href="https://wa.me/971585708135"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-700 hover:text-green-600 font-medium transition-colors"
                        >
                          +971585708135
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-auto pt-4">
                  <div className="bg-white/40 p-4 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-gray-900 text-base mb-2">Business Hours</h3>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right Side Enquiry Form */}
            <div className="lg:col-span-3 bg-gradient-to-br from-white/80 to-primary/5 p-6 rounded-xl shadow-lg border border-primary/20 backdrop-blur-sm">
              {/* <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">Send us a Message</span>
                </h2>
                <p className="text-sm text-gray-700">We'll get back to you as soon as possible</p>
              </div> */}

              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-lg mb-6 flex items-center gap-3 ${submitStatus === 'success'
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none text-sm"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary disabled:from-primary/50 disabled:to-primary/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Send Options Popup */}
      {showSendOptions && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl p-4 sm:p-8 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="flex-1 pr-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Choose Send Method</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">How would you like to send your message?</p>
              </div>
              <button
                onClick={() => setShowSendOptions(false)}
                className="text-gray-400 hover:text-gray-600 p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handleWhatsAppSend}
                className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-5 border-2 border-green-200 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-200 group hover:shadow-md active:scale-95"
              >
                <div className="bg-green-100 p-2 sm:p-3 rounded-full group-hover:bg-green-200 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-base sm:text-lg truncate">Send via WhatsApp</div>
                  <div className="text-xs sm:text-sm text-gray-600">Instant message with pre-filled details</div>
                </div>
                <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  →
                </div>
              </button>

              <button
                onClick={handleEmailSend}
                className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-5 border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group hover:shadow-md active:scale-95"
              >
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-base sm:text-lg truncate">Send via Email</div>
                  <div className="text-xs sm:text-sm text-gray-600">Open your default email client</div>
                </div>
                <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  →
                </div>
              </button>

              <button
                onClick={handleNormalSubmit}
                className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-5 border-2 border-primary/30 rounded-xl hover:bg-primary/5 hover:border-primary/50 transition-all duration-200 group hover:shadow-md active:scale-95"
              >
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MessageSquare className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-base sm:text-lg truncate">Send Normal Message</div>
                  <div className="text-xs sm:text-sm text-gray-600">Submit your message directly</div>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  →
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;