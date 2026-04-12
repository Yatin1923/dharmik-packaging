import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsDropdown(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleMobileDropdown = (e) => {
    if (window.innerWidth < 968) {
      e.preventDefault();
      setProductsDropdown((prev) => !prev);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-primary">Dharmik</span>
          <span className="navbar__logo-secondary">Packaging</span>
        </Link>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          <button
            className="navbar__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>

          <ul className="navbar__links">
            <li>
              <Link
                to="/"
                className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`navbar__link ${isActive('/about') ? 'navbar__link--active' : ''}`}
              >
                About
              </Link>
            </li>
            <li
              className="navbar__dropdown"
              onMouseEnter={() => {
                if (window.innerWidth >= 968) setProductsDropdown(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 968) setProductsDropdown(false);
              }}
            >
              <Link
                to="/products"
                className={`navbar__link ${isActive('/products') ? 'navbar__link--active' : ''}`}
                onClick={toggleMobileDropdown}
              >
                Products{' '}
                <KeyboardArrowDownIcon
                  className={`navbar__arrow ${productsDropdown ? 'navbar__arrow--open' : ''}`}
                />
              </Link>
              <ul
                className={`navbar__dropdown-menu ${
                  productsDropdown ? 'navbar__dropdown-menu--open' : ''
                }`}
              >
                <li>
                  <Link to="/products/corrugated-boxes" className="navbar__dropdown-link">
                    Corrugated Boxes
                  </Link>
                </li>
                <li>
                  <Link to="/products/corrugated-sheets" className="navbar__dropdown-link">
                    Corrugated Sheets
                  </Link>
                </li>
                <li>
                  <Link to="/products/corrugated-rolls" className="navbar__dropdown-link">
                    Corrugated Rolls
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="navbar__dropdown-link navbar__dropdown-link--all"
                  >
                    View All Products
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/industries"
                className={`navbar__link ${isActive('/industries') ? 'navbar__link--active' : ''}`}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`navbar__link ${isActive('/gallery') ? 'navbar__link--active' : ''}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/quality"
                className={`navbar__link ${isActive('/quality') ? 'navbar__link--active' : ''}`}
              >
                Quality
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`navbar__link ${isActive('/contact') ? 'navbar__link--active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/quote" className="navbar__cta" onClick={() => setIsOpen(false)}>
            Get a Quote
          </Link>
        </nav>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--hidden' : ''}`}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>

      {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navbar;
