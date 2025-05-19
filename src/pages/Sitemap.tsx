import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Solutions", path: "/solutions" },
        { name: "Why Nexora?", path: "/why-nexora" },
        { name: "Pricing", path: "/pricing" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "AI-Powered Financial Advisory", path: "/solutions/financial-advisory" },
        { name: "Operations Consulting", path: "/solutions/operations-consulting" },
        { name: "ESG & Sustainability", path: "/solutions/esg-sustainability" },
        { name: "Talent Analytics & HR", path: "/solutions/talent-analytics" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Financial Services", path: "/industries/financial-services" },
        { name: "Healthcare", path: "/industries/healthcare" },
        { name: "Retail & E-commerce", path: "/industries/retail" },
        { name: "Manufacturing", path: "/industries/manufacturing" },
        { name: "Logistics", path: "/industries/logistics" }
      ]
    },
    {
      title: "Blog Categories",
      links: [
        { name: "All Articles", path: "/blog" },
        { name: "AI for SMEs", path: "/blog/ai-sme-growth-east-africa" },
        { name: "Compliance Automation", path: "/blog/compliance-automation" },
        { name: "Sustainability", path: "/blog/sustainable-business-data-analytics" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" }
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-200">
              Find everything you need on our website with this comprehensive sitemap.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-heading text-2xl font-semibold text-primary-900 dark:text-white mb-6">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path}
                        className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;