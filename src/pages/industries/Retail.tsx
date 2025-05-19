import { ArrowRight, ShoppingCart, TrendingUp, Users, Truck, BarChart3, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import CallToAction from '../../components/CallToAction';

const Retail = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-blue dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Industry Solutions</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions for Retail & E-commerce
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Transform your retail operations with AI-powered insights, automation, and customer experience optimization.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-accent dark:bg-primary-600 dark:hover:bg-primary-700 inline-flex items-center"
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Industry Challenges"
            title="Common Challenges in Retail"
            description="Modern retailers face complex challenges in an evolving market landscape. Our AI solutions address these key pain points."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                Demand Forecasting
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accurately predicting demand across multiple channels and locations while managing inventory efficiently.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                Customer Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering personalized experiences across channels while maintaining consistency and quality.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                <Truck size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                Supply Chain Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Managing complex supply chains with multiple vendors, warehouses, and delivery channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Solutions"
            title="AI-Powered Retail Solutions"
            description="Comprehensive solutions designed specifically for retail and e-commerce businesses."
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                <ShoppingCart size={28} />
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                Smart Inventory Management
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AI-driven inventory optimization that predicts demand, reduces stockouts, and minimizes excess inventory.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Automated reordering based on ML predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Real-time inventory tracking across locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Seasonal demand forecasting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
                <Users size={28} />
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                Customer Analytics & Personalization
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Deep customer insights and personalization engines that drive engagement and sales.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Customer segmentation and targeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Personalized product recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Customer lifetime value prediction</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <BarChart3 size={28} />
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                Price Optimization
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Dynamic pricing strategies that maximize margins while maintaining competitiveness.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Competitive price monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Demand-based pricing adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Promotion effectiveness analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Shield size={28} />
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-4">
                Fraud Detection & Security
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Advanced fraud prevention and security measures to protect your business and customers.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Real-time transaction monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Pattern-based fraud detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Automated security responses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Success Stories"
            title="Retail Success Stories"
            description="See how leading retailers have transformed their operations with our AI solutions."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Retail success story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Leading Supermarket Chain
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Reduced inventory costs by 25% while improving product availability to 98% using our AI-powered inventory management system.
                </p>
                <Link 
                  to="/case-studies/supermarket-chain" 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center"
                >
                  Read Case Study
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="E-commerce success story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Fast-Growing E-commerce Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Increased customer retention by 40% through personalized recommendations and improved customer experience.
                </p>
                <Link 
                  to="/case-studies/ecommerce-platform" 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center"
                >
                  Read Case Study
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Fashion retail success story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Fashion Retail Chain
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Optimized pricing strategies led to a 15% increase in margins while maintaining competitive market position.
                </p>
                <Link 
                  to="/case-studies/fashion-retail" 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center"
                >
                  Read Case Study
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary-900 dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionTitle
            pretitle="Benefits"
            title="Why Choose Our Retail Solutions"
            description="Our AI solutions deliver measurable results across key retail performance metrics."
            centered={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">25%</div>
              <div className="text-xl font-semibold text-white mb-2">Reduced Costs</div>
              <p className="text-gray-300">
                Average reduction in inventory carrying costs through optimized stock levels
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-xl font-semibold text-white mb-2">Higher Engagement</div>
              <p className="text-gray-300">
                Increase in customer engagement through personalized experiences
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">15%</div>
              <div className="text-xl font-semibold text-white mb-2">Better Margins</div>
              <p className="text-gray-300">
                Average improvement in profit margins through dynamic pricing
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-xl font-semibold text-white mb-2">Availability</div>
              <p className="text-gray-300">
                Average product availability rate with our inventory management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Ready to Transform Your Retail Business?"
        description="Book a consultation to discuss how our AI solutions can help you optimize operations and drive growth."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonLink="/pricing"
        backgroundImage={true}
      />
    </div>
  );
};

export default Retail;