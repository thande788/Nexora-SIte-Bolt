import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, CheckCircle, User, Building, MessageSquare } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  interface ContactFormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: ContactFormEvent): void => {
    e.preventDefault();
    // In a real app, you would handle form submission here

    // Simulate form submission success
    setFormSubmitted(true);

    // Reset form fields if needed
  };
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Reach out to discuss how we can help you harness the power of AI for your business growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-900 relative -mt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-medium overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Contact Information */}
              <div className="lg:col-span-2 bg-primary-900 dark:bg-gray-700 p-8 lg:p-12 text-white relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-800 dark:bg-gray-600 rounded-full -mr-20 -mt-20 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-800 dark:bg-gray-600 rounded-full -ml-12 -mb-12 opacity-50"></div>
                
                <div className="relative z-10">
                  <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-gray-300 mb-8">
                    Fill out the form or contact us directly using the information below.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <MapPin className="text-accent-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-white mb-1">Our Office</h3>
                        <p className="text-gray-300">
                          Kilimani Business Center, 3rd Floor<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <Phone className="text-accent-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-white mb-1">Phone</h3>
                        <p className="text-gray-300">
                          +254 724 442 180<br />
                          +254 717 550 482
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <Mail className="text-accent-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-white mb-1">Email</h3>
                        <p className="text-gray-300">
                          info@nexora.africa<br />
                          support@nexora.africa
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-white mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                      <CheckCircle size={32} />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary-900 dark:text-white mb-4">
                      Thank You for Reaching Out!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                      We've received your message and will get back to you within 24 hours. In the meantime, feel free to explore our solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to="/solutions" 
                        className="btn btn-primary dark:bg-primary-600 dark:hover:bg-primary-700"
                      >
                        Explore Solutions
                      </Link>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="btn btn-secondary dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-primary-900 dark:text-white mb-6">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      Let us know how we can help you. We'll get back to you within 24 hours.
                    </p>
                    
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden">
                        <label>
                          Don’t fill this out: <input name="bot-field" />
                        </label>
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2" htmlFor="name">
                            Your Name*
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 py-3 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                        </div>
                        
                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">
                            Email Address*
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 py-3 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>
                        
                        {/* Company */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2" htmlFor="company">
                            Company Name
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Building className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 py-3 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="Your Company"
                            />
                          </div>
                        </div>
                        
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2" htmlFor="phone">
                            Phone Number
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 py-3 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="+254 7XX XXX XXX"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2" htmlFor="subject">
                          Subject*
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 py-3 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2" htmlFor="message">
                          Message*
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 py-3 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Please describe how we can assist you..."
                            required
                          ></textarea>
                        </div>
                      </div>
                      
                      {/* Privacy Policy */}
                      <div className="flex items-start">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-primary-600 focus:ring-primary-500 mt-1"
                          required
                        />
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600 dark:text-gray-300">
                          I agree to the{" "}
                          <Link to="/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
                            Privacy Policy
                          </Link>{" "}
                          and consent to being contacted regarding my inquiry.
                        </label>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className="w-full md:w-auto btn btn-primary dark:bg-primary-600 dark:hover:bg-primary-700 py-3 px-6 text-base"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map & Office Hours */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Visit Us"
            title="Our Office Location"
            description="We'd love to meet you in person at our Nairobi headquarters."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 rounded-xl overflow-hidden shadow-soft h-96">
              {/* In a real application, you would use an actual map component */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.254896198448!2d36.76962324957024!3d-1.2966841936333262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a6a08def89%3A0xe191ac93c4c9f57f!2sKilimani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1623252342745!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Nexora Consulting Office Location"
              ></iframe>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-soft border border-gray-100 dark:border-gray-600 h-full">
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                  Office Hours
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <div className="font-medium text-gray-900 dark:text-white">Monday - Friday</div>
                    <div className="text-gray-600 dark:text-gray-300">8:00 AM - 6:00 PM</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-medium text-gray-900 dark:text-white">Saturday</div>
                    <div className="text-gray-600 dark:text-gray-300">9:00 AM - 2:00 PM</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-medium text-gray-900 dark:text-white">Sunday</div>
                    <div className="text-gray-600 dark:text-gray-300">Closed</div>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                  Getting Here
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white mb-1">By Car</div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Parking is available in the basement of the Kilimani Business Center. Validation is available for clients.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white mb-1">By Public Transport</div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Several matatu routes stop within a 5-minute walk of our office. The nearest stop is Kilimani Road Junction.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="https://goo.gl/maps/2yZ9z7L8D9Q2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300"
                  >
                    Get Directions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-primary-900 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-8">
              Stay updated with the latest insights, case studies, and news on AI and business in East Africa.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <button className="btn btn-accent dark:bg-primary-600 dark:hover:bg-primary-700 py-3">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CallToAction
        title="Ready to Transform Your Business with AI-Powered Solutions?"
        description="Book a free consultation to discover how Nexora can help you optimize operations, improve decision-making, and drive sustainable growth."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default Contact;