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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden flex flex-col">
      {/* Image */}
      <Link to={`/blog/${slug}`} className="block overflow-hidden h-48 md:h-56">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </Link>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-primary-600 font-semibold mb-2">
          {category}
        </div>
        
        <Link to={`/blog/${slug}`}>
          <h3 className="font-heading text-lg font-bold mb-2 text-primary-900 dark:text-white">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-block mt-auto px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;