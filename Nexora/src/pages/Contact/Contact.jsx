import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Clock, Send, ArrowRight, Globe, Users, 
  Award, CheckCircle, Calendar, MessageSquare 
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    // Add your Web3Forms access key
    form.append("access_key", "149cd287-f068-4ba4-b7d7-875a095b6d3a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        budget: ''
      });
    } else {
      console.error("Error", data);
      setResult(data.message || "Something went wrong ❌");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "nexora.website@gmail.com",
      secondary: "Quick response within 2 hours",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 6291737343 ",
      secondary2: "+91 6290565044",
      tertiary3: "+91 9330845336",
      secondary: "Everyday, 9AM-9PM EST",
      color: "purple"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Virtual Office",
      secondary: "Kolkata, West Bengal",
      color: "pink"
    },
    {
      icon: Clock,
      title: "Working Hours",
      primary: "Monday - Friday",
      secondary: "9:00 AM - 6:00 PM EST",
      color: "indigo"
    }
  ];

  const services = [
    "Custom Website",
    "Mobile App Development", 
    "Business Website",
    "Maintenance & Support",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Website Redesign",
    "E-commerce Website",
    "Poster Design"
  ];

  return (
    <div className="min-h-screen bg-black relative pt-6">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-900/4 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/5 to-transparent"></div>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Create Something
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Extraordinary</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your digital presence? Get in touch with our team of experts 
              and let's discuss how we can bring your vision to life.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 text-pink-400 mr-3" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                  <h2 className="text-3xl font-bold text-white mb-6">Tell Us About Your Project</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="subject" value="New User from Nexora" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${
                            focusedField === 'name' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-600'
                          }`}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${
                            focusedField === 'email' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-600'
                          }`}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${
                            focusedField === 'company' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-600'
                          }`}
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Service Needed *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white transition-all duration-300 ${
                            focusedField === 'service' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-600'
                          }`}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows="6"
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 resize-none ${
                          focusedField === 'message' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-600'
                        }`}
                        placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl"
                    >
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </button>
                  </form>

                  {/* Show result message */}
                  {result && (
                    <p className="text-center text-sm mt-4 text-gray-300">{result}</p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 transition-all duration-300 cursor-pointer ${
                      hoveredCard === index ? 'border-blue-500/50 bg-gray-800/50 transform scale-[1.02]' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${info.color}-500 to-${info.color}-600 rounded-lg flex items-center justify-center mr-4 transition-transform duration-300 ${
                        hoveredCard === index ? 'scale-110' : ''
                      }`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">{info.title}</h3>
                        <p className="text-white/90 font-medium mb-1">{info.primary}</p>
                        <p className="text-white/90 font-medium mb-1">{info.secondary2}</p>
                        <p className="text-white/90 font-medium mb-1">{info.tertiary3}</p>
                        <p className="text-gray-400 text-sm">{info.secondary}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick Actions */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
                  <h3 className="text-white font-semibold text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 rounded-lg text-white hover:bg-gray-700/50 transition-colors duration-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-3 text-blue-400" />
                        Schedule a Call
                      </div>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 rounded-lg text-white hover:bg-gray-700/50 transition-colors duration-300">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-3 text-purple-400" />
                        Live Chat
                      </div>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <h3 className="text-white font-semibold">Quick Response Guaranteed</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We typically respond to all inquiries within 2 hours during business hours. 
                    For urgent matters, call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Most projects take 4-12 weeks depending on complexity. We'll provide a detailed timeline during our consultation."
                },
                {
                  question: "Do you offer ongoing support?",
                  answer: "Yes! We provide 24/7 support and maintenance packages to keep your website running smoothly."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely. We love collaborating with internal teams and can integrate seamlessly with your workflow."
                },
                {
                  question: "What technologies do you use?",
                  answer: "We use cutting-edge technologies including React, Node.js, Python, and cloud platforms like AWS and Azure."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/30 text-left">
                  <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
