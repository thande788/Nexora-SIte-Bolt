import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Hexagon } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-800 shadow-medium py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/nexora.png"
              alt="Nexora Logo"
              className="h-10 w-auto mr-2 rounded-lg bg-white p-1 shadow"
            />
            <span className={`font-heading font-bold text-xl ${
              isScrolled 
                ? 'text-primary-900 dark:text-white' 
                : 'text-white'
            }`}>
              Nexora
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : isScrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400' : 'text-white hover:text-primary-100 dark:text-gray-200 dark:hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : isScrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400' : 'text-white hover:text-primary-100 dark:text-gray-200 dark:hover:text-primary-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/solutions" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/solutions' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : isScrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400' : 'text-white hover:text-primary-100 dark:text-gray-200 dark:hover:text-primary-400'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/why-nexora" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/why-nexora' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : isScrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400' : 'text-white hover:text-primary-100 dark:text-gray-200 dark:hover:text-primary-400'
              }`}
            >
              Why Nexora?
            </Link>
            <Link 
              to="/pricing" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/pricing' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : isScrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400' : 'text-white hover:text-primary-100 dark:text-gray-200 dark:hover:text-primary-400'
              }`}
            >
              Pricing
            </Link>
            <div 
              className="relative px-4 py-2" 
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  location.pathname.includes('/blog')
                    ? 'text-primary-600 dark:text-primary-400'
                    : isScrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400' : 'text-white hover:text-primary-100 dark:text-gray-200 dark:hover:text-primary-400'
                }`}
              >
                Blog
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute left-0 w-64 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    All Articles
                  </Link>
                  <Link
                    to="/blog/ai-for-smes"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    AI for SMEs
                  </Link>
                  <Link
                    to="/blog/compliance-automation"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Compliance Automation
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : isScrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400' : 'text-white hover:text-primary-100 dark:text-gray-200 dark:hover:text-primary-400'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="ml-4 btn btn-accent dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              Book Consultation
            </Link>
            <div className="ml-2">
              <DarkModeToggle />
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center"
            >
              {isOpen ? (
                <X className={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white dark:text-white'} size={24} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white dark:text-white'} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/'
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/about'
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/solutions"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/solutions'
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Solutions
            </Link>
            <Link
              to="/why-nexora"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/why-nexora'
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Why Nexora?
            </Link>
            <Link
              to="/pricing"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/pricing'
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname.includes('/blog')
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/contact'
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-3 mt-4 text-center rounded-md text-white bg-accent-500 dark:bg-primary-600 font-medium"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;