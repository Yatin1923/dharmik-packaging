import React, { useState } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';
import CheckIcon from '@mui/icons-material/Check';
import './Quote.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    dimensions: '',
    material: '',
    printing: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.QUOTE_TEMPLATE_ID,
        formData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus('success');
      setFormData({
        name: '', company: '', email: '', phone: '',
        product: '', quantity: '', dimensions: '', material: '',
        printing: '', message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">Get Started</p>
          <h1>Request a Quote</h1>
          <p>Fill in the details below and our team will get back to you within 24 hours with a customized quote.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote-layout">
            <div className="quote-form-wrapper" data-aos="fade-right">
              <h3>Tell Us About Your Requirements</h3>
              <form onSubmit={handleSubmit} className="quote-form">
                <div className="quote-form__row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" className="form-input" placeholder="Your company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>
                <div className="quote-form__row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="quote-form__row">
                  <div className="form-group">
                    <label htmlFor="product">Product Type *</label>
                    <select id="product" name="product" className="form-input" value={formData.product} onChange={handleChange} required>
                      <option value="">Select a product</option>
                      <option value="Corrugated Boxes">Corrugated Boxes</option>
                      <option value="Corrugated Sheets">Corrugated Sheets</option>
                      <option value="Corrugated Rolls">Corrugated Rolls</option>
                      <option value="Custom Packaging">Custom Packaging</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Estimated Quantity</label>
                    <input type="text" id="quantity" name="quantity" className="form-input" placeholder="e.g., 1000 pieces" value={formData.quantity} onChange={handleChange} />
                  </div>
                </div>
                <div className="quote-form__row">
                  <div className="form-group">
                    <label htmlFor="dimensions">Dimensions (L x W x H)</label>
                    <input type="text" id="dimensions" name="dimensions" className="form-input" placeholder="e.g., 12 x 8 x 6 inches" value={formData.dimensions} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="material">Material Preference</label>
                    <select id="material" name="material" className="form-input" value={formData.material} onChange={handleChange}>
                      <option value="">Select material</option>
                      <option value="Virgin Kraft">Virgin Kraft Paper</option>
                      <option value="Recycled">Recycled Paper</option>
                      <option value="White Top">White Top Liner</option>
                      <option value="No Preference">No Preference</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="printing">Printing Requirements</label>
                  <select id="printing" name="printing" className="form-input" value={formData.printing} onChange={handleChange}>
                    <option value="">Select printing option</option>
                    <option value="No Printing">No Printing</option>
                    <option value="Single Color">Single Color</option>
                    <option value="Multi Color">Multi Color</option>
                    <option value="Full Color">Full Color (Offset/Digital)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea id="message" name="message" className="form-input" placeholder="Any special requirements, delivery timeline, or other details..." value={formData.message} onChange={handleChange} rows="4" />
                </div>
                <button type="submit" className="btn-primary quote-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Quote Request'}
                </button>
                {status === 'success' && (
                  <div className="quote-status quote-status--success">
                    Thank you! Your quote request has been submitted. We'll get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="quote-status quote-status--error">
                    Something went wrong. Please try again or contact us directly at +91 99256 27417.
                  </div>
                )}
              </form>
            </div>

            <div className="quote-sidebar" data-aos="fade-left">
              <div className="quote-sidebar__card">
                <h4>Why Choose Us?</h4>
                <ul className="quote-sidebar__list">
                  <li><span className="quote-sidebar__check"><CheckIcon style={{ fontSize: '18px' }} /></span> Custom sizes and specifications</li>
                  <li><span className="quote-sidebar__check"><CheckIcon style={{ fontSize: '18px' }} /></span> Competitive pricing</li>
                  <li><span className="quote-sidebar__check"><CheckIcon style={{ fontSize: '18px' }} /></span> Quick turnaround time</li>
                  <li><span className="quote-sidebar__check"><CheckIcon style={{ fontSize: '18px' }} /></span> Free samples available</li>
                  <li><span className="quote-sidebar__check"><CheckIcon style={{ fontSize: '18px' }} /></span> Minimum order flexibility</li>
                  <li><span className="quote-sidebar__check"><CheckIcon style={{ fontSize: '18px' }} /></span> Pan-India delivery</li>
                </ul>
              </div>
              <div className="quote-sidebar__card">
                <h4>Need Help?</h4>
                <p>Call us directly for immediate assistance:</p>
                <a href="tel:+919925627417" className="quote-sidebar__phone">+91 99256 27417</a>
                <p style={{ marginTop: 'var(--space-md)' }}>Or email us at:</p>
                <a href="mailto:dharmikpackaging@gmail.com" className="quote-sidebar__email">dharmikpackaging@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
