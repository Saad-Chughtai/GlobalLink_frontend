import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Handle navigation with scroll to top for same page
  const handleNavigation = (path) => {
    if (location.pathname === path) {
      // If we're already on the target page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to the new page
      navigate(path);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Left Side - Logo, Email, Social Media */}
          <div className="footer-left">
            <button onClick={() => handleNavigation('/')} className="footer-logo">
               <img
                src="/logo12.png"
                alt="Global Link Admissions Logo"
                className="footer-logo-image"
              />
            </button>
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
            {/* Column 1 - Services */}
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => handleNavigation('/about')}>About Us</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/apply')}>Apply Now</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/contact')}>Contact Us</button>
                </li>
               
              </ul>
            </div>

            {/* Column 2 - Company */}
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => handleNavigation('/about')}>About</button>
                </li>
    
                <li>
                  <button onClick={() => handleNavigation('/applications')}>Applications</button>
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
