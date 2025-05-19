import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import WhyNexora from './pages/WhyNexora';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ComplianceAutomation from './pages/ComplianceAutomation';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';

// Solution Pages
import OperationsConsulting from './pages/solutions/OperationsConsulting';
import FinancialAdvisory from './pages/solutions/FinancialAdvisory';
import ESGSustainability from './pages/solutions/ESGSustainability';
import TalentAnalytics from './pages/solutions/TalentAnalytics';

// Industry Pages
import FinancialServices from './pages/industries/FinancialServices';
import Healthcare from './pages/industries/Healthcare';
import Retail from './pages/industries/Retail';
import Manufacturing from './pages/industries/Manufacturing';
import Logistics from './pages/industries/Logistics';

// Case Studies
import LeadingBank from './pages/case-studies/LeadingBank';
import SupermarketChain from './pages/case-studies/SupermarketChain';
import EcommercePlatform from './pages/case-studies/EcommercePlatform';
import FashionRetail from './pages/case-studies/FashionRetail';
import LeadingManufacturer from './pages/case-studies/LeadingManufacturer';
import LeadingLogistics from './pages/case-studies/LeadingLogistics';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-primary-900 dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
          <h2 className="mt-4 text-white font-medium">Loading Nexora...</h2>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/operations-consulting" element={<OperationsConsulting />} />
              <Route path="/solutions/financial-advisory" element={<FinancialAdvisory />} />
              <Route path="/solutions/esg-sustainability" element={<ESGSustainability />} />
              <Route path="/solutions/talent-analytics" element={<TalentAnalytics />} />
              <Route path="/industries/financial-services" element={<FinancialServices />} />
              <Route path="/industries/healthcare" element={<Healthcare />} />
              <Route path="/industries/retail" element={<Retail />} />
              <Route path="/industries/manufacturing" element={<Manufacturing />} />
              <Route path="/industries/logistics" element={<Logistics />} />
              <Route path="/case-studies/leading-bank" element={<LeadingBank />} />
              <Route path="/case-studies/supermarket-chain" element={<SupermarketChain />} />
              <Route path="/case-studies/ecommerce-platform" element={<EcommercePlatform />} />
              <Route path="/case-studies/fashion-retail" element={<FashionRetail />} />
              <Route path="/case-studies/leading-manufacturer" element={<LeadingManufacturer />} />
              <Route path="/case-studies/leading-logistics" element={<LeadingLogistics />} />
              <Route path="/why-nexora" element={<WhyNexora />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog/compliance-automation" element={<ComplianceAutomation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;