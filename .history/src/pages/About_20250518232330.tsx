import { ExternalLink, BarChart3, BrainCircuit, Users, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';

const About = () => {
  const teamMembers = [
    {
      name: 'Amir Thande',
      position: 'Founder & CEO',
      image: '/images/amir.jpg',
      bio: 'With over  years in strategy consulting and digital transformation, Amir founded Nexora to bridge the gap between AI innovation and practical business applications in East Africa.'
    },
    {
      name: 'Grace Muthoni',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Grace brings 10+ years of experience in AI development and data science, with a background working at leading tech companies in Kenya and internationally.'
    },
    {
      name: 'Daniel Odhiambo',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Daniel is an operations expert with extensive experience streamlining business processes and implementing digital solutions across various industries in East Africa.'
    },
    {
      name: 'Amina Hassan',
      position: 'Director of ESG Solutions',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Amina specializes in sustainability reporting and ESG compliance, helping organizations meet international standards while achieving their sustainability goals.'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 relative bg-gradient-blue dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400 mb-6">
                <span className="text-sm font-medium">About Us</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Bridging Technology and Business Excellence in Africa
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Nexora Consulting was founded with a vision to empower African businesses with AI-powered solutions that are contextually relevant and culturally attuned.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-600 rounded-full opacity-30 animate-pulse"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 p-3 rounded-xl rotate-3 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Nexora team meeting" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 right-12 bg-white dark:bg-gray-800 p-3 rounded-xl -rotate-6 shadow-xl w-48 z-20">
                <img 
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Nexora consulting session" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Story"
            title="From Vision to Reality"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Founded in 2025, Nexora Consulting emerged from a vision to address a significant gap in the East African business landscape: the integration of advanced AI solutions with traditional business advisory services.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our founder, Amir Thande, recognized that while global AI solutions were becoming increasingly sophisticated, they often failed to account for the unique challenges and contexts of African markets.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Starting with a small team of experts in technology and business, Nexora has grown into a comprehensive consulting firm that serves businesses of all sizes across Kenya, Uganda, Tanzania, and Rwanda.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-full h-72 md:h-96 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Nexora founding team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Timeline overlay */}
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-medium text-center w-40">
                  <div className="font-heading text-2xl font-bold text-primary-600 dark:text-primary-400">2025</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Year Founded</div>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="mt-24 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-primary-100 dark:bg-gray-700 hidden md:block"></div>
              
              <div className="space-y-16 md:space-y-0 relative">
                {/* Timeline items */}
                {/* Timeline item 1 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  <div className="md:text-right fade-in-up">
                    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft mb-4 md:mb-0 relative border border-gray-100 dark:border-gray-700">
                      <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold z-10 hidden md:flex">1</div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2 block">2025</span>
                      <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">Company Founding</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Nexora was established in Nairobi with a vision to bridge the gap between AI innovation and business advisory services in East Africa.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
                
                {/* Timeline item 2 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  <div className="hidden md:block"></div>
                  <div className="fade-in-up">
                    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft relative border border-gray-100 dark:border-gray-700">
                      <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold z-10 hidden md:flex">2</div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2 block">2025</span>
                      <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">Launch of Core Services</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Introduced our initial suite of AI-powered financial advisory and operations consulting services tailored for the East African market.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 3 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  <div className="md:text-right fade-in-up">
                    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft mb-4 md:mb-0 relative border border-gray-100 dark:border-gray-700">
                      <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold z-10 hidden md:flex">3</div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2 block">2026</span>
                      <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">Expansion to East Africa</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Expanded operations to Uganda, Tanzania, and Rwanda, bringing our unique blend of AI and consulting services to businesses across East Africa.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
                
                {/* Timeline item 4 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  <div className="hidden md:block"></div>
                  <div className="fade-in-up">
                    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft relative border border-gray-100 dark:border-gray-700">
                      <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold z-10 hidden md:flex">4</div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2 block">2027</span>
                      <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">ESG & Sustainability Focus</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Developed specialized ESG compliance and sustainability tools to help African businesses meet global standards and attract international investment.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 5 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  <div className="md:text-right fade-in-up">
                    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft mb-4 md:mb-0 relative border border-gray-100 dark:border-gray-700">
                      <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 bg-primary-600 rounded-full text-white flex items-center justify-center font-bold z-10 hidden md:flex">5</div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2 block">2028</span>
                      <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">Future Vision</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Looking forward to expanding across the African continent and continuing to innovate at the intersection of AI and business advisory services.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-20 bg-primary-900 dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 text-white">
                <ExternalLink size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-200 mb-4">
                To transform African businesses through the smart fusion of AI and expert advisory, creating a new standard for business excellence across the continent.
              </p>
              <p className="text-gray-200">
                We envision an Africa where businesses of all sizes have access to world-class AI-powered tools and expertise, enabling them to compete globally while solving local challenges.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 text-white">
                <BarChart3 size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-200 mb-4">
                Delivering tailored, data-driven strategies for growth, compliance, and sustainability that respect and leverage Africa's unique business environment.
              </p>
              <p className="text-gray-200">
                We commit to combining global best practices with deep local knowledge to provide solutions that are not just technologically advanced, but culturally and contextually appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Values"
            title="The Principles That Guide Us"
            description="At Nexora, our values form the foundation of everything we do – from how we build our solutions to how we interact with our clients and communities."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border-t-4 border-primary-600">
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly push boundaries, exploring new technologies and approaches to create solutions that address both current needs and future challenges.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border-t-4 border-accent-500">
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We operate with transparency and honesty, building trust through ethical practices and maintaining the highest standards of professional conduct.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border-t-4 border-green-600">
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We measure our success by the measurable difference we make for our clients, their stakeholders, and the broader African business ecosystem.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border-t-4 border-purple-600">
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-3">Inclusion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We celebrate diversity and ensure our solutions are accessible and beneficial to businesses across different sectors, sizes, and regions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            pretitle="Our Team"
            title="Leaders in Business and Technology"
            description="Our diverse team brings together expertise in artificial intelligence, business strategy, local markets, and industry-specific knowledge."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-700 group">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Join Our Team */}
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-900 dark:text-white mb-4">
                  Join Our Growing Team
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We're always looking for talented individuals who are passionate about AI, business, and making a difference in Africa's economic landscape.
                </p>
                <Link 
                  to="/careers" 
                  className="btn btn-primary inline-flex items-center"
                >
                  View Open Positions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-soft">
                    <h4 className="font-heading font-semibold text-primary-900 dark:text-white mb-2">AI Engineers</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Machine learning specialists who can develop and deploy AI models.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-soft">
                    <h4 className="font-heading font-semibold text-primary-900 dark:text-white mb-2">Business Analysts</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Professionals who can translate data insights into actionable strategies.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-soft">
                    <h4 className="font-heading font-semibold text-primary-900 dark:text-white mb-2">Industry Experts</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Specialists with deep knowledge in finance, manufacturing, and retail.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-soft">
                    <h4 className="font-heading font-semibold text-primary-900 dark:text-white mb-2">Solution Architects</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Technical leaders who can design end-to-end solutions for complex needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CallToAction
        title="Get to Know Us Better"
        description="Schedule a call to learn more about our team, our approach, and how we can help your business harness the power of AI."
        primaryButtonText="Book a Call"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Solutions"
        secondaryButtonLink="/solutions"
        backgroundImage={false}
      />
    </div>
  );
};

export default About;