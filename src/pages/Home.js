import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/productData';
import VerifiedIcon from '@mui/icons-material/Verified';
import TuneIcon from '@mui/icons-material/Tune';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpaIcon from '@mui/icons-material/Spa';
import StarIcon from '@mui/icons-material/Star';
import './Home.css';

const heroImage = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80';

const industries = [
  { name: 'Food & Beverages', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { name: 'Fruits & Vegetables', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80' },
  { name: 'FMCG', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80' },
  { name: 'Automobile', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80' },
  { name: 'Garments & Textiles', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80' },
  { name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80' },
];

const stats = [
  { number: '10+', label: 'Years of Experience' },
  { number: '500+', label: 'Happy Clients' },
  { number: '1M+', label: 'Boxes Delivered' },
  { number: '100%', label: 'Quality Commitment' },
];

const features = [
  {
    icon: <VerifiedIcon />,
    title: 'Premium Quality',
    description:
      'We use the finest raw materials and advanced manufacturing processes to ensure every product meets the highest quality standards.',
  },
  {
    icon: <TuneIcon />,
    title: 'Custom Solutions',
    description:
      'Tailored packaging to your exact specifications. From size and shape to printing and coatings, we deliver what you need.',
  },
  {
    icon: <LocalShippingIcon />,
    title: 'On-Time Delivery',
    description:
      'Reliable delivery schedules you can count on. We understand that timely delivery is critical to your business operations.',
  },
  {
    icon: <SpaIcon />,
    title: 'Eco-Friendly',
    description:
      '100% recyclable and biodegradable packaging solutions. We are committed to sustainable manufacturing practices.',
  },
];

const testimonials = [
  {
    quote:
      'Dharmik Packaging has been our go-to supplier for years. Consistent quality and reliable delivery.',
    name: 'Rajesh Patel',
    company: 'Food Processing Co.',
    rating: 5,
  },
  {
    quote:
      'The custom packaging solutions they provided helped us reduce damage during transit by 40%.',
    name: 'Sneha Mehta',
    company: 'E-commerce Business',
    rating: 5,
  },
  {
    quote:
      'Excellent customer service and competitive pricing. Highly recommend their corrugated boxes.',
    name: 'Vikram Shah',
    company: 'FMCG Brand',
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="page home-page">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__content" data-aos="fade-right">
            <p className="section-subtitle">Dharmik Packaging</p>
            <h1 className="hero__title">
              Packaging Excellence, <span>Delivered.</span>
            </h1>
            <p className="hero__tagline">Premium Corrugated Packaging Solutions</p>
            <p className="hero__description">
              Based in Vadodara, Gujarat, Dharmik Packaging is a leading manufacturer
              of high-quality corrugated boxes, sheets, and rolls. We combine
              cutting-edge technology with decades of expertise to deliver packaging
              solutions that protect your products and elevate your brand.
            </p>
            <div className="hero__actions">
              <Link to="/quote" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/products" className="btn-secondary">
                View Products
              </Link>
            </div>
          </div>
          <div className="hero__image" data-aos="fade-left">
            <div className="hero__image-wrapper">
              <img src={heroImage} alt="Corrugated packaging box" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Products Preview Section ===== */}
      <section className="section products-preview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">OUR PRODUCTS</p>
            <h2>What We Manufacture</h2>
            <p>
              From boxes to sheets to rolls, we provide end-to-end corrugated
              packaging solutions.
            </p>
          </div>
          <div className="products-preview__grid">
            {products.slice(0, 3).map((product, index) => (
              <Link
                to={`/products/${product.slug}`}
                className="card product-card"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-card__body">
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <span className="product-card__link">
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div
                className="stats__item"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="stats__number">{stat.number}</span>
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <section className="section why-choose">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">WHY CHOOSE US</p>
            <h2>Your Trusted Packaging Partner</h2>
          </div>
          <div className="why-choose__grid">
            {features.map((feature, index) => (
              <div
                className="card why-choose__card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="why-choose__icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Industries Preview Section ===== */}
      <section className="section industries-preview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">INDUSTRIES WE SERVE</p>
            <h2>Packaging for Every Industry</h2>
          </div>
          <div className="industries-preview__grid">
            {industries.map((industry, index) => (
              <div
                className="industry-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img src={industry.image} alt={industry.name} />
                <div className="industry-card__overlay">
                  <h4>{industry.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="industries-preview__cta" data-aos="fade-up">
            <Link to="/industries" className="btn-secondary">
              View All Industries <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">TESTIMONIALS</p>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div
                className="card testimonial-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="testimonial-card__quote">&ldquo;</div>
                <p className="testimonial-card__text">{testimonial.quote}</p>
                <div className="testimonial-card__stars">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <StarIcon key={i} className="testimonial-card__star" style={{ fontSize: '20px', color: '#F5C485' }} />
                  ))}
                </div>
                <div className="testimonial-card__author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className="cta-banner dark-section">
        <div className="container">
          <div className="cta-banner__content" data-aos="fade-up">
            <h2>Ready to Package Your Products?</h2>
            <p>Get a custom quote tailored to your packaging needs.</p>
            <div className="cta-banner__actions">
              <Link to="/quote" className="btn-white">
                Get a Quote
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
