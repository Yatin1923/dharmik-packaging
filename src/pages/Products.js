import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { products } from '../utils/productData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import './Products.css';

const Products = () => {
  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Products' }]} />

      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">Our Products</p>
          <h1>Corrugated Packaging Solutions</h1>
          <p>Explore our range of high-quality corrugated packaging products designed for strength, protection, and sustainability.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={product.id} className="product-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-card__overlay">
                    <Link to={`/products/${product.slug}`} className="btn-primary">
                      View Details <ArrowForwardIcon style={{ fontSize: '18px' }} />
                    </Link>
                  </div>
                </div>
                <div className="product-card__content">
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <div className="product-card__features">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="product-card__feature">
                        <span className="product-card__check"><CheckIcon style={{ fontSize: '16px' }} /></span> {feature}
                      </span>
                    ))}
                  </div>
                  <Link to={`/products/${product.slug}`} className="product-card__link">
                    Learn More <ArrowForwardIcon style={{ fontSize: '16px' }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta dark-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Need Custom Packaging?</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
            We create custom corrugated packaging solutions tailored to your exact specifications.
          </p>
          <Link to="/quote" className="btn-white">Request a Custom Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
