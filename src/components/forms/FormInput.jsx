const FormInput = ({
  label,
  name,
  type = 'text',
  register,
  required = false,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, { required: required && 'This field is required' })}
        className={error ? 'error' : ''}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};

export default FormInput;

