import { useForm } from 'react-hook-form';

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Newsletter subscription:', data);
      // Handle newsletter subscription
      alert('Thank you for subscribing to our newsletter!');
      reset();
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('There was an error subscribing. Please try again.');
    }
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Enter your email"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>
      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default NewsletterForm;