import { ArrowRight, PieChart, BarChart3, Shield, Users, Building2, Stethoscope, ShoppingCart, Factory, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';

const Solutions = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Business Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Comprehensive business advisory services enhanced by cutting-edge AI technology,
              tailored for the unique needs of East African enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Solutions"
            title="Transform Your Business"
            description="Our comprehensive suite of services combines deep business expertise with cutting-edge AI technology to address your most pressing challenges."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ServiceCard
              icon={<PieChart size={28} />}
              title="AI-Powered Financial Advisory"
              description="Automate bookkeeping, forecasting, and compliance reporting. Our AI systems analyze your financials to identify patterns and opportunities for growth and cost-savings."
              link="/solutions/financial-advisory"
              color="primary"
              features={[
                "Automated bookkeeping & reconciliation",
                "AI-powered financial forecasting",
                "Real-time financial monitoring",
                "Compliance automation"
              ]}
              benefits={[
                "Reduce manual accounting work by 70%",
                "Improve forecasting accuracy by 40%",
                "Ensure regulatory compliance",
                "Make data-driven decisions"
              ]}
            />

            <ServiceCard
              icon={<BarChart3 size={28} />}
              title="Operations Consulting"
              description="Streamline workflows, reduce inefficiencies, and adopt digital transformation. Our team identifies bottlenecks and implements robust solutions."
              link="/solutions/operations-consulting"
              color="accent"
              features={[
                "Process mining & optimization",
                "Workflow automation",
                "Digital transformation roadmap",
                "Performance analytics"
              ]}
              benefits={[
                "Increase operational efficiency by 25%",
                "Reduce process cycle times by 40%",
                "Lower operational costs",
                "Enable data-driven operations"
              ]}
            />

            <ServiceCard
              icon={<Shield size={28} />}
              title="ESG & Sustainability Tools"
              description="Meet sustainability goals with our AI-enabled tracking platforms. Monitor and improve your environmental impact while ensuring compliance."
              link="/solutions/esg-sustainability"
              color="green"
              features={[
                "Carbon footprint tracking",
                "ESG compliance monitoring",
                "Sustainability reporting",
                "Impact measurement"
              ]}
              benefits={[
                "Meet global ESG standards",
                "Attract impact investors",
                "Reduce environmental impact",
                "Build sustainable operations"
              ]}
            />

            <ServiceCard
              icon={<Users size={28} />}
              title="Talent Analytics & HR"
              description="Optimize your recruitment, retention, and talent development with data-driven insights. Identify skill gaps and improve team performance."
              link="/solutions/talent-analytics"
              color="purple"
              features={[
                "AI-powered recruitment",
                "Performance analytics",
                "Skills gap analysis",
                "Retention modeling"
              ]}
              benefits={[
                "Reduce hiring costs by 30%",
                "Improve retention rates",
                "Optimize team performance",
                "Data-driven HR decisions"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Industries"
            title="Industries We Serve"
            description="Our AI solutions are tailored for the unique needs of various industries across East Africa."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Financial Services */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft group hover:shadow-medium transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Financial Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Financial Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Transform your financial institution with AI-powered solutions for risk management, compliance, and customer service.
                </p>
                <Link 
                  to="/industries/financial-services"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft group hover:shadow-medium transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthcare" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400 mb-4">
                  <Stethoscope size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Healthcare
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Optimize patient care and operations with AI-powered solutions for healthcare providers and facilities.
                </p>
                <Link 
                  to="/industries/healthcare"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-accent-500 text-white hover:bg-accent-600 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Retail & E-commerce */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft group hover:shadow-medium transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Retail & E-commerce" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  <ShoppingCart size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Retail & E-commerce
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Drive growth with AI solutions for inventory management, customer analytics, and personalized experiences.
                </p>
                <Link 
                  to="/industries/retail"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft group hover:shadow-medium transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3846249/pexels-photo-3846249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Manufacturing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  <Factory size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Manufacturing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Optimize production with AI-powered process automation, quality control, and predictive maintenance.
                </p>
                <Link 
                  to="/industries/manufacturing"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Logistics */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft group hover:shadow-medium transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Logistics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <Truck size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  Logistics
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Streamline operations with AI solutions for route optimization, warehouse management, and supply chain visibility.
                </p>
                <Link 
                  to="/industries/logistics"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Ready to Transform Your Business?"
        description="Book a consultation to discuss how our solutions can help you achieve your business goals."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default Solutions;