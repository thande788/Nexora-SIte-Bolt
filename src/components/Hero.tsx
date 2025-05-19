import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-900/90 dark:bg-gray-900/90 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          filter: 'brightness(0.6)'
        }}
      ></div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-20 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400">
            <span className="text-sm font-medium">AI-Driven Business Solutions for Africa</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Bridging AI and Business for African Growth
          </h1>
          
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-lg">
            We empower organizations with smart, scalable, and locally tuned consulting solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn btn-accent text-lg flex items-center justify-center"
            >
              Book a Free Consultation
              <ChevronRight size={20} className="ml-1" />
            </Link>
            <Link 
              to="/solutions" 
              className="btn btn-secondary text-lg flex items-center justify-center"
            >
              Explore Our Solutions
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#features" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;