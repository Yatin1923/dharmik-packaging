import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './About.css';

const aboutImage = 'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80';

const About = () => {
  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">About Us</p>
          <h1>About Dharmik Packaging Industries</h1>
          <p>More than two decades of crafting premium corrugated packaging solutions with dedication, quality, and innovation.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__image" data-aos="fade-right">
              <img src={aboutImage} alt="Dharmik Packaging Industries factory operations" />
            </div>
            <div className="about-story__content" data-aos="fade-left">
              <p className="section-subtitle">Our Story</p>
              <h2>A Legacy of Packaging Excellence</h2>
              <p>
                Founded in Gujarat, Dharmik Packaging Industries has grown over more than two decades
                from a small family enterprise into a trusted manufacturer of corrugated packaging
                solutions. Our journey began with a simple mission: to provide businesses with
                packaging that truly protects their products and represents their brand.
              </p>
              <p>
                Our modern manufacturing facility is equipped with state-of-the-art machinery that
                enables us to produce high-quality corrugated boxes, sheets, and rolls. We serve
                businesses across Gujarat and beyond, delivering packaging solutions that meet the
                highest standards of quality and durability.
              </p>
              <p>
                What sets us apart is our unwavering commitment to customer satisfaction. We work closely
                with each client to understand their unique requirements and deliver tailored solutions
                that exceed expectations. Whether you need standard shipping boxes or custom-printed
                retail packaging, our team has the expertise and equipment to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about-mission-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Purpose</p>
            <h2>Mission & Vision</h2>
          </div>
          <div className="about-mission-grid">
            <div className="about-mission-card" data-aos="fade-right">
              <div className="about-mission-card__icon"><TrackChangesIcon style={{ fontSize: '40px' }} /></div>
              <h3>Our Mission</h3>
              <p>
                To deliver premium corrugated packaging solutions that protect products, enhance brands,
                and promote sustainability, while maintaining the highest standards of quality and
                customer service.
              </p>
            </div>
            <div className="about-mission-card" data-aos="fade-left">
              <div className="about-mission-card__icon"><VisibilityIcon style={{ fontSize: '40px' }} /></div>
              <h3>Our Vision</h3>
              <p>
                To be Gujarat's most trusted and innovative corrugated packaging manufacturer, setting
                industry benchmarks in quality, efficiency, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What We Stand For</p>
            <h2>Our Core Values</h2>
          </div>
          <div className="about-values-grid">
            <div className="about-value-card" data-aos="fade-up">
              <div className="about-value-card__number">01</div>
              <h4>Quality First</h4>
              <p>Every product undergoes rigorous quality checks to ensure it meets our exacting standards before reaching your hands.</p>
            </div>
            <div className="about-value-card" data-aos="fade-up" data-aos-delay="100">
              <div className="about-value-card__number">02</div>
              <h4>Customer Focus</h4>
              <p>We listen, understand, and deliver beyond expectations. Your packaging needs drive everything we do.</p>
            </div>
            <div className="about-value-card" data-aos="fade-up" data-aos-delay="200">
              <div className="about-value-card__number">03</div>
              <h4>Innovation</h4>
              <p>Continuously improving our processes and products to provide you with the most effective packaging solutions.</p>
            </div>
            <div className="about-value-card" data-aos="fade-up" data-aos-delay="300">
              <div className="about-value-card__number">04</div>
              <h4>Sustainability</h4>
              <p>Committed to eco-friendly packaging solutions. All our products are 100% recyclable and biodegradable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section about-process-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">How We Work</p>
            <h2>Our Process</h2>
            <p>From consultation to delivery, we ensure a seamless experience at every step.</p>
          </div>
          <div className="about-process-grid">
            <div className="about-process-step" data-aos="fade-up">
              <div className="about-process-step__number">1</div>
              <h4>Consultation</h4>
              <p>We discuss your packaging requirements, understand your products, and recommend the best solutions.</p>
            </div>
            <div className="about-process-step" data-aos="fade-up" data-aos-delay="100">
              <div className="about-process-step__number">2</div>
              <h4>Design</h4>
              <p>Custom design and specifications tailored to your exact needs, including size, material, and printing.</p>
            </div>
            <div className="about-process-step" data-aos="fade-up" data-aos-delay="200">
              <div className="about-process-step__number">3</div>
              <h4>Manufacturing</h4>
              <p>Precision manufacturing with rigorous quality control at every stage of production.</p>
            </div>
            <div className="about-process-step" data-aos="fade-up" data-aos-delay="300">
              <div className="about-process-step__number">4</div>
              <h4>Delivery</h4>
              <p>Timely delivery to your doorstep with careful handling and packaging of your order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta dark-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Partner with Us</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
            Ready to elevate your packaging? Let's discuss how we can help protect and present your products.
          </p>
          <div className="about-cta__actions">
            <Link to="/quote" className="btn-white">Request a Quote</Link>
            <Link to="/contact" className="btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
