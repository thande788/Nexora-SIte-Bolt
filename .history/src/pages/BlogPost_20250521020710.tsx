import { useParams, Link } from 'react-router-dom';
import { Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import CallToAction from '../components/CallToAction';

// Import your blogPosts data (move it to a separate file if needed)
import blogPosts from './p'; // <-- create this file or import from Blog.tsx

const BlogPost = () => {
  const { slug } = useParams();

  // Find the post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">404 - Article Not Found</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Sorry, we couldn't find the article you're looking for.</p>
        <Link to="/blog" className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition">Back to Blog</Link>
      </div>
    );
  }

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
                <span>{post.author || "Nexora Team"}</span>
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
                  {post.author && (
                    <div className="mb-8">
                      <h3 className="font-heading text-lg font-semibold text-primary-900 dark:text-white mb-4">
                        About the Author
                      </h3>
                      <div className="flex items-start">
                        {post.authorImage && (
                          <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 mr-3">
                            <img 
                              src={post.authorImage} 
                              alt={post.author} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-primary-900 dark:text-white">{post.author}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{post.authorPosition}</div>
                        </div>
                      </div>
                    </div>
                  )}
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
                      <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Facebook size={18} />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
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
                  dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
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
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((related) => (
                <BlogCard
                  key={related.id}
                  title={related.title}
                  excerpt={related.excerpt}
                  date={related.date}
                  imageUrl={related.imageUrl}
                  category={related.category}
                  slug={related.slug}
                  readTime={related.readTime}
                />
              ))}
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