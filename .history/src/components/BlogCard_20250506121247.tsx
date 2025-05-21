import { FC } from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  slug: string;
  readTime: string;
}

const BlogCard: FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  imageUrl,
  category,
  slug,
  readTime
}) => {
  return (
    <article className="overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
      {/* Image */}
      <Link to={`/blog/${slug}`} className="block overflow-hidden h-48 md:h-56">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </Link>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400">
            {category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{readTime}</span>
        </div>
        
        <Link to={`/blog/${slug}`}>
          <h3 className="font-heading text-xl font-semibold mb-2 text-primary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </span>
          <Link 
            to={`/blog/${slug}`} 
            className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;