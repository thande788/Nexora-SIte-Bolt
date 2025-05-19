import { useParams, Link } from 'react-router-dom';
import { Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import CallToAction from '../components/CallToAction';

const ComplianceAutomation = () => {
  const post = {
    title: "Compliance Automation in Kenya: A Game-Changer",
    excerpt: "Exploring how regulatory technology is helping Kenyan businesses navigate the complex compliance landscape while reducing operational burdens.",
    content: `
      <p class="mb-6">In today's rapidly evolving regulatory environment, Kenyan businesses face increasingly complex compliance requirements. From tax regulations to industry-specific standards, maintaining compliance manually has become unsustainable. This is where compliance automation technology is emerging as a game-changing solution.</p>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">The Compliance Challenge in Kenya</h2>
      
      <p class="mb-6">Kenyan businesses operate in a complex regulatory environment that includes:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>KRA tax compliance requirements</li>
        <li>Central Bank of Kenya regulations for financial institutions</li>
        <li>Industry-specific standards and certifications</li>
        <li>Employment and labor law compliance</li>
        <li>Environmental regulations</li>
      </ul>
      
      <p class="mb-6">Manual compliance processes are not only time-consuming but also prone to errors, potentially leading to penalties and reputational damage.</p>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">How Compliance Automation Works</h2>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">1. Automated Monitoring and Alerts</h3>
      
      <p class="mb-6">Compliance automation systems continuously monitor business operations, transactions, and regulatory updates. They can automatically flag potential compliance issues and send alerts to relevant stakeholders, enabling proactive risk management.</p>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">2. Document Management and Reporting</h3>
      
      <p class="mb-6">The system automatically generates and maintains required documentation, ensuring all records are properly stored and easily accessible for audits. This includes automated report generation for various regulatory requirements.</p>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">3. Workflow Automation</h3>
      
      <p class="mb-6">Compliance processes are streamlined through automated workflows that ensure all necessary steps are followed and approvals are obtained. This reduces the risk of steps being missed or procedures being bypassed.</p>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">Benefits of Compliance Automation</h2>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">Reduced Costs</h3>
      
      <p class="mb-6">Organizations implementing compliance automation typically see:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>40-60% reduction in compliance-related labor costs</li>
        <li>50% decrease in audit preparation time</li>
        <li>Significant reduction in penalties and fines</li>
      </ul>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">Improved Accuracy</h3>
      
      <p class="mb-6">Automated systems eliminate human error in compliance processes, leading to:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>90% reduction in compliance-related errors</li>
        <li>More accurate regulatory reporting</li>
        <li>Better risk management</li>
      </ul>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">Enhanced Efficiency</h3>
      
      <p class="mb-6">Automation streamlines compliance processes, resulting in:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>70% faster compliance process completion</li>
        <li>Real-time monitoring and reporting</li>
        <li>Improved resource allocation</li>
      </ul>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">Implementation Best Practices</h2>
      
      <p class="mb-6">To successfully implement compliance automation, organizations should:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li><strong>Start with a compliance audit</strong>: Understand your current compliance requirements and processes</li>
        <li><strong>Choose the right solution</strong>: Select a compliance automation platform that fits your specific needs</li>
        <li><strong>Plan for integration</strong>: Ensure the solution can integrate with your existing systems</li>
        <li><strong>Train your team</strong>: Provide comprehensive training to ensure proper system usage</li>
        <li><strong>Monitor and optimize</strong>: Regularly review and adjust your automation processes</li>
      </ol>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">Case Study: Kenya Commercial Bank</h2>
      
      <p class="mb-6">Kenya Commercial Bank implemented compliance automation in 2024 and achieved:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>50% reduction in compliance-related costs</li>
        <li>75% faster regulatory reporting</li>
        <li>Zero compliance violations in the first year</li>
        <li>Improved stakeholder confidence</li>
      </ul>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">The Future of Compliance Automation</h2>
      
      <p class="mb-6">As technology continues to evolve, we can expect to see:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>AI-powered predictive compliance</li>
        <li>Enhanced integration with blockchain for transparency</li>
        <li>More sophisticated risk assessment tools</li>
        <li>Greater automation of complex compliance processes</li>
      </ul>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">Conclusion</h2>
      
      <p class="mb-6">Compliance automation is no longer a luxury but a necessity for businesses operating in Kenya's complex regulatory environment. By implementing the right automation solutions, organizations can significantly reduce costs, improve accuracy, and ensure consistent compliance with regulatory requirements.</p>
      
      <p class="mb-6">The key to success lies in choosing the right solution and implementing it properly. With proper planning and execution, compliance automation can transform your organization's approach to regulatory compliance, freeing up resources for strategic initiatives while ensuring robust compliance.</p>
    `,
    date: "June 8, 2025",
    author: "Grace Muthoni",
    authorPosition: "Chief Technology Officer",
    authorImage: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageUrl: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Compliance",
    tags: ["Compliance", "Automation", "Regulation", "Kenya", "Technology"],
    readTime: "4 min read"
  };
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-white mb-6 hover:text-accent-300 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Articles
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-gray-200 gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-10 shadow-medium">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Sidebar */}
              <aside className="md:col-span-3 order-2 md:order-1">
                <div className="sticky top-32">
                  {/* Author Info */}
                  <div className="mb-8">
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 mr-3">
                        <img 
                          src={post.authorImage} 
                          alt={post.author} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-primary-900 dark:text-white">{post.author}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{post.authorPosition}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4 flex items-center">
                      <Tag size={16} className="mr-2" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Link 
                          key={index} 
                          to={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Share */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4 flex items-center">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </h3>
                    <div className="flex space-x-3">
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
              
              {/* Content */}
              <article className="md:col-span-9 order-1 md:order-2">
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-primary-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:font-medium prose-a:no-underline hover:prose-a:text-primary-800 dark:hover:prose-a:text-primary-300"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="You May Also Like"
            description="Explore more insights on AI and business growth in East Africa"
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
              title="Sustainable Business Practices Through Data Analytics"
              excerpt="How data-driven approaches to sustainability can create both environmental benefits and business value for forward-thinking African enterprises."
              date="May 29, 2025"
              imageUrl="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Sustainability"
              slug="sustainable-business-data-analytics"
              readTime="6 min read"
            />
            <BlogCard
              title="AI for Financial Forecasting in Volatile Markets"
              excerpt="How machine learning models can improve financial forecasting accuracy in the volatile economic environments common across African markets."
              date="May 15, 2025"
              imageUrl="https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Financial Advisory"
              slug="ai-financial-forecasting"
              readTime="7 min read"
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CallToAction
        title="Want to Learn How AI Can Transform Your Business?"
        description="Book a free consultation with our experts to discover practical AI applications tailored to your specific business needs."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Solutions"
        secondaryButtonLink="/solutions"
        backgroundImage={false}
      />
    </div>
  );
};

export default ComplianceAutomation;