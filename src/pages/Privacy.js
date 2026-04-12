import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Introduction</h2>
            <p>
              Dharmik Packaging ("we," "our," or "us") respects your privacy and is committed to 
              protecting your personal data. This privacy policy explains how we collect, use, and 
              safeguard your information when you visit our website or interact with our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you fill out our contact or quote request forms.</li>
              <li><strong>Business Information:</strong> Product requirements, order specifications, and delivery details related to your packaging needs.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and browser type.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process quote requests and fulfill orders</li>
              <li>To improve our website and services</li>
              <li>To send relevant communications about our products (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              data against unauthorized access, alteration, disclosure, or destruction. However, no 
              method of transmission over the Internet is 100% secure.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services (such as email delivery services and analytics tools) 
              that may collect information about your use of our website. These services have their 
              own privacy policies governing the use of your information.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> dharmikpackaging@gmail.com</li>
              <li><strong>Phone:</strong> +91 99256 27417</li>
              <li><strong>Address:</strong> N.M. Patel Estate at & post Raniya, Taluka Savli, Vadodara, Gujarat</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on 
              this page with an updated revision date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
