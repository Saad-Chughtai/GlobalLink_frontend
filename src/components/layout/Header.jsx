import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import PropTypes from 'prop-types';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('.nav-dropdown')
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeDropdown]);

  // Navigation items with dropdowns
  const navItems = [
    {
      label: 'College',
      key: 'college',
      services: '/college',
      team: '/college/team',
      resources: '/blog',
      consultation: '/college/free-consultation',
    },
    {
      label: 'MBA',
      key: 'mba',
      services: '/mba',
      team: '/mba/team',
      resources: '/blog',
      consultation: '/mba/free-consultation',
    },
    {
      label: 'Law School',
      key: 'law',
      services: '/law',
      team: '/law/team',
      resources: '/blog',
      consultation: '/law/free-consultation',
    },
  ];

  const handleDropdownToggle = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleDropdownMouseEnter = (key) => {
    if (window.innerWidth > 768) {
      setActiveDropdown(key);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`header ${isSticky ? 'sticky' : ''}`}
      >
        <div className="container">
          <nav className="nav">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              Fortuna Admissions
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-links">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="nav-dropdown"
                  onMouseEnter={() => handleDropdownMouseEnter(item.key)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    className="nav-dropdown-toggle"
                    onClick={() => handleDropdownToggle(item.key)}
                    aria-expanded={activeDropdown === item.key}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <FiChevronDown
                      className={`dropdown-icon ${
                        activeDropdown === item.key ? 'open' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === item.key && (
                    <div
                      ref={dropdownRef}
                      className="dropdown-menu"
                      onMouseLeave={() => {
                        if (window.innerWidth > 768) {
                          setActiveDropdown(null);
                        }
                      }}
                    >
                      <Link
                        to={item.services}
                        onClick={() => {
                          setActiveDropdown(null);
                          closeMobileMenu();
                        }}
                      >
                        Services
                      </Link>
                      <Link
                        to={item.team}
                        onClick={() => {
                          setActiveDropdown(null);
                          closeMobileMenu();
                        }}
                      >
                        Team
                      </Link>
                      <Link
                        to={item.resources}
                        onClick={() => {
                          setActiveDropdown(null);
                          closeMobileMenu();
                        }}
                      >
                        Resources
                      </Link>
                      <Link
                        to={item.consultation}
                        onClick={() => {
                          setActiveDropdown(null);
                          closeMobileMenu();
                        }}
                        className="dropdown-cta"
                      >
                        Free Consultation
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Free Consultation Button (Desktop) */}
            <Link
              to="/free-consultation"
              className="cta-button desktop-cta"
              onClick={closeMobileMenu}
            >
              Free Consultation
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={closeMobileMenu}
          navItems={navItems}
          activeDropdown={activeDropdown}
          onDropdownToggle={handleDropdownToggle}
        />
      )}
    </>
  );
};

// Header component has no props, so PropTypes validation is not applicable
Header.propTypes = {};

export default Header;
