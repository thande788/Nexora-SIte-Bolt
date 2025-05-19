import { ArrowRight, PieChart, Shield, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import CallToAction from '../../components/CallToAction';

const FinancialServices = () => {
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
              <span className="text-sm font-medium">Financial Services</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions for Financial Services
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Transform your financial institution with AI-powered solutions for risk management, compliance, and customer service.
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

      {/* Key Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Solutions"
            title="Comprehensive Financial Services Solutions"
            description="Our AI-powered solutions help financial institutions optimize operations, manage risk, and enhance customer experience."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                <PieChart size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Risk Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="text-primary-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">AI-powered risk assessment</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-primary-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Fraud detection systems</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-primary-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Market risk analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Shield size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Compliance & Reporting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="text-accent-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Automated compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Regulatory reporting</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Audit trail management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <Users size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Customer Experience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="text-green-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Personalized banking</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-green-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">AI-powered chatbots</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-green-600 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Customer analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Benefits"
            title="Transform Your Financial Institution"
            description="Our solutions deliver measurable improvements across key performance metrics."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <BarChart3 size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-primary-900 dark:text-white mb-2">40%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Risk Reduction</div>
              <p className="text-gray-600 dark:text-gray-300">
                Average reduction in risk exposure through AI-powered monitoring
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-4">
                <Shield size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-primary-900 dark:text-white mb-2">99%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Compliance Rate</div>
              <p className="text-gray-600 dark:text-gray-300">
                Maintain near-perfect compliance with automated monitoring
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Users size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-primary-900 dark:text-white mb-2">35%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Customer Satisfaction</div>
              <p className="text-gray-600 dark:text-gray-300">
                Improvement in customer satisfaction scores
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <BarChart3 size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-primary-900 dark:text-white mb-2">25%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Cost Reduction</div>
              <p className="text-gray-600 dark:text-gray-300">
                Average reduction in operational costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              pretitle="Success Story"
              title="Leading Bank Transformation"
              description="How we helped a major East African bank modernize their operations with AI."
              centered={true}
            />

            <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-medium">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Banking operations" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="font-heading text-2xl font-bold mb-2">40% Risk Reduction</div>
                  <p className="text-gray-200">Through AI-powered risk management</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">99.9%</div>
                    <div className="text-gray-600 dark:text-gray-300">Compliance Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">30%</div>
                    <div className="text-gray-600 dark:text-gray-300">Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">45%</div>
                    <div className="text-gray-600 dark:text-gray-300">Faster Processing</div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A leading East African bank partnered with us to modernize their operations. Our solutions helped them:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="text-primary-600 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Implement AI-powered risk management</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-primary-600 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Automate compliance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-primary-600 mt-1 mr-2" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">Enhance customer experience</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Link 
                    to="/case-studies/leading-bank" 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
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
        title="Ready to Transform Your Financial Institution?"
        description="Book a consultation to discuss how our AI solutions can help you optimize operations and reduce risk."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default FinancialServices;