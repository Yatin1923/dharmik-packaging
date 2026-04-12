import React, { useState, useRef } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        formData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">Get In Touch</p>
          <h1>Contact Us</h1>
          <p>Have a question or need a packaging solution? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card" data-aos="fade-up">
              <div className="contact-info-card__icon">
                <LocationOnIcon />
              </div>
              <h4>Our Location</h4>
              <p>N.M. Patel Estate at & post Raniya,<br />Taluka Savli, Vadodara,<br />Gujarat, India</p>
            </div>
            <div className="contact-info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info-card__icon">
                <PhoneIcon />
              </div>
              <h4>Phone Number</h4>
              <p><a href="tel:+919925627417">+91 99256 27417</a></p>
            </div>
            <div className="contact-info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-info-card__icon">
                <EmailIcon />
              </div>
              <h4>Email Address</h4>
              <p><a href="mailto:dharmikpackaging@gmail.com">dharmikpackaging@gmail.com</a></p>
            </div>
            <div className="contact-info-card" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-info-card__icon">
                <AccessTimeIcon />
              </div>
              <h4>Business Hours</h4>
              <p>Monday - Saturday<br />9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrapper" data-aos="fade-right">
              <h3>Send Us a Message</h3>
              <p style={{ marginBottom: 'var(--space-xl)' }}>Fill out the form below and we'll get back to you as soon as possible.</p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input type="text" id="subject" name="subject" className="form-input" placeholder="How can we help?" value={formData.subject} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" className="form-input" placeholder="Tell us about your packaging needs..." value={formData.message} onChange={handleChange} required rows="5" />
                </div>
                <button type="submit" className="btn-primary contact-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <div className="contact-status contact-status--success">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="contact-status contact-status--error">
                    Failed to send message. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-map" data-aos="fade-left">
              <div className="contact-map__placeholder">
                <iframe
                  title="Dharmik Packaging Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8!2d73.3!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiTiA3M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 'var(--border-radius-md)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="contact-map__info">
                <h4>Visit Our Factory</h4>
                <p>We welcome you to visit our manufacturing facility. Schedule a visit to see our production process firsthand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
