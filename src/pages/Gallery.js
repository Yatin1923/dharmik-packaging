import React, { useState } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import boxImage from '../assets/images/corrogated-box.webp';
import sheetImage from '../assets/images/corrogated-sheet.webp';
import rollImage from '../assets/images/corrogated-roll.webp';
import './Gallery.css';

const galleryItems = [
  { id: 1, image: boxImage, title: 'Custom Corrugated Boxes', category: 'Boxes' },
  { id: 2, image: sheetImage, title: 'Corrugated Sheet Production', category: 'Sheets' },
  { id: 3, image: rollImage, title: 'Corrugated Roll Manufacturing', category: 'Rolls' },
  { id: 4, image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', title: 'Packaging Warehouse', category: 'Facility' },
  { id: 5, image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80', title: 'Bulk Order Packaging', category: 'Boxes' },
  { id: 6, image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80', title: 'Manufacturing Process', category: 'Custom' },
];

const categories = ['All', 'Boxes', 'Sheets', 'Rolls', 'Facility', 'Custom'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Gallery' }]} />

      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">Our Work</p>
          <h1>Product Gallery</h1>
          <p>Explore our range of corrugated packaging products and manufacturing capabilities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${activeCategory === cat ? 'gallery-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                data-aos="fade-up"
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-item__overlay">
                  <h4>{item.title}</h4>
                  <span className="gallery-item__category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox__close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="gallery-lightbox__info">
              <h3>{selectedImage.title}</h3>
              <span>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="gallery-cta dark-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Want to See More?</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
            Contact us for samples or visit our manufacturing facility in Vadodara.
          </p>
          <Link to="/contact" className="btn-accent">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
