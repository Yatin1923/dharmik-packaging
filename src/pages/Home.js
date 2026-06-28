import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/productData';
import VerifiedIcon from '@mui/icons-material/Verified';
import TuneIcon from '@mui/icons-material/Tune';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpaIcon from '@mui/icons-material/Spa';
import StarIcon from '@mui/icons-material/Star';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Home.css';

/* ---------- Hero slider data ---------- */
const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Dharmik Packaging Industries',
    title: 'Packaging Excellence,',
    titleAccent: 'Delivered.',
    description:
      'With more than two decades of experience, Dharmik Packaging Industries delivers high-quality corrugated packaging solutions with reliability and precision.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Corrugated Boxes',
    title: 'Built to Protect,',
    titleAccent: 'Designed to Impress.',
    description:
      'Premium corrugated boxes engineered for strength, stackability, and brand-ready printing across every industry we serve.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'In-House Manufacturing',
    title: 'Modern Production,',
    titleAccent: 'Consistent Quality.',
    description:
      'Automated corrugation, precision die-cutting, and rigorous quality control across every stage of production.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1530939027401-9e8e7a1d3e1c?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Industrial Scale',
    title: 'Reliable Supply,',
    titleAccent: 'On Every Order.',
    description:
      'High-volume capacity and disciplined logistics so your shelves and shipments are never held up.',
  },
];

/* ---------- Animated counter ---------- */
const Counter = ({ target, suffix = '', duration = 1800 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(step);
              else setValue(target);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted =
    target >= 1_000_000
      ? `${(value / 1_000_000).toFixed(value >= 1_000_000 ? 0 : 1)}M`
      : value.toLocaleString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
};

const industries = [
  { name: 'Food & Beverages', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { name: 'Fruits & Vegetables', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80' },
  { name: 'FMCG', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80' },
  { name: 'Automobile', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80' },
  { name: 'Garments & Textiles', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80' },
  { name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80' },
];

const stats = [
  { target: 26, suffix: '+', label: 'Years of Experience' },
  { target: 100, suffix: '+', label: 'Happy Clients' },
  { target: 100_000_000, suffix: 'M+', label: 'Boxes Delivered' },
  { target: 100, suffix: '%', label: 'Quality Commitment' },
];

const features = [
  { icon: <VerifiedIcon />, title: 'Premium Quality', description: 'We use the finest raw materials and advanced manufacturing processes to ensure every product meets the highest quality standards.' },
  { icon: <TuneIcon />, title: 'Custom Solutions', description: 'Tailored packaging to your exact specifications. From size and shape to printing and coatings, we deliver what you need.' },
  { icon: <LocalShippingIcon />, title: 'On-Time Delivery', description: 'Reliable delivery schedules you can count on. We understand that timely delivery is critical to your business operations.' },
  { icon: <SpaIcon />, title: 'Eco-Friendly', description: '100% recyclable and biodegradable packaging solutions. We are committed to sustainable manufacturing practices.' },
];

const testimonials = [
  { quote: 'Dharmik Packaging Industries has been our go-to supplier for years. Consistent quality and reliable delivery.', name: 'Rajesh Patel', company: 'Food Processing Co.', rating: 5 },
  { quote: 'The custom packaging solutions they provided helped us reduce damage during transit by 40%.', name: 'Sneha Mehta', company: 'E-commerce Business', rating: 5 },
  { quote: 'Excellent customer service and competitive pricing. Highly recommend their corrugated boxes.', name: 'Vikram Shah', company: 'FMCG Brand', rating: 5 },
];

/* ---------- Hero Slider component ---------- */
const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;
  const timerRef = useRef(null);

  const goTo = (i) => setIndex(((i % total) + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
  };

  return (
    <section
      className="hero-slider"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-roledescription="carousel"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? 'hero-slide--active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== index}
        >
          <div className="hero-slide__overlay" />
          <div className="container hero-slide__container">
            <div className="hero-slide__content">
              <p className="hero-slide__eyebrow">{slide.eyebrow}</p>
              <h1 className="hero-slide__title">
                {slide.title} <span>{slide.titleAccent}</span>
              </h1>
              <p className="hero-slide__description">{slide.description}</p>
              <div className="hero-slide__actions">
                <Link to="/quote" className="btn-primary">Request a Quote</Link>
                <Link to="/products" className="btn-outline-white">View Products</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="hero-slider__arrow hero-slider__arrow--left" onClick={prev} aria-label="Previous slide">
        <ChevronLeftIcon />
      </button>
      <button className="hero-slider__arrow hero-slider__arrow--right" onClick={next} aria-label="Next slide">
        <ChevronRightIcon />
      </button>

      <div className="hero-slider__dots" role="tablist">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-slider__dot ${i === index ? 'hero-slider__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="page home-page">
      {/* ===== Hero Slider ===== */}
      <HeroSlider />

      {/* ===== Products Preview Section ===== */}
      <section className="section products-preview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">OUR PRODUCTS</p>
            <h2>What We Manufacture</h2>
            <p>From boxes to sheets to rolls, we provide end-to-end corrugated packaging solutions.</p>
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
                <span className="stats__number">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </span>
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

      {/* ===== Standards & Compliance ===== */}
      <section className="section standards">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">CERTIFICATIONS</p>
            <h2>Standards &amp; Compliance</h2>
            <p>We adhere to recognised quality and safety standards across our operations.</p>
          </div>
          <div className="standards__grid">
            <div className="standards__card" data-aos="fade-up">
              <div className="standards__badge">
                <WorkspacePremiumIcon style={{ fontSize: '36px' }} />
              </div>
              <h3>ISO 9001:2015</h3>
              <p>Compliant with the international standard for quality management systems, ensuring consistent product quality and continual improvement.</p>
              <span className="standards__chip">Compliant</span>
            </div>
            <div className="standards__card" data-aos="fade-up" data-aos-delay="100">
              <div className="standards__badge">
                <VerifiedUserIcon style={{ fontSize: '36px' }} />
              </div>
              <h3>BIS Standards</h3>
              <p>Manufactured in compliance with Bureau of Indian Standards specifications for corrugated packaging materials and performance.</p>
              <span className="standards__chip">Compliant</span>
            </div>
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

      {/* ===== Location / Map ===== */}
      <section className="section location-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">VISIT US</p>
            <h2>Our Location</h2>
            <p>Come tour our manufacturing facility or get in touch to schedule a visit.</p>
          </div>
          <div className="location-grid">
            <div className="location-info" data-aos="fade-right">
              <div className="location-info__row">
                <LocationOnIcon />
                <div>
                  <h4>Address</h4>
                  <p>Patel Estate, N. M., At. Po. Raniya, Savli, Gujarat 391780</p>
                </div>
              </div>
              <a
                className="btn-primary"
                href="https://maps.app.goo.gl/YFPGo6MkmexVVyr96"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
            <div className="location-map" data-aos="fade-left">
              <iframe
                title="Dharmik Packaging Industries Location"
                src="https://www.google.com/maps?q=Dharmik+Packaging+Industries,+Raniya,+Savli,+Gujarat+391780&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 'var(--border-radius-md)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
              <Link to="/quote" className="btn-white">Get a Quote</Link>
              <Link to="/contact" className="btn-outline-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
