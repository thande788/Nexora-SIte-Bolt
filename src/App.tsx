import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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

// --- Cookie Consent Banner Component ---
const COOKIE_KEY = "nexora_cookie_consent";
function CookieConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setShow(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(COOKIE_KEY, accepted ? "accepted" : "declined");
    setShow(false);
    // Stub: Integrate analytics enable/disable here
    if (!accepted) {
      // window['ga-disable-UA-XXXXXXX-X'] = true; // Example for Google Analytics
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col md:flex-row items-center justify-between shadow-lg"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <span className="text-sm text-gray-700 dark:text-gray-200">
        We use cookies for analytics and to improve your experience. See our{" "}
        <Link to="/privacy-policy" className="underline text-primary-600 dark:text-primary-400 focus:ring">
          Privacy Policy
        </Link>.
      </span>
      <div className="mt-2 md:mt-0 flex gap-2">
        <button
          className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 focus:ring"
          onClick={() => handleConsent(true)}
          aria-label="Accept cookies"
        >
          Accept
        </button>
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring"
          onClick={() => handleConsent(false)}
          aria-label="Decline cookies"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Responsive: lock scroll when cart/modal open (stub for cart/modal logic)
  // useEffect(() => {
  //   document.body.style.overflow = modalOpen ? 'hidden' : '';
  // }, [modalOpen]);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Accessibility: focus outline for keyboard users
  useEffect(() => {
    function handleFirstTab(e: KeyboardEvent) {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }
    window.addEventListener('keydown', handleFirstTab);
    return () => window.removeEventListener('keydown', handleFirstTab);
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
          <main className="flex-grow" id="main-content" tabIndex={-1}>
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
          <CookieConsentBanner />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;