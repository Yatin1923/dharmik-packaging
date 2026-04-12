import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
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
              <span className="footer__logo-secondary">Packaging</span>
            </div>
            <p className="footer__description">
              Leading manufacturer of premium corrugated packaging solutions.
              Delivering quality, reliability, and innovation since establishment.
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
                  N.M. Patel Estate at &amp; post Raniya, Taluka Savli, Vadodara, Gujarat
                </span>
              </li>
              <li>
                <PhoneIcon className="footer__contact-icon" />
                <a href="tel:+919925627417">+91 99256 27417</a>
              </li>
              <li>
                <EmailIcon className="footer__contact-icon" />
                <a href="mailto:dharmikpackaging@gmail.com">dharmikpackaging@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom-content">
            <p>&copy; {currentYear} Dharmik Packaging. All rights reserved.</p>
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
