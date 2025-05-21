import { useParams, Link } from 'react-router-dom';
import { Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import CallToAction from '../components/CallToAction';

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real app, you would fetch the post based on the slug
  // This is a mock post for demonstration purposes
  const post = {
    title: "The Role of AI in SME Growth Across East Africa",
    excerpt: "How small and medium enterprises can leverage artificial intelligence to compete with larger corporations and expand their market reach.",
    content: `
      <p class="mb-6">Small and medium enterprises (SMEs) form the backbone of East Africa's economy, yet many struggle to compete with larger corporations due to limited resources and technological capabilities. Artificial Intelligence (AI) is increasingly becoming a game-changer for these businesses, offering affordable and accessible solutions that were previously only available to enterprises with substantial IT budgets.</p>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">The SME Landscape in East Africa</h2>
      
      <p class="mb-6">East Africa is home to over 2 million SMEs that collectively employ more than 45% of the region's workforce and contribute approximately 33% to the GDP. Despite their economic importance, these businesses face significant challenges:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Limited access to capital and financial services</li>
        <li>Operational inefficiencies due to manual processes</li>
        <li>Difficulty competing with larger, more technologically advanced competitors</li>
        <li>Challenges in managing cash flow and forecasting</li>
        <li>Compliance burdens with varying regulatory environments</li>
      </ul>
      
      <p class="mb-6">These challenges have historically limited growth potential for SMEs. However, the advent of accessible AI solutions is beginning to level the playing field.</p>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">AI Applications Driving SME Growth</h2>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">1. Financial Management & Forecasting</h3>
      
      <p class="mb-6">AI-powered financial tools are revolutionizing how SMEs manage their finances. These solutions can automate bookkeeping, reconcile transactions, and generate financial reports with minimal human intervention. More importantly, they can analyze historical data to create accurate cash flow forecasts, helping business owners anticipate cash shortfalls and make proactive decisions.</p>
      
      <p class="mb-6">For example, a retail business in Nairobi implemented an AI financial forecasting tool and reduced their cash flow surprises by 42%, allowing them to better plan inventory purchases and avoid stockouts during peak seasons.</p>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">2. Customer Insights & Personalization</h3>
      
      <p class="mb-6">Understanding customer behavior and preferences has traditionally been the domain of large corporations with extensive market research budgets. AI is changing this by enabling SMEs to analyze customer data and derive actionable insights without significant investment in data science teams.</p>
      
      <p class="mb-6">A small e-commerce business in Tanzania implemented an AI-powered customer analytics platform that helped them segment their customer base and personalize marketing messages. The result was a 28% increase in repeat purchases within three months.</p>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">3. Operations Optimization</h3>
      
      <p class="mb-6">For SMEs in manufacturing and logistics, AI tools can identify inefficiencies in operations and suggest improvements. These solutions can optimize routing, predict maintenance needs, and streamline workflows to reduce costs and improve service delivery.</p>
      
      <p class="mb-6">A medium-sized logistics company in Kenya used AI to optimize their delivery routes and scheduling, resulting in a 15% reduction in fuel costs and a 23% improvement in on-time deliveries.</p>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">Implementation Challenges & Solutions</h2>
      
      <p class="mb-6">Despite the clear benefits, many SMEs in East Africa face challenges in implementing AI solutions:</p>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">Technical Expertise Gap</h3>
      
      <p class="mb-6">Many SMEs lack the technical expertise to select, implement, and maintain AI solutions. To address this, a growing number of AI providers are offering "AI-as-a-Service" models with user-friendly interfaces and ongoing support. Additionally, local technology hubs and incubators are increasingly offering training programs specifically designed for SME owners and their teams.</p>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">Data Quality & Availability</h3>
      
      <p class="mb-6">AI solutions require quality data to function effectively. Many SMEs struggle with inconsistent or incomplete data. The solution lies in starting with basic data collection and management practices before implementing advanced AI tools. Cloud-based business management systems can help standardize data collection while being accessible and affordable for small businesses.</p>
      
      <h3 class="font-heading text-xl font-semibold text-primary-900 dark:text-white mt-8 mb-3">Cost Concerns</h3>
      
      <p class="mb-6">While AI solutions are becoming more affordable, cost remains a concern for many SMEs operating on tight margins. Subscription-based pricing models and tiered service offerings are making these technologies more accessible. Additionally, several development organizations and financial institutions are offering grants and low-interest loans specifically for digital transformation initiatives.</p>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">The Path Forward</h2>
      
      <p class="mb-6">For East African SMEs looking to leverage AI for growth, we recommend the following approach:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li><strong>Start small</strong>: Begin with a specific use case that addresses a clear business challenge, such as automating financial reporting or customer segmentation.</li>
        <li><strong>Prioritize data quality</strong>: Ensure you have clean, consistent data before implementing AI tools. This might require an initial investment in data cleanup and standardization.</li>
        <li><strong>Seek local expertise</strong>: Partner with local technology consultants who understand both the technology and the unique context of East African markets.</li>
        <li><strong>Focus on ROI</strong>: Clearly define success metrics before implementation and track them rigorously to ensure the solution is delivering value.</li>
        <li><strong>Build internal capacity</strong>: Invest in training for key staff members to ensure they can effectively use and maintain AI tools over time.</li>
      </ol>
      
      <h2 class="font-heading text-2xl font-semibold text-primary-900 dark:text-white mt-10 mb-4">Conclusion</h2>
      
      <p class="mb-6">AI is no longer the exclusive domain of large enterprises. For East African SMEs, these technologies offer a powerful means to overcome traditional barriers to growth, enabling them to operate more efficiently, understand their customers better, and make more informed strategic decisions.</p>
      
      <p class="mb-6">The key to success lies in approaching AI implementation strategically – starting with clear business objectives, ensuring data quality, and building the necessary internal capabilities. With the right approach, even small businesses can harness the power of AI to drive significant growth and competitive advantage in the East African market.</p>
    `,
    date: "June 15, 2025",
    author: "Amir Thande",
    authorPosition: "Founder & CEO",
    authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageUrl: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "AI Strategy",
    tags: ["AI", "SMEs", "Growth", "Business Strategy", "East Africa"],
    readTime: "5 min read"
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

export default BlogPost;