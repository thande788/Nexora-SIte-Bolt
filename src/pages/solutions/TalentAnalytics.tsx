import { ArrowRight, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import CallToAction from '../../components/CallToAction';

const TalentAnalytics = () => {
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
              <span className="text-sm font-medium">Talent Analytics</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Talent Analytics
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Transform your HR operations with data-driven insights and AI-powered talent management solutions.
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
                title="Data-Driven HR Solutions"
                description="Our talent analytics solutions help you make better hiring decisions, develop your team effectively, and improve retention through AI-powered insights."
              />
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Smart Recruitment
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Use AI to identify the best candidates and streamline your hiring process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Performance Analytics
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Track and optimize employee performance with data-driven insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Retention Strategies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Predict and prevent turnover with AI-powered retention analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Talent Analytics" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-medium">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-purple-600 dark:text-purple-400">45%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Faster Hiring</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-purple-600 dark:text-purple-400">35%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Better Retention</div>
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
            title="Comprehensive HR Analytics"
            description="Our talent analytics solutions provide all the tools you need to optimize your HR operations."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Recruitment Analytics
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">AI-powered candidate screening</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Skills matching</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Pipeline analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Performance Tracking
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Goal tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Performance analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Retention Analysis
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Turnover prediction</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Engagement monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Retention strategies</span>
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
            title="Transform Your HR Operations"
            description="Our talent analytics solutions deliver measurable improvements across your organization."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Reduced Costs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lower recruitment and turnover costs through better hiring decisions.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Better Hires
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improve quality of hire with data-driven selection processes.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Higher Retention
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Increase employee retention through predictive analytics.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Enhanced Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Drive better team performance with data-driven insights.
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
              title="Success Story: Savannah Innovations"
              description="How we helped a fast-growing startup optimize their talent management."
              centered={true}
            />

            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-medium">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Savannah Innovations team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="font-heading text-2xl font-bold mb-2">45% Faster Hiring</div>
                  <p className="text-gray-200">With improved candidate matching and screening</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-purple-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">90%</div>
                    <div className="text-gray-600 dark:text-gray-300">Better Matches</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">35%</div>
                    <div className="text-gray-600 dark:text-gray-300">Lower Turnover</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">50%</div>
                    <div className="text-gray-600 dark:text-gray-300">Cost Reduction</div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Savannah Innovations needed to scale their team quickly while maintaining quality. Our solutions helped them:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-purple-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Implement AI-powered recruitment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-purple-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Optimize performance management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-purple-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Reduce turnover through predictive analytics</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Link 
                    to="/case-studies/savannah-innovations" 
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
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
        title="Ready to Transform Your HR Operations?"
        description="Book a consultation to discuss how we can help optimize your talent management with AI-powered analytics."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default TalentAnalytics;