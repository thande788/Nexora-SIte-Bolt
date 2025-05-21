interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    category: string;
    slug: string;
    readTime: string;
    tags: string[];
    content: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Role of AI in SME Growth Across East Africa",
        excerpt: "How small and medium enterprises can leverage artificial intelligence to compete with larger corporations and expand their market reach.",
        date: "June 15, 2025",
        imageUrl: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "AI Strategy",
        slug: "ai-sme-growth-east-africa",
        readTime: "5 min read",
        tags: ["AI", "SMEs", "Growth", "Business Strategy"],
        content: `<p>Artificial Intelligence (AI) is rapidly transforming the business landscape in East Africa. SMEs can now access tools that were once reserved for large corporations, enabling them to compete more effectively and expand their market reach. In this article, we explore practical ways SMEs can leverage AI for growth, from automating routine tasks to gaining deeper customer insights.</p>`
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
        tags: ["Compliance", "Automation", "Regulation", "Kenya"],
        content: `<p>Regulatory technology (RegTech) is revolutionizing compliance for Kenyan businesses. By automating compliance processes, companies can reduce operational burdens, minimize errors, and stay ahead of regulatory changes. This article discusses the latest trends in compliance automation and how your business can benefit.</p>`
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
        tags: ["Sustainability", "Data Analytics", "ESG", "Environment"],
        content: `<p>Data analytics is a powerful tool for driving sustainable business practices. By leveraging data, African enterprises can identify opportunities to reduce waste, improve resource efficiency, and create long-term value for both the environment and their bottom line.</p>`
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
        tags: ["Finance", "AI", "Forecasting", "Risk Management"],
        content: `<p>Machine learning models are increasingly being used to improve the accuracy of financial forecasts, especially in volatile markets. This article explores how AI can help businesses in Africa anticipate market changes and make better financial decisions.</p>`
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
        tags: ["Digital Transformation", "Traditional Business", "Change Management"],
        content: `<p>Digital transformation doesn't have to be disruptive. This guide provides a step-by-step approach for traditional businesses in Africa to embrace new technologies while maintaining operational stability and customer trust.</p>`
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
        tags: ["Data Strategy", "Organizational Culture", "Decision Making"],
        content: `<p>Creating a data-driven culture is essential for modern African organizations. Learn how to foster data literacy, encourage evidence-based decision making, and overcome common barriers to adoption.</p>`
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
        tags: ["Supply Chain", "AI", "Operations", "Case Studies"],
        content: `<p>AI is transforming supply chains across East Africa. This article highlights real-world case studies where businesses have leveraged AI to optimize logistics, reduce costs, and improve service delivery.</p>`
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
        tags: ["HR", "Talent", "Skills Gap", "Analytics"],
        content: `<p>Talent analytics is helping East African businesses bridge the skills gap. Discover how data-driven recruitment and development strategies can build stronger teams and drive business growth.</p>`
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
        tags: ["ESG", "Reporting", "Sustainability", "Standards"],
        content: `<p>ESG reporting is becoming a global requirement. This article explains how African businesses can create ESG frameworks that meet international standards while remaining relevant to local realities.</p>`
    }
];

export default blogPosts;