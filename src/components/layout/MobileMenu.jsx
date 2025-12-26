import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MobileMenu.css';

const MobileMenu = ({ onClose, navItems = [] }) => {
  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu">
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="mobile-nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default MobileMenu;
