import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="footer-logo">
            Fortuna Admissions
          </Link>
          <a href="mailto:info@fortunaadmissions.com" className="footer-email">
            info@fortunaadmissions.com
          </a>
        </div>
        <div className="footer-content">
          {/* Column 1 - College */}
          <div className="footer-column">
            <h4 className="footer-heading">College</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/college/team">Meet The Team</Link>
              </li>
              <li>
                <Link to="/college">Services</Link>
              </li>
              <li>
                <Link to="/college/free-consultation">Free Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Business School */}
          <div className="footer-column">
            <h4 className="footer-heading">Business School</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/mba/team">Meet The Team</Link>
              </li>
              <li>
                <Link to="/mba">Services</Link>
              </li>
              <li>
                <Link to="/mba/free-consultation">Free Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Law School */}
          <div className="footer-column">
            <h4 className="footer-heading">Law School</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/law/team">Meet The Team</Link>
              </li>
              <li>
                <Link to="/law">Services</Link>
              </li>
              <li>
                <Link to="/law/free-consultation">Free Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-column footer-social-column">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-social">
              <a
                href="https://twitter.com/fortunaadmissions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com/fortunaadmissions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/fortunaadmissions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/fortunaadmissions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com/@fortunaadmissions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="social-icon"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Fortuna Admissions. All Rights Reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer-separator">|</span>
            <Link to="/terms-of-service">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
