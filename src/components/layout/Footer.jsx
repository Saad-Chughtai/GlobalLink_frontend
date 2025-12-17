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
        <div className="footer-main">
          {/* Left Side - Logo, Email, Social Media */}
          <div className="footer-left">
            <Link to="/" className="footer-logo">
              <span className="logo-f">F</span>
              <div className="logo-text">
                <span className="logo-fortuna">GLOBAL LINK</span>
                <span className="logo-admissions">ADMISSIONS</span>
              </div>
            </Link>
            <a href="mailto:info@globallinkadmissions.com" className="footer-email">
              info@globallinkadmissions.com
            </a>
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

          {/* Right Side - Navigation Columns */}
          <div className="footer-right">
            {/* Column 1 - College */}
            <div className="footer-column">
              <h4 className="footer-heading">College</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/college/team">Meet the Team</Link>
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
                  <Link to="/mba/team">Meet the Team</Link>
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
                  <Link to="/law/team">Meet the Team</Link>
                </li>
                <li>
                  <Link to="/law">Services</Link>
                </li>
                <li>
                  <Link to="/law/free-consultation">Free Consultation</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Links */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy</Link>
            <span className="footer-separator">|</span>
            <Link to="/terms-of-service">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
