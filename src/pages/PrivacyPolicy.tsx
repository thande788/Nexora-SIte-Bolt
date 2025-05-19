import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-gray-200">
              Last updated: March 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              Nexora Consulting Limited ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect several different types of information for various purposes to provide and improve our service to you:</p>
            <ul>
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Usage Data (Browser type, access time, pages visited)</li>
              <li>Business information provided through our consulting services</li>
              <li>Communication preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              The security of your data is important to us. We implement appropriate technical and organizational measures to maintain the security of your personal information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection and security</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2>Your Rights</h2>
            <p>Under data protection laws, you have rights including:</p>
            <ul>
              <li>Your right of access</li>
              <li>Your right to rectification</li>
              <li>Your right to erasure</li>
              <li>Your right to restrict processing</li>
              <li>Your right to data portability</li>
              <li>Your right to object</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service, provide service-related services, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@nexora.africa</li>
              <li>By phone: +254 724 442 180</li>
              <li>By mail: Kilimani Business Center, 3rd Floor, Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Have Questions About Your Data?"
        description="Contact our data protection team to learn more about how we protect your information."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        backgroundImage={false}
      />
    </div>
  );
};

export default PrivacyPolicy;