import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQ.css';

const faqData = [
  {
    category: 'Ordering & Pricing',
    questions: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'Our minimum order quantity varies by product type. For standard corrugated boxes, the MOQ is typically 100 pieces. For custom-printed boxes, the MOQ starts at 500 pieces. Contact us for specific requirements.',
      },
      {
        q: 'How do I get a price quote?',
        a: 'You can request a quote through our online form on the Request a Quote page, call us at +91 99256 27417, or email us at dharmikpackaging@gmail.com. We typically respond within 24 hours.',
      },
      {
        q: 'Do you offer bulk pricing discounts?',
        a: 'Yes, we offer competitive pricing for bulk orders. The more you order, the better the per-unit price. Contact our sales team for a customized quote based on your volume requirements.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers (NEFT/RTGS), cheques, UPI payments, and cash. For regular customers, we also offer credit terms based on mutual agreement.',
      },
    ],
  },
  {
    category: 'Products & Customization',
    questions: [
      {
        q: 'Can you create custom-sized boxes?',
        a: 'Absolutely! We specialize in custom packaging solutions. We can manufacture corrugated boxes, sheets, and rolls in virtually any size and specification to meet your exact requirements.',
      },
      {
        q: 'What types of printing do you offer?',
        a: 'We offer flexographic printing (1-3 colors), offset printing for high-quality multi-color graphics, and can accommodate digital printing for short runs. We can print your logo, product information, handling instructions, and more.',
      },
      {
        q: 'What flute types are available?',
        a: 'We offer all standard flute types including A-flute, B-flute, C-flute, E-flute, and F-flute, as well as double-wall combinations like BC and BE flutes. Our team can recommend the best flute type for your application.',
      },
      {
        q: 'Can I get samples before placing a bulk order?',
        a: 'Yes, we provide free samples for standard products. For custom specifications, we can create samples at a nominal cost which is adjusted against your bulk order.',
      },
    ],
  },
  {
    category: 'Delivery & Shipping',
    questions: [
      {
        q: 'What is the typical lead time for orders?',
        a: 'Standard orders are typically fulfilled within 5-7 business days. Custom-printed orders may take 7-10 business days. Rush orders can be accommodated based on production capacity — just let us know your timeline.',
      },
      {
        q: 'Do you deliver across India?',
        a: 'Yes, we deliver across India. We have regular transport routes to major cities in Gujarat and can arrange delivery anywhere in the country through our logistics partners.',
      },
      {
        q: 'Is there a delivery charge?',
        a: 'Delivery charges depend on the order quantity and destination. For bulk orders within Gujarat, we often offer free delivery. Contact us for specific delivery costs to your location.',
      },
    ],
  },
  {
    category: 'Quality & Sustainability',
    questions: [
      {
        q: 'What quality standards do your products meet?',
        a: 'Our products comply with BIS (Bureau of Indian Standards) specifications. We conduct burst strength tests, ECT (Edge Crush Tests), and moisture resistance tests on every batch. We are also working towards ISO 9001:2015 certification.',
      },
      {
        q: 'Are your products eco-friendly?',
        a: 'Yes! All our corrugated packaging products are 100% recyclable and biodegradable. We use sustainable sourcing practices and offer packaging made from recycled materials.',
      },
      {
        q: 'Are your packaging materials food-safe?',
        a: 'We offer FSSAI-compliant packaging materials suitable for food contact. Please specify your food packaging requirements when requesting a quote so we can recommend the appropriate materials.',
      },
    ],
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
    <button className="faq-item__question" onClick={onClick}>
      <span>{question}</span>
      <ExpandMoreIcon className={`faq-item__icon ${isOpen ? 'faq-item__icon--open' : ''}`} />
    </button>
    <div className="faq-item__answer">
      <p>{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIdx, questionIdx) => {
    const key = `${categoryIdx}-${questionIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'FAQ' }]} />

      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">Help Center</p>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our products, ordering process, and more.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-content">
            {faqData.map((category, catIdx) => (
              <div key={catIdx} className="faq-category" data-aos="fade-up">
                <h3 className="faq-category__title">{category.category}</h3>
                <div className="faq-category__items">
                  {category.questions.map((item, qIdx) => (
                    <FAQItem
                      key={qIdx}
                      question={item.q}
                      answer={item.a}
                      isOpen={openItems[`${catIdx}-${qIdx}`]}
                      onClick={() => toggleItem(catIdx, qIdx)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Still Have Questions?</h2>
          <p>Our team is ready to help you with any questions about our packaging solutions.</p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <a href="tel:+919925627417" className="btn-secondary">Call +91 99256 27417</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
