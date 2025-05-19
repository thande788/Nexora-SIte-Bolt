import { ArrowRight, BarChart3, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import CallToAction from '../../components/CallToAction';

const OperationsConsulting = () => {
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
              <span className="text-sm font-medium">Operations Consulting</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Operations with AI-Powered Insights
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Streamline workflows, reduce inefficiencies, and embrace digital transformation with our comprehensive operations consulting services.
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
                title="Optimize Every Aspect of Your Business Operations"
                description="Our operations consulting services combine traditional business expertise with cutting-edge AI technology to help you achieve operational excellence."
              />
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Data-Driven Decision Making
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transform raw data into actionable insights that drive strategic decision-making and operational improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Process Optimization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Identify and eliminate bottlenecks, streamline workflows, and implement efficient operational processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Digital Transformation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Guide your organization through digital transformation with a clear roadmap and implementation support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Operations consulting" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-medium">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-accent-600 dark:text-accent-400">25%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Average Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-accent-600 dark:text-accent-400">40%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Efficiency Increase</div>
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
            title="Comprehensive Operations Solutions"
            description="Our operations consulting services cover every aspect of your business operations, from process optimization to digital transformation."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Process Mining & Analysis
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Automated process discovery</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Bottleneck identification</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Performance analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Workflow Automation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Custom automation solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Automated reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Performance Monitoring
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Real-time KPI tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Custom dashboards</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Predictive analytics</span>
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
            title="Transform Your Business Operations"
            description="Our operations consulting services deliver measurable improvements across your organization."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Cost Reduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify and eliminate inefficiencies to reduce operational costs by up to 25%.
              </p>
            </div>

            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Improved Efficiency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamline processes to increase operational efficiency by up to 40%.
              </p>
            </div>

            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Better Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implement quality control measures that reduce errors by up to 60%.
              </p>
            </div>

            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Scalable Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build operations that can scale efficiently with your business growth.
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
              title="Success Story: EastAfrica Manufacturing Ltd"
              description="How we helped a leading manufacturer optimize their operations and achieve remarkable results."
              centered={true}
            />

            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-medium">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Manufacturing facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="font-heading text-2xl font-bold mb-2">22% Productivity Increase</div>
                  <p className="text-gray-200">Through process optimization and workflow automation</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-accent-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-accent-600 dark:text-accent-400 mb-1">35%</div>
                    <div className="text-gray-600 dark:text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-accent-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-accent-600 dark:text-accent-400 mb-1">50%</div>
                    <div className="text-gray-600 dark:text-gray-300">Faster Processing</div>
                  </div>
                  <div className="text-center p-4 bg-accent-50 dark:bg-gray-800 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-accent-600 dark:text-accent-400 mb-1">90%</div>
                    <div className="text-gray-600 dark:text-gray-300">Error Reduction</div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    EastAfrica Manufacturing Ltd faced challenges with inefficient processes and high operational costs. Through our comprehensive operations consulting services, we helped them:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-accent-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Implement automated quality control systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-accent-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Optimize production line workflows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-accent-500 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Integrate real-time performance monitoring</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Link 
                    to="/case-studies/eastafrica-manufacturing" 
                    className="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium hover:text-accent-700 dark:hover:text-accent-300"
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
        title="Ready to Transform Your Operations?"
        description="Book a consultation to discuss how we can help optimize your business operations and drive sustainable growth."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default OperationsConsulting;