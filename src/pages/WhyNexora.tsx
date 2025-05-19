import { ArrowRight, ExternalLink, BarChart3, BrainCircuit, Users, Lock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';

const WhyNexora = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-blue dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              What Sets Nexora Apart?
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Discover how our unique approach to AI-powered business consulting creates exceptional value for organizations across East Africa.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-accent dark:bg-primary-600 dark:hover:bg-primary-700 inline-flex items-center"
            >
              Start Your Journey
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Key Differentiators */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Differentiators"
            title="Why Leading Organizations Choose Nexora"
            description="Our approach combines global expertise with local insights, delivering solutions that are technologically advanced yet contextually appropriate."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
            <div className="bg-primary-50 dark:bg-gray-800 p-8 rounded-xl relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute top-0 left-0 w-full h-full bg-primary-100 dark:bg-gray-700 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <BrainCircuit size={32} />
                </div>
                
                <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                  Deep Local Expertise
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Unlike global consultancies that apply one-size-fits-all models, we understand the nuances of East African markets, regulations, and business practices. Our solutions account for local infrastructure challenges, payment systems, and cultural factors.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Team with extensive experience in local markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Solutions adapted to East African regulatory environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Data models trained on regional business data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Multilingual support for local languages</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-accent-50 dark:bg-gray-800 p-8 rounded-xl relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute top-0 left-0 w-full h-full bg-accent-100 dark:bg-gray-700 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mb-6 text-accent-600 dark:text-accent-400 group-hover:bg-accent-600 dark:group-hover:bg-accent-500 group-hover:text-white transition-colors">
                  <BrainCircuit size={32} />
                </div>
                
                <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                  AI That Makes Sense
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We demystify artificial intelligence, delivering solutions that are powerful yet understandable. Our AI tools provide clear explanations for their recommendations, building trust and enabling confident decision-making.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-600 dark:text-accent-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Explainable AI that shows reasoning behind recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 dark:text-accent-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Intuitive interfaces designed for non-technical users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 dark:text-accent-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Clear metrics that demonstrate business impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 dark:text-accent-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Comprehensive training and change management support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-gray-800 p-8 rounded-xl relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute top-0 left-0 w-full h-full bg-green-100 dark:bg-gray-700 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:bg-green-600 dark:group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Users size={32} />
                </div>
                
                <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                  People-Centered Approach
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We believe technology should enhance human capabilities, not replace them. Our solutions are designed to empower your team, augmenting their expertise with AI-driven insights while keeping people at the center of decision-making.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Solutions that augment rather than replace human judgment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Comprehensive change management and adoption support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Focus on digital upskilling and capacity building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Solutions adapted to local workforce contexts</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-gray-800 p-8 rounded-xl relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute top-0 left-0 w-full h-full bg-purple-100 dark:bg-gray-700 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <BarChart3 size={32} />
                </div>
                
                <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                  Measurable Business Impact
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We're focused on delivering tangible results, not just implementing technology. Every solution we create is designed with specific business outcomes in mind, and we track progress against clear metrics.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Clear KPIs established at project start</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Regular performance reporting and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">ROI-focused solution design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Continuous improvement methodology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mb-6">
                <span className="text-sm font-medium">Our Approach</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-6">
                We Focus on Your Business First, Technology Second
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Technology is a means to an end, not the end itself. We start by understanding your business objectives, challenges, and context before recommending any technology solution.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                This business-first approach ensures that our AI implementations directly address your most pressing needs and create maximum value, rather than deploying technology for its own sake.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white mr-4">1</div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-900 dark:text-white mb-1">Understand</h3>
                    <p className="text-gray-600 dark:text-gray-300">Deep dive into your business to identify needs and opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white mr-4">2</div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-900 dark:text-white mb-1">Design</h3>
                    <p className="text-gray-600 dark:text-gray-300">Create tailored solutions that align with your specific objectives</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white mr-4">3</div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-900 dark:text-white mb-1">Implement</h3>
                    <p className="text-gray-600 dark:text-gray-300">Deploy solutions with minimal disruption and maximum adoption</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white mr-4">4</div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-900 dark:text-white mb-1">Optimize</h3>
                    <p className="text-gray-600 dark:text-gray-300">Continuously refine and improve based on real-world performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                {/* Main image */}
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Nexora consulting approach" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Stats overlay */}
                <div className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-medium max-w-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary-50 dark:bg-primary-900/50 rounded-lg">
                      <div className="font-heading text-3xl font-bold text-primary-600 dark:text-primary-400">95%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-3 bg-accent-50 dark:bg-accent-900/50 rounded-lg">
                      <div className="font-heading text-3xl font-bold text-accent-600 dark:text-accent-400">98%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Client Retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CallToAction
        title="Ready to Experience the Nexora Difference?"
        description="Book a free consultation to discuss your business challenges and discover how our unique approach can transform your operations."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Solutions"
        secondaryButtonLink="/solutions"
        backgroundImage={true}
      />
    </div>
  );
};

export default WhyNexora;