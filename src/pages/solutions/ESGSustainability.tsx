import { ArrowRight, Shield, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import CallToAction from '../../components/CallToAction';

const ESGSustainability = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/solutions" className="inline-flex items-center text-white mb-6 hover:text-accent-300 transition-colors">
              <ArrowRight size={16} className="mr-2 rotate-180" />
              Back to Solutions
            </Link>
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">ESG & Sustainability</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              ESG & Sustainability Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Meet your environmental, social, and governance goals with our AI-enabled sustainability platforms.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-accent dark:bg-primary-600 dark:hover:bg-primary-700 inline-flex items-center"
            >
              Schedule a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                pretitle="Overview"
                title="Sustainable Business Solutions"
                description="Our ESG and sustainability solutions help you track, improve, and report on your environmental and social impact while ensuring governance compliance."
              />
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Comprehensive ESG Tracking
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monitor and manage your environmental, social, and governance metrics in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Automated Reporting
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Generate comprehensive ESG reports that meet global standards and local requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Impact Measurement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Measure and optimize your environmental and social impact with data-driven insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="ESG & Sustainability" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-medium">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-green-600 dark:text-green-400">30%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Carbon Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">ESG Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Key Features"
            title="Comprehensive ESG Solutions"
            description="Our ESG and sustainability solutions provide all the tools you need to track, improve, and report on your environmental and social impact."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Carbon Footprint Tracking
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Real-time emissions monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Reduction planning tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Offset management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                ESG Reporting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Automated report generation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Global standards compliance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Customizable templates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Impact Analytics
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Performance tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Predictive insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Improvement recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Benefits"
            title="Drive Sustainable Growth"
            description="Our ESG solutions help you achieve your sustainability goals while creating business value."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Cost Savings
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reduce operational costs through improved resource efficiency.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Risk Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify and mitigate environmental and social risks early.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Stakeholder Trust
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build credibility with transparent ESG reporting.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Competitive Edge
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stand out with strong ESG performance and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              pretitle="Case Study"
              title="Success Story: GreenEnergy Ltd"
              description="How we helped a renewable energy company achieve their sustainability goals."
              centered={true}
            />

            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-medium">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/7691705/pexels-photo-7691705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="GreenEnergy facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="font-heading text-2xl font-bold mb-2">40% Carbon Reduction</div>
                  <p className="text-gray-200">Through comprehensive ESG tracking and optimization</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-green-600 dark:text-green-400 mb-1">100%</div>
                    <div className="text-gray-600 dark:text-gray-300">ESG Compliance</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-green-600 dark:text-green-400 mb-1">50%</div>
                    <div className="text-gray-600 dark:text-gray-300">Resource Savings</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-green-600 dark:text-green-400 mb-1">AAA</div>
                    <div className="text-gray-600 dark:text-gray-300">ESG Rating</div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    GreenEnergy Ltd wanted to improve their ESG performance and reporting. Our solutions helped them:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Implement comprehensive ESG tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Automate sustainability reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Achieve top ESG ratings</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Link 
                    to="/case-studies/green-energy" 
                    className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300"
                  >
                    Read Full Case Study
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Ready to Improve Your ESG Performance?"
        description="Book a consultation to discuss how we can help you achieve your sustainability goals."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default ESGSustainability;