import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__col footer__company">
            <div className="footer__logo">
              <span className="footer__logo-primary">Dharmik</span>
              <span className="footer__logo-secondary">Packaging Industries</span>
            </div>
            <p className="footer__description">
              With more than two decades of experience, Dharmik Packaging Industries
              is a trusted manufacturer of premium corrugated boxes, sheets, and
              rolls — delivering quality, reliability, and innovation.
            </p>
            <div className="footer__social">
              <button className="footer__social-link" aria-label="Facebook" onClick={() => {}}>
                <FacebookIcon />
              </button>
              <button className="footer__social-link" aria-label="Instagram" onClick={() => {}}>
                <InstagramIcon />
              </button>
              <button className="footer__social-link" aria-label="LinkedIn" onClick={() => {}}>
                <LinkedInIcon />
              </button>
              <button className="footer__social-link" aria-label="Twitter" onClick={() => {}}>
                <TwitterIcon />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/industries">Industries</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/quality">Quality</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__heading">Our Products</h4>
            <ul className="footer__links">
              <li>
                <Link to="/products/corrugated-boxes">Corrugated Boxes</Link>
              </li>
              <li>
                <Link to="/products/corrugated-sheets">Corrugated Sheets</Link>
              </li>
              <li>
                <Link to="/products/corrugated-rolls">Corrugated Rolls</Link>
              </li>
              <li>
                <Link to="/quote">Request a Quote</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__contact">
              <li>
                <LocationOnIcon className="footer__contact-icon" />
                <span>
                  Ahmedabad, Gujarat, India
                </span>
              </li>
              <li>
                <PhoneIcon className="footer__contact-icon" />
                <span>
                  <a href="tel:+919925627417">+91 99256 27417</a>
                  <br />
                  <a href="tel:+918849307823">+91 88493 07823</a>
                </span>
              </li>
              <li>
                <EmailIcon className="footer__contact-icon" />
                <a href="mailto:dharmikpackagingind@gmail.com">dharmikpackagingind@gmail.com</a>
              </li>
              <li>
                <AccessTimeIcon className="footer__contact-icon" />
                <span>
                  <strong>Business Hours</strong>
                  <br />
                  Mon – Sat · 8:30 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom-content">
            <p>&copy; {currentYear} Dharmik Packaging Industries. All rights reserved.</p>
            <div className="footer__bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
