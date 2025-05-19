import { ArrowRight, Check, PieChart, Shield, Users, BarChart3, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import CallToAction from '../../components/CallToAction';

const LeadingBank = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-blue dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/industries/financial-services" className="inline-flex items-center text-white mb-6 hover:text-accent-300 transition-colors">
              <ArrowRight size={16} className="mr-2 rotate-180" />
              Back to Financial Services
            </Link>
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Case Study</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Leading Bank's Digital Transformation Journey
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              How we helped a major East African bank modernize their operations with AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white dark:bg-gray-900 relative -mt-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 dark:text-primary-400">
                  <Shield size={24} />
                </div>
                <div className="font-heading text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">40%</div>
                <div className="text-gray-600 dark:text-gray-300">Risk Reduction</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-600 dark:text-accent-400">
                  <BarChart3 size={24} />
                </div>
                <div className="font-heading text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">30%</div>
                <div className="text-gray-600 dark:text-gray-300">Cost Savings</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                  <Clock size={24} />
                </div>
                <div className="font-heading text-3xl font-bold text-green-600 dark:text-green-400 mb-2">45%</div>
                <div className="text-gray-600 dark:text-gray-300">Faster Processing</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 dark:text-purple-400">
                  <Users size={24} />
                </div>
                <div className="font-heading text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">35%</div>
                <div className="text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* The Challenge */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400">
                  <Shield size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary-900 dark:text-white">The Challenge</h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                One of East Africa's leading banks faced significant challenges in modernizing their operations to meet evolving customer needs and regulatory requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">Key Challenges</h3>
                  <ul className="space-y-3">
                    {[
                      "Manual risk assessment processes leading to delays",
                      "High operational costs due to inefficient processes",
                      "Growing regulatory compliance requirements",
                      "Increasing customer demand for digital services",
                      "Legacy systems limiting innovation capabilities"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Banking operations" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm">Legacy banking operations before transformation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mr-4 text-accent-600 dark:text-accent-400">
                  <PieChart size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary-900 dark:text-white">Our Solution</h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We implemented a comprehensive digital transformation strategy focused on three key areas:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                    <Shield size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                    AI-Powered Risk Management
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Automated risk assessment systems",
                      "Real-time fraud detection",
                      "Predictive analytics for credit scoring",
                      "Market risk monitoring dashboard"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center mb-4 text-accent-600 dark:text-accent-400">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                    Process Automation
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "End-to-end loan processing automation",
                      "Automated compliance monitoring",
                      "Digital customer onboarding",
                      "Automated reporting systems"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                    <Users size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                    Customer Experience
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "AI-powered chatbot for service",
                      "Personalized recommendations",
                      "Digital self-service portal",
                      "Mobile banking optimization"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mr-4 text-green-600 dark:text-green-400">
                  <Clock size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary-900 dark:text-white">Implementation Process</h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                The transformation was executed in phases over 12 months:
              </p>

              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1: Assessment and Planning",
                    duration: "2 months",
                    items: [
                      "Comprehensive systems audit",
                      "Stakeholder interviews",
                      "Solution design and roadmap creation",
                      "Risk assessment and mitigation planning"
                    ]
                  },
                  {
                    phase: "Phase 2: Core Systems Implementation",
                    duration: "6 months",
                    items: [
                      "AI risk management system deployment",
                      "Process automation implementation",
                      "Staff training and change management",
                      "System integration and testing"
                    ]
                  },
                  {
                    phase: "Phase 3: Optimization and Scale",
                    duration: "4 months",
                    items: [
                      "Performance monitoring and optimization",
                      "Additional feature rollout",
                      "Customer feedback integration",
                      "System fine-tuning"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white">
                        {phase.phase}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mr-4 text-purple-600 dark:text-purple-400">
                  <BarChart3 size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary-900 dark:text-white">Results and Impact</h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                The transformation delivered significant measurable improvements across key metrics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                    Risk Management
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "40% reduction in risk exposure",
                      "75% faster risk assessment",
                      "90% accuracy in fraud detection",
                      "50% reduction in false positives"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                    Operational Efficiency
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "30% reduction in costs",
                      "45% faster processing",
                      "60% reduction in manual work",
                      "25% increase in productivity"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                    Customer Experience
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "35% higher satisfaction",
                      "50% faster response time",
                      "40% digital banking adoption",
                      "30% fewer complaints"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-primary-900 dark:bg-gray-800 rounded-xl p-8 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 dark:bg-gray-700 rounded-full -mr-32 -mt-32 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 dark:bg-gray-700 rounded-full -ml-32 -mb-32 opacity-50"></div>
              
              <div className="relative">
                <svg className="w-12 h-12 text-white/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-xl text-white mb-6">
                  "Nexora's AI solutions have transformed our operations, enabling us to serve our customers better while significantly reducing costs and risks. Their deep understanding of both banking technology and local market dynamics made them the perfect partner for our digital transformation journey."
                </p>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Chief Technology Officer</div>
                    <div className="text-white/80">Leading East African Bank</div>
                  </div>
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

export default LeadingBank;