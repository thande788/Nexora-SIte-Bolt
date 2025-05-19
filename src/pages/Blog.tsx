import { useState } from 'react';
import { Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import CallToAction from '../components/CallToAction';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Role of AI in SME Growth Across East Africa",
    excerpt: "How small and medium enterprises can leverage artificial intelligence to compete with larger corporations and expand their market reach.",
    date: "June 15, 2025",
    imageUrl: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "AI Strategy",
    slug: "ai-sme-growth-east-africa",
    readTime: "5 min read",
    tags: ["AI", "SMEs", "Growth", "Business Strategy"]
  },
  {
    id: 2,
    title: "Compliance Automation in Kenya: A Game-Changer",
    excerpt: "Exploring how regulatory technology is helping Kenyan businesses navigate the complex compliance landscape while reducing operational burdens.",
    date: "June 8, 2025",
    imageUrl: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Compliance",
    slug: "compliance-automation-kenya",
    readTime: "4 min read",
    tags: ["Compliance", "Automation", "Regulation", "Kenya"]
  },
  {
    id: 3,
    title: "Sustainable Business Practices Through Data Analytics",
    excerpt: "How data-driven approaches to sustainability can create both environmental benefits and business value for forward-thinking African enterprises.",
    date: "May 29, 2025",
    imageUrl: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Sustainability",
    slug: "sustainable-business-data-analytics",
    readTime: "6 min read",
    tags: ["Sustainability", "Data Analytics", "ESG", "Environment"]
  },
  {
    id: 4,
    title: "AI for Financial Forecasting in Volatile Markets",
    excerpt: "How machine learning models can improve financial forecasting accuracy in the volatile economic environments common across African markets.",
    date: "May 15, 2025",
    imageUrl: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Financial Advisory",
    slug: "ai-financial-forecasting",
    readTime: "7 min read",
    tags: ["Finance", "AI", "Forecasting", "Risk Management"]
  },
  {
    id: 5,
    title: "Digital Transformation Roadmaps for Traditional Businesses",
    excerpt: "A step-by-step guide for traditional African businesses looking to embrace digital transformation without disrupting their core operations.",
    date: "May 10, 2025",
    imageUrl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Digital Transformation",
    slug: "digital-transformation-roadmap",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Traditional Business", "Change Management"]
  },
  {
    id: 6,
    title: "Building Data-Driven Decision Cultures in African Organizations",
    excerpt: "Why developing a data-driven decision-making culture is crucial for African businesses, and how to overcome common implementation challenges.",
    date: "April 28, 2025",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Data Strategy",
    slug: "data-driven-decision-culture",
    readTime: "5 min read",
    tags: ["Data Strategy", "Organizational Culture", "Decision Making"]
  },
  {
    id: 7,
    title: "Supply Chain Optimization with AI: East African Case Studies",
    excerpt: "Real-world examples of how East African businesses have used AI to overcome supply chain challenges and improve operational efficiency.",
    date: "April 15, 2025",
    imageUrl: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Operations",
    slug: "supply-chain-optimization-ai",
    readTime: "6 min read",
    tags: ["Supply Chain", "AI", "Operations", "Case Studies"]
  },
  {
    id: 8,
    title: "Talent Analytics: Solving East Africa's Skills Gap Challenge",
    excerpt: "How data-driven approaches to talent acquisition and development can help address the critical skills gaps facing many East African industries.",
    date: "April 3, 2025",
    imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "HR & Talent",
    slug: "talent-analytics-skills-gap",
    readTime: "5 min read",
    tags: ["HR", "Talent", "Skills Gap", "Analytics"]
  },
  {
    id: 9,
    title: "ESG Reporting: Meeting Global Standards in African Contexts",
    excerpt: "How African businesses can develop ESG reporting frameworks that satisfy international standards while addressing local realities.",
    date: "March 22, 2025",
    imageUrl: "https://images.pexels.com/photos/6476574/pexels-photo-6476574.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "ESG",
    slug: "esg-reporting-african-context",
    readTime: "7 min read",
    tags: ["ESG", "Reporting", "Sustainability", "Standards"]
  }
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'ai-strategy', name: 'AI Strategy' },
  { id: 'compliance', name: 'Compliance' },
  { id: 'sustainability', name: 'Sustainability' },
  { id: 'financial-advisory', name: 'Financial Advisory' },
  { id: 'operations', name: 'Operations' },
  { id: 'hr-talent', name: 'HR & Talent' },
  { id: 'digital-transformation', name: 'Digital Transformation' },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = 
      activeCategory === 'all' || 
      post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Insights</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              AI & Business Intelligence Blog
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Expert insights, practical tips, and success stories at the intersection of AI and business in East Africa.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-5 pr-12 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" size={20} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    imageUrl={post.imageUrl}
                    category={post.category}
                    slug={post.slug}
                    readTime={post.readTime}
                  />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <div className="inline-flex rounded-md shadow-sm">
                  <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    Previous
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-primary-600">
                    1
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    2
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    3
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-r-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-500 dark:text-gray-400" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We couldn't find any articles matching your search criteria.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="btn btn-primary dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-primary-900 dark:bg-gray-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 dark:bg-gray-600 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-800 dark:bg-gray-600 rounded-full -ml-10 -mb-10"></div>
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Updated with AI & Business Insights
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest trends, case studies, and insights on AI and business growth in East Africa.
                </p>
                
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-grow px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                    <button className="btn btn-accent dark:bg-primary-600 dark:hover:bg-primary-700 py-3">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CallToAction
        title="Ready to Transform Your Business with AI-Powered Solutions?"
        description="Book a free consultation to discover how Nexora can help you optimize operations, improve decision-making, and drive sustainable growth."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        backgroundImage={true}
      />
    </div>
  );
};

export default Blog;