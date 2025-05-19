import { ArrowRight, PieChart, BrainCircuit, Clock, Database, BarChart, Shield, Users } from 'lucide-react'; // Removed LineChart
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Stats from '../components/Stats';
import CallToAction from '../components/CallToAction';
import BlogCard from '../components/BlogCard';
import PartnerLogos from '../components/PartnerLogos';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Why Choose Us"
            title="AI-Powered Solutions Tailored for African Businesses"
            description="We combine cutting-edge AI technology with deep local business knowledge to deliver solutions that drive real results for businesses across East Africa."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard
              icon={<Database size={28} />}
              title="Local Business Insight"
              description="Deep understanding of regional markets, regulations, and business practices across East Africa."
              delay={100}
            />
            <FeatureCard
              icon={<BrainCircuit size={28} />}
              title="AI-Powered Analytics"
              description="Advanced machine learning models tailored to your specific business needs and local context."
              delay={200}
            />
            <FeatureCard
              icon={<Shield size={28} />}
              title="Compliance Excellence"
              description="Stay ahead with automated compliance monitoring and updates for local regulations."
              delay={300}
            />
            <FeatureCard
              icon={<Clock size={28} />}
              title="Rapid Implementation"
              description="Quick deployment and onboarding with visible results within weeks, not months."
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Solutions"
            title="Comprehensive Business Growth Services"
            description="Our suite of services combines traditional consulting expertise with AI-powered analytics to drive growth, efficiency, and innovation."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ServiceCard
              icon={<PieChart size={28} />}
              title="AI-Powered Financial Advisory"
              description="Automate bookkeeping, forecasting, and compliance reporting. Our AI systems analyze your financials to identify patterns and opportunities for growth and cost-savings."
              link="/solutions"
              color="primary"
            />
            <ServiceCard
              icon={<BarChart size={28} />}
              title="Operations Consulting"
              description="Streamline workflows, reduce inefficiencies, and adopt digital transformation. Our team identifies bottlenecks and implements robust solutions."
              link="/solutions"
              color="accent"
            />
            <ServiceCard
              icon={<Shield size={28} />}
              title="ESG & Sustainability Tools"
              description="Meet sustainability goals with our AI-enabled tracking platforms. Monitor and improve your environmental impact while ensuring compliance."
              link="/solutions"
              color="green"
            />
            <ServiceCard
              icon={<Users size={28} />}
              title="Talent Analytics & HR"
              description="Optimize your recruitment, retention, and talent development with data-driven insights. Identify skill gaps and improve team performance."
              link="/solutions"
              color="purple"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/solutions" 
              className="btn btn-primary dark:bg-primary-600 dark:hover:bg-primary-700 inline-flex items-center"
            >
              View All Solutions
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <Stats />
      
      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Process"
            title="How We Work With You"
            description="We follow a proven methodology to understand your needs, implement solutions, and ensure long-term success."
            centered={true}
          />
          
          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-100 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-20 md:space-y-0 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="md:text-right fade-in-up">
                  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft relative">
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold z-10 hidden md:flex">1</div>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white flex md:hidden items-center">
                      <span className="h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold mr-3">1</span>
                      Discovery & Analysis
                    </h3>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white hidden md:block">
                      Discovery & Analysis
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We start with a comprehensive assessment of your business, understanding your goals, challenges, and operational context. Our team identifies key improvement areas and establishes baseline metrics.
                    </p>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 flex justify-center md:justify-start fade-in">
                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-sm">
                    <img 
                      src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Discovery phase" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="hidden md:flex justify-end fade-in">
                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-sm">
                    <img 
                      src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Solution design phase" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="fade-in-up">
                  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft relative">
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-8 w-8 bg-primary-600 rounded-full text-white items-center justify-center font-bold z-10 hidden md:flex">2</div>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white flex md:hidden items-center">
                      <span className="h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold mr-3">2</span>
                      Solution Design
                    </h3>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white hidden md:block">
                      Solution Design
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Based on our analysis, we craft a customized solution that addresses your specific needs. We blend AI-powered tools with practical business strategies to create an implementation roadmap.
                    </p>
                  </div>
                </div>
                <div className="mt-8 md:hidden justify-center fade-in">
                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-sm">
                    <img 
                      src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Solution design phase" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="md:text-right fade-in-up">
                  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft relative">
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold z-10 hidden md:flex">3</div>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white flex md:hidden items-center">
                      <span className="h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold mr-3">3</span>
                      Implementation & Training
                    </h3>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white hidden md:block">
                      Implementation & Training
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We deploy solutions with minimal disruption to your operations. Our team provides comprehensive training for your staff, ensuring they can leverage the new systems effectively.
                    </p>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 flex justify-center md:justify-start fade-in">
                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-sm">
                    <img 
                      src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Implementation phase" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="hidden md:flex justify-end fade-in">
                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-sm">
                    <img 
                      src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Ongoing support phase" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="fade-in-up">
                  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft relative">
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-8 w-8 bg-primary-600 rounded-full text-white items-center justify-center font-bold z-10 hidden md:flex">4</div>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white flex md:hidden items-center">
                      <span className="h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold mr-3">4</span>
                      Ongoing Support & Optimization
                    </h3>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-white hidden md:block">
                      Ongoing Support & Optimization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our partnership continues with regular check-ins and performance reviews. We continuously refine and optimize to ensure you get maximum value as your business evolves.
                    </p>
                  </div>
                </div>
                <div className="mt-8 md:hidden justify-center fade-in">
                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-sm">
                    <img 
                      src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Ongoing support phase" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-primary-900 dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionTitle
            pretitle="Success Stories"
            title="What Our Clients Say"
            description="Hear from businesses that have transformed their operations and achieved remarkable results with Nexora Consulting."
            centered={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-900 dark:bg-primary-700 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">
                  T
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                "Nexora's AI-powered financial tools have completely transformed how we handle our accounting and forecasting. We've reduced manual processes by 70% and gained much better visibility into our financial health."
              </p>
              <div>
                <div className="font-semibold text-primary-900 dark:text-white">Sarah Mwangi</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">CFO, TechHub Nairobi</div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-900 dark:bg-primary-700 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">
                  E
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                "The operations consulting team at Nexora helped us identify inefficiencies we didn't even know existed. Their recommendations led to a 22% increase in productivity across our manufacturing facilities."
              </p>
              <div>
                <div className="font-semibold text-primary-900 dark:text-white">James Ochieng</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Operations Director, EastAfrica Manufacturing Ltd</div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-900 dark:bg-primary-700 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">
                  S
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                "As a fast-growing startup, we needed HR systems that could scale with us. Nexora's talent analytics platform has been a game-changer for our recruitment and employee development strategies."
              </p>
              <div>
                <div className="font-semibold text-primary-900 dark:text-white">Grace Njeri</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Head of People, Savannah Innovations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white">
              Trusted By Leading Organizations
            </h2>
          </div>
          
          <PartnerLogos />
        </div>
      </section>
      
      {/* Blog Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Latest Insights"
            title="AI & Business Intelligence Blog"
            description="Stay updated with the latest trends, strategies, and insights on AI implementation and business growth in East Africa."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <BlogCard
              title="The Role of AI in SME Growth Across East Africa"
              excerpt="How small and medium enterprises can leverage artificial intelligence to compete with larger corporations and expand their market reach."
              date="June 15, 2025"
              imageUrl="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="AI Strategy"
              slug="ai-sme-growth-east-africa"
              readTime="5 min read"
            />
            <BlogCard
              title="Compliance Automation in Kenya: A Game-Changer"
              excerpt="Exploring how regulatory technology is helping Kenyan businesses navigate the complex compliance landscape while reducing operational burdens."
              date="June 8, 2025"
              imageUrl="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Compliance"
              slug="compliance-automation-kenya"
              readTime="4 min read"
            />
            <BlogCard
              title="Sustainable Business Practices Through Data Analytics"
              excerpt="How data-driven approaches to sustainability can create both environmental benefits and business value for forward-thinking African enterprises."
              date="May 29, 2025"
              imageUrl="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Sustainability"
              slug="sustainable-business-data-analytics"
              readTime="6 min read"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="btn btn-secondary dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              View All Articles
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction
        title="Ready to Transform Your Business with AI-Powered Solutions?"
        description="Book a free consultation with our experts to discover how Nexora can help you optimize operations, improve decision-making, and drive sustainable growth."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Solutions"
        secondaryButtonLink="/solutions"
        backgroundImage={true}
      />
    </div>
  );
};

export default Home;