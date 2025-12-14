import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './MobileMenu.css';

const MobileMenu = ({ onClose, navItems = [], activeDropdown, onDropdownToggle }) => {
  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu">
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <div key={item.key} className="mobile-nav-item">
              <button
                className="mobile-nav-toggle"
                onClick={() => onDropdownToggle?.(item.key)}
              >
                {item.label}
                <FiChevronDown
                  className={`mobile-dropdown-icon ${
                    activeDropdown === item.key ? 'open' : ''
                  }`}
                />
              </button>
              {activeDropdown === item.key && (
                <div className="mobile-dropdown-menu">
                  <Link
                    to={item.services}
                    onClick={onClose}
                    className="mobile-dropdown-link"
                  >
                    Services
                  </Link>
                  <Link
                    to={item.team}
                    onClick={onClose}
                    className="mobile-dropdown-link"
                  >
                    Team
                  </Link>
                  <Link
                    to={item.resources}
                    onClick={onClose}
                    className="mobile-dropdown-link"
                  >
                    Resources
                  </Link>
                  <Link
                    to={item.consultation}
                    onClick={onClose}
                    className="mobile-dropdown-link mobile-cta"
                  >
                    Free Consultation
                  </Link>
                </div>
              )}
            </div>
          ))}
          <Link to="/blog" onClick={onClose} className="mobile-nav-link">
            Blog
          </Link>
          <Link to="/contact" onClick={onClose} className="mobile-nav-link">
            Contact
          </Link>
          <Link
            to="/free-consultation"
            onClick={onClose}
            className="mobile-nav-link mobile-cta-button"
          >
            Free Consultation
          </Link>
        </nav>
      </div>
    </>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      services: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      resources: PropTypes.string.isRequired,
      consultation: PropTypes.string.isRequired,
    })
  ),
  activeDropdown: PropTypes.string,
  onDropdownToggle: PropTypes.func,
};

export default MobileMenu;
