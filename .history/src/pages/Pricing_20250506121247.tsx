import { Check, Shield, Clock, BarChart3, PieChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';
import CallToAction from '../components/CallToAction';

const Pricing = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Transparent Pricing</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Plans for Every Business Stage
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              From startups to established enterprises, we offer tailored pricing options to match your business needs and growth trajectory.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative -mt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Freemium Plan */}
            <PricingCard
              title="Freemium"
              description="Basic tools for startups and small businesses just beginning their AI journey."
              price="Free"
              period="forever"
              features={[
                { text: "Basic financial dashboard", included: true },
                { text: "Limited data processing (up to 1,000 transactions/month)", included: true },
                { text: "Community support", included: true },
                { text: "Basic reporting", included: true },
                { text: "Email support", included: false },
                { text: "AI-powered insights", included: false },
                { text: "Compliance automation", included: false },
                { text: "Custom integrations", included: false },
              ]}
              ctaText="Get Started Free"
              color="primary"
            />
            
            {/* Silver Plan */}
            <PricingCard
              title="Silver"
              description="Essential tools for growing businesses ready to leverage AI for efficiency."
              price="KSh 25,000"
              period="month"
              features={[
                { text: "Advanced financial dashboard", included: true },
                { text: "Medium data processing (up to 10,000 transactions/month)", included: true },
                { text: "Community support", included: true },
                { text: "Advanced reporting & analytics", included: true },
                { text: "Email & phone support", included: true },
                { text: "Basic AI-powered insights", included: true },
                { text: "Basic compliance automation", included: false },
                { text: "Custom integrations", included: false },
              ]}
              ctaText="Choose Silver"
              color="primary"
            />
            
            {/* Gold Plan */}
            <PricingCard
              title="Gold"
              description="Comprehensive solutions for established businesses seeking transformation."
              price="KSh 65,000"
              period="month"
              features={[
                { text: "Complete financial suite", included: true },
                { text: "High data processing (up to 50,000 transactions/month)", included: true },
                { text: "Priority support", included: true },
                { text: "Custom reporting & analytics", included: true },
                { text: "Dedicated account manager", included: true },
                { text: "Advanced AI-powered insights", included: true },
                { text: "Full compliance automation", included: true },
                { text: "2 custom integrations", included: true },
              ]}
              ctaText="Choose Gold"
              color="accent"
              isPopular={true}
            />
            
            {/* Diamond Plan */}
            <PricingCard
              title="Diamond"
              description="Enterprise-grade solutions for large organizations with complex needs."
              price="KSh 150,000"
              period="month"
              features={[
                { text: "Enterprise financial suite", included: true },
                { text: "Unlimited data processing", included: true },
                { text: "24/7 priority support", included: true },
                { text: "Custom reporting & analytics", included: true },
                { text: "Dedicated success team", included: true },
                { text: "Full AI capabilities", included: true },
                { text: "Advanced compliance automation", included: true },
                { text: "Unlimited custom integrations", included: true },
              ]}
              ctaText="Choose Diamond"
              color="primary"
            />
          </div>
          
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-gray-700 dark:text-gray-300">
              All plans include our core platform features. Need a custom solution?
            </p>
            <Link to="/contact" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center mt-2">
              Contact us for custom pricing
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Add-on Modules */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Add-On Modules"
            title="Customize Your Solution"
            description="Enhance your plan with specialized modules to address your specific business needs."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Financial Forecasting */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-600 hover:shadow-medium transition-all">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                <PieChart size={28} />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                Advanced Financial Forecasting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AI-powered financial forecasting with scenario planning and risk analysis.
              </p>
              <div className="mb-6">
                <div className="font-heading text-2xl font-bold text-primary-900 dark:text-white">
                  KSh 15,000
                  <span className="text-gray-500 dark:text-gray-400 text-base font-normal ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">AI-driven financial projections</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Custom scenario planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Risk assessment models</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full text-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Add to Your Plan
              </Link>
            </div>
            
            {/* Operations Excellence */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-600 hover:shadow-medium transition-all">
              <div className="w-14 h-14 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mb-6 text-accent-600 dark:text-accent-400">
                <BarChart3 size={28} />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                Operations Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive tools for process optimization, workflow automation, and operational analytics.
              </p>
              <div className="mb-6">
                <div className="font-heading text-2xl font-bold text-primary-900 dark:text-white">
                  KSh 20,000
                  <span className="text-gray-500 dark:text-gray-400 text-base font-normal ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Process mining tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Workflow automation builder</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Operational KPI dashboards</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full text-center py-2 px-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
              >
                Add to Your Plan
              </Link>
            </div>
            
            {/* ESG & Carbon Tracking */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-600 hover:shadow-medium transition-all">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <Shield size={28} />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                ESG & Carbon Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Automated sustainability reporting, carbon footprint tracking, and ESG compliance tools.
              </p>
              <div className="mb-6">
                <div className="font-heading text-2xl font-bold text-primary-900 dark:text-white">
                  KSh 18,000
                  <span className="text-gray-500 dark:text-gray-400 text-base font-normal ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Carbon footprint calculator</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">ESG reporting templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 flex-shrink-0 mt-1 mr-2" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">Sustainability improvement tools</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                Add to Your Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="FAQ"
            title="Common Questions"
            description="Get answers to frequently asked questions about our plans, pricing, and billing."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-3">
                Can I upgrade or downgrade my plan at any time?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, you can upgrade your plan at any time, and the changes will take effect immediately. Downgrading is available at the end of your current billing cycle. We'll prorate charges when you upgrade mid-cycle.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-3">
                Do you offer discounts for annual payment?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, we offer a 15% discount when you choose annual billing for any of our paid plans. This option is available during signup or can be changed in your account settings.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-3">
                Is there a setup fee or long-term contract?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                There are no setup fees for our standard plans. We operate on a month-to-month basis with no long-term contracts required for Silver and Gold plans. Diamond plans typically have a minimum 6-month commitment.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We accept all major credit cards, mobile money payments (M-Pesa, Airtel Money), and bank transfers. For enterprise clients, we also offer invoice-based billing with net-30 terms.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-3">
                Is my data secure with the Freemium plan?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, we maintain the same high security standards across all plans. Your data is always encrypted, securely stored, and never sold or shared with third parties. Our security measures comply with industry standards regardless of your plan level.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CallToAction
        title="Not Sure Which Plan Is Right for You?"
        description="Book a free consultation with our team to discuss your needs and get personalized recommendations."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        backgroundImage={false}
      />
    </div>
  );
};

export default Pricing;