import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { getProductBySlug, products } from '../utils/productData';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const otherProducts = products.filter(p => p.slug !== slug);

  return (
    <div className="page">
      <Breadcrumbs items={[
        { label: 'Products', path: '/products' },
        { label: product.name }
      ]} />

      {/* Product Hero */}
      <section className="product-detail-hero">
        <div className="container">
          <div className="product-detail-hero__grid">
            <div className="product-detail-hero__image" data-aos="fade-right">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-hero__content" data-aos="fade-left">
              <p className="section-subtitle">Product Details</p>
              <h1>{product.name}</h1>
              <p className="product-detail-hero__desc">{product.description}</p>
              <Link to="/quote" className="btn-primary">
                Request a Quote <ArrowForwardIcon style={{ fontSize: '18px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Features</p>
            <h2>Key Features</h2>
          </div>
          <div className="product-features-grid">
            {product.features.map((feature, index) => (
              <div key={index} className="product-feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <CheckCircleIcon style={{ color: 'var(--primary)', fontSize: '24px', flexShrink: 0 }} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section product-specs-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Technical Details</p>
            <h2>Specifications</h2>
          </div>
          <div className="product-specs-table">
            {product.specifications.map((spec, index) => (
              <div key={index} className="product-spec-row" data-aos="fade-up" data-aos-delay={index * 50}>
                <span className="product-spec-label">{spec.label}</span>
                <span className="product-spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Use Cases</p>
            <h2>Applications</h2>
          </div>
          <div className="product-applications-grid">
            {product.applications.map((app, index) => (
              <div key={index} className="product-application-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <span className="product-application-number">{String(index + 1).padStart(2, '0')}</span>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="section product-other-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Explore More</p>
            <h2>Other Products</h2>
          </div>
          <div className="product-other-grid">
            {otherProducts.map((p) => (
              <Link key={p.id} to={`/products/${p.slug}`} className="product-other-card">
                <div className="product-other-card__image">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="product-other-card__content">
                  <h4>{p.name}</h4>
                  <p>{p.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-detail-cta dark-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Interested in {product.name}?</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
            Get a custom quote with specifications tailored to your needs.
          </p>
          <Link to="/quote" className="btn-white">Get a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
