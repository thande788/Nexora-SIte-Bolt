import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 dark:bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center mr-2">
                <span className="text-primary-900 font-bold text-lg">N</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Nexora</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nexora Consulting Limited bridges the gap between AI-powered solutions 
              and traditional business advisory, helping African enterprises achieve 
              sustainable growth in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-accent-400 mt-1 mr-3" size={18} />
                <p className="text-gray-300">
                  Ikigai, Lower Kabete<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="text-accent-400 mr-3" size={18} />
                <p className="text-gray-300">+254 724 442 180</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent-400 mr-3" size={18} />
                <p className="text-gray-300">info@nexora.africa</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Solutions
                </Link>
              </li>
              <li>
                <Link to="/why-nexora" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Why Nexora?
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-5">Our Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> AI-Powered Financial Advisory
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Operations Consulting
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> ESG & Sustainability Tools
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-accent-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Talent Analytics & HR
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-heading font-semibold text-white text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-800 dark:bg-gray-700 flex items-center justify-center hover:bg-accent-500 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-800 dark:bg-gray-700 flex items-center justify-center hover:bg-accent-500 transition-colors"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-800 dark:bg-gray-700 flex items-center justify-center hover:bg-accent-500 transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-800 dark:bg-gray-700 flex items-center justify-center hover:bg-accent-500 transition-colors"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-5">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive the latest news and insights on AI for business in East Africa.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-primary-800 dark:bg-gray-700 text-white placeholder-gray-400 border border-primary-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-800 dark:border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Nexora Consulting Ltd. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;