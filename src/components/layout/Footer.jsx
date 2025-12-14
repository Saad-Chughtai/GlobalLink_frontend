import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import NewsletterForm from '../forms/NewsletterForm';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Column 1 - Services */}
          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/mba">MBA Admissions</Link>
              </li>
              <li>
                <Link to="/law">Law Admissions</Link>
              </li>
              <li>
                <Link to="/college">College Admissions</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/mba/team">Team</Link>
              </li>
              <li>
                <Link to="/careers">Work With Us</Link>
              </li>
              <li>
                <Link to="/corporate">Corporate Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link to="/resources">Deep Dive Reports</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/free-consultation">Free Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="footer-column footer-newsletter">
            <h4 className="footer-heading">Stay Informed</h4>
            <NewsletterForm />
            <div className="footer-social">
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
            <Link to="/terms-of-use">Terms of Use</Link>
            <span className="footer-separator">|</span>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
