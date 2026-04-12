import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import './Privacy.css'; // Reuse same styles

const Terms = () => {
  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <section className="page-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last updated: January 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Dharmik Packaging website, you agree to be bound by these 
              Terms of Service. If you do not agree with any part of these terms, please do not use 
              our website.
            </p>

            <h2>Products & Services</h2>
            <p>
              Dharmik Packaging manufactures and supplies corrugated packaging products including 
              boxes, sheets, and rolls. All product descriptions, specifications, and images on our 
              website are for general information purposes and may vary from actual products.
            </p>

            <h2>Quotations & Orders</h2>
            <ul>
              <li>All quotations are valid for 15 days from the date of issue unless otherwise stated.</li>
              <li>Prices are subject to change based on raw material costs and market conditions.</li>
              <li>Orders are confirmed only upon written acceptance and advance payment (as applicable).</li>
              <li>Custom orders (with specific printing or non-standard sizes) cannot be cancelled once production has begun.</li>
            </ul>

            <h2>Payment Terms</h2>
            <ul>
              <li>Payment terms are as agreed upon at the time of order confirmation.</li>
              <li>For new customers, advance payment may be required.</li>
              <li>Late payments may attract interest charges as per applicable laws.</li>
            </ul>

            <h2>Delivery</h2>
            <ul>
              <li>Delivery timelines are estimated and may vary based on order complexity and volume.</li>
              <li>Dharmik Packaging is not liable for delays caused by circumstances beyond our control.</li>
              <li>Risk of loss or damage transfers to the buyer upon delivery at the agreed location.</li>
            </ul>

            <h2>Quality & Returns</h2>
            <ul>
              <li>All products undergo quality inspection before dispatch.</li>
              <li>Claims for defective products must be raised within 48 hours of delivery.</li>
              <li>Returns are accepted only for manufacturing defects, not for specification errors confirmed by the buyer.</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property 
              of Dharmik Packaging and is protected by applicable intellectual property laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Dharmik Packaging shall not be liable for any indirect, incidental, or consequential 
              damages arising from the use of our products or services beyond the value of the 
              specific order in question.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of India. Any disputes shall be subject 
              to the exclusive jurisdiction of the courts in Vadodara, Gujarat.
            </p>

            <h2>Contact</h2>
            <p>
              For questions regarding these Terms of Service, please contact us at 
              dharmikpackaging@gmail.com or call +91 99256 27417.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
