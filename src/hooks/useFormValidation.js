import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export const useFormValidation = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const validate = (validationRules) => {
    const newErrors = {};

    Object.keys(validationRules).forEach((field) => {
      const rules = validationRules[field];
      const value = values[field];

      if (rules.required && !value) {
        newErrors[field] = rules.requiredMessage || `${field} is required`;
      } else if (rules.email && !validateEmail(value)) {
        newErrors[field] = rules.emailMessage || 'Please enter a valid email';
      } else if (rules.minLength && value.length < rules.minLength) {
        newErrors[field] =
          rules.minLengthMessage ||
          `${field} must be at least ${rules.minLength} characters`;
      } else if (rules.custom && !rules.custom(value)) {
        newErrors[field] = rules.customMessage || `${field} is invalid`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
  };
};

