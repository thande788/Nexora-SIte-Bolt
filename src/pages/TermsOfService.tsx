import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';

const TermsOfService = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Please read these terms carefully before using our services.
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
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Nexora Consulting Limited ("we," "us," or "our"), concerning your access to and use of our services.
            </p>
            <p>
              By accessing or using our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using our services.
            </p>

            <h2>2. Services</h2>
            <p>
              We provide AI-powered business consulting services, including but not limited to:
            </p>
            <ul>
              <li>Financial advisory services</li>
              <li>Operations consulting</li>
              <li>ESG and sustainability solutions</li>
              <li>Talent analytics and HR services</li>
              <li>Industry-specific solutions</li>
            </ul>

            <h2>3. User Representations</h2>
            <p>
              By using our services, you represent and warrant that:
            </p>
            <ul>
              <li>You have the legal capacity to accept these Terms of Service</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access our services through automated or non-human means</li>
              <li>You will not use our services for any illegal or unauthorized purpose</li>
              <li>Your use of our services will not violate any applicable law or regulation</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, our services and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>

            <h2>5. User Data</h2>
            <p>
              We will maintain certain data that you transmit to our services for the purpose of managing the performance of our services, as well as data relating to your use of our services. You are solely responsible for all data that you transmit or that relates to any activity you have undertaken using our services.
            </p>

            <h2>6. Payment Terms</h2>
            <p>
              You agree to provide current, complete, and accurate purchase and account information for all purchases made via our services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
            </p>

            <h2>7. Cancellation and Refund Policy</h2>
            <p>
              Consulting services may be cancelled with written notice according to the terms specified in your service agreement. Refunds will be processed according to the terms outlined in your specific service contract.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of our services.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of our services.
            </p>

            <h2>10. Term and Termination</h2>
            <p>
              These Terms of Service shall remain in full force and effect while you use our services. We may terminate or suspend your access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms of Service.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of Kenya. Nexora Consulting Limited and yourself irrevocably consent that the courts of Kenya shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to change or modify these Terms of Service at any time. If we make changes to these Terms of Service, we will provide notice of such changes by updating the "Last Updated" date at the top of these Terms of Service and by maintaining a current version of the Terms of Service at our website.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@nexora.africa</li>
              <li>Phone: +254 724 442 180</li>
              <li>Address: Kilimani Business Center, 3rd Floor, Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Have Questions About Our Terms?"
        description="Contact our legal team to learn more about our terms of service and how we protect your interests."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        backgroundImage={false}
      />
    </div>
  );
};

export default TermsOfService;