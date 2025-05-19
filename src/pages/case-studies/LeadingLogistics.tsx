import { ArrowRight, Truck, Package, BarChart3, Clock, Shield, Globe2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import CallToAction from '../../components/CallToAction';

const LeadingLogistics = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/industries/logistics" className="inline-flex items-center text-white mb-6 hover:text-accent-300 transition-colors">
            <ArrowRight size={16} className="mr-2 rotate-180" />
            Back to Logistics Solutions
          </Link>
          
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Case Study</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Leading Logistics Provider's Digital Transformation
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              How we helped East Africa's largest logistics company optimize operations with AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                pretitle="Challenge"
                title="Complex Operations, Manual Processes"
                description="The company was struggling with inefficient route planning, manual tracking, and high operational costs across their extensive network."
              />
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Fleet Management Issues
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Manual route planning and vehicle tracking led to inefficient resource utilization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                    <Package size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      Delivery Delays
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lack of real-time tracking and optimization led to frequent delays and customer dissatisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-2">
                      High Operational Costs
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Inefficient processes resulted in excessive fuel consumption and maintenance costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Logistics operations" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-medium">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-accent-600 dark:text-accent-400">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Vehicles</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-accent-600 dark:text-accent-400">1000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Daily Deliveries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Solution"
            title="AI-Powered Logistics Optimization"
            description="We implemented a comprehensive digital transformation solution to optimize every aspect of their operations."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Truck size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Smart Route Optimization
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">AI-powered route planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Real-time traffic analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Dynamic scheduling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Real-Time Tracking
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">GPS integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Live status updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Predictive ETAs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-4">
                Fleet Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Predictive maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Fuel optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-accent-500 mt-1 mr-2" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Driver performance tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Results"
            title="Transformative Impact"
            description="The implementation of our solutions led to significant improvements across all key metrics."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Clock size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">25%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Faster Deliveries</div>
              <p className="text-gray-600 dark:text-gray-300">
                Reduction in average delivery times
              </p>
            </div>

            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <BarChart3 size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">30%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Cost Reduction</div>
              <p className="text-gray-600 dark:text-gray-300">
                Decrease in operational costs
              </p>
            </div>

            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Package size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">99%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">On-Time Delivery</div>
              <p className="text-gray-600 dark:text-gray-300">
                Improvement in delivery accuracy
              </p>
            </div>

            <div className="bg-accent-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Shield size={24} />
              </div>
              <div className="font-heading text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">40%</div>
              <div className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Customer Satisfaction</div>
              <p className="text-gray-600 dark:text-gray-300">
                Increase in satisfaction scores
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-primary-900 dark:bg-gray-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 dark:bg-gray-700 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 dark:bg-gray-700 rounded-full -ml-32 -mb-32 opacity-50"></div>
            
            <div className="relative z-10">
              <svg className="w-12 h-12 text-white/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <p className="text-xl text-white mb-6">
                "Nexora's AI solutions have revolutionized our operations. We've seen dramatic improvements in efficiency and customer satisfaction while significantly reducing costs. Their understanding of both logistics technology and local market dynamics made them the perfect partner for our digital transformation journey."
              </p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Truck className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white">Chief Operations Officer</div>
                  <div className="text-white/80">Leading East African Logistics Provider</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Ready to Transform Your Logistics Operations?"
        description="Book a consultation to discuss how our AI solutions can help you optimize your logistics and delivery operations."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default LeadingLogistics;