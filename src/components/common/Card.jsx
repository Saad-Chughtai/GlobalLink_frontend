import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  className = '',
  onClick,
  shadow = true,
  hoverable = false,
  ...props
}) => {
  const baseClasses = 'card';
  const variantClass = `card-${variant}`;
  const paddingClass = `card-padding-${padding}`;
  const shadowClass = shadow ? 'card-shadow' : '';
  const hoverableClass = hoverable || onClick ? 'card-hoverable' : '';
  const clickableClass = onClick ? 'card-clickable' : '';

  const classes = [
    baseClasses,
    variantClass,
    paddingClass,
    shadowClass,
    hoverableClass,
    clickableClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Component = onClick ? 'button' : 'div';
  const componentProps = onClick
    ? {
        onClick,
        type: 'button',
        ...props,
      }
    : props;

  return (
    <Component className={classes} {...componentProps}>
      {children}
    </Component>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'hover', 'bordered']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  shadow: PropTypes.bool,
  hoverable: PropTypes.bool,
};

export default Card;
