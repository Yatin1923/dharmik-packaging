import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import './Industries.css';

const industries = [
  {
    name: 'Food & Beverages',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    description: 'Safe, hygienic, and durable corrugated packaging for food products, beverages, and catering supplies. Our food-grade packaging ensures your products stay fresh and protected.',
    applications: ['Bakery boxes', 'Beverage carriers', 'Frozen food packaging', 'Catering trays'],
  },
  {
    name: 'Fruits & Vegetables',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80',
    description: 'Ventilated and sturdy boxes designed to keep fruits and vegetables fresh during transport. Custom sizing to minimize bruising and damage.',
    applications: ['Ventilated produce boxes', 'Stackable crates', 'Export packaging', 'Display trays'],
  },
  {
    name: 'FMCG',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
    description: 'High-volume packaging solutions for fast-moving consumer goods. From shelf-ready packaging to transit boxes, we handle it all.',
    applications: ['Shelf-ready packaging', 'Multi-pack cartons', 'Transit outers', 'Promotional displays'],
  },
  {
    name: 'Automobile Industry',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
    description: 'Heavy-duty corrugated packaging for automotive parts and components. Engineered for maximum protection during storage and shipping.',
    applications: ['Auto parts boxes', 'Component dividers', 'Heavy-duty crates', 'Export packaging'],
  },
  {
    name: 'Garments & Textiles',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    description: 'Clean, presentable packaging for garments and textile products. Custom printing options to enhance your brand presentation.',
    applications: ['Garment boxes', 'Shirt packaging', 'Textile rolls protection', 'Gift boxes'],
  },
  {
    name: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
    description: 'Elegant and protective packaging for cosmetics, toiletries, and personal care products. Premium finish options available.',
    applications: ['Cosmetic boxes', 'Gift sets packaging', 'Product displays', 'Shipping protection'],
  },
];

const Industries = () => {
  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Industries' }]} />

      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">Industries We Serve</p>
          <h1>Packaging for Every Industry</h1>
          <p>We provide specialized corrugated packaging solutions tailored to the unique needs of diverse industries.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="industry-card__image">
                  <img src={industry.image} alt={industry.name} />
                  <div className="industry-card__overlay">
                    <h3>{industry.name}</h3>
                  </div>
                </div>
                <div className="industry-card__content">
                  <p>{industry.description}</p>
                  <div className="industry-card__apps">
                    <h5>Key Applications:</h5>
                    <ul>
                      {industry.applications.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="industries-cta dark-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Don't See Your Industry?</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
            We cater to many more industries. Get in touch to discuss your specific packaging requirements.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/quote" className="btn-accent">Get a Custom Quote</Link>
            <Link to="/contact" className="btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
