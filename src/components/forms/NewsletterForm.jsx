import { useForm } from 'react-hook-form';
import FormInput from './FormInput';

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Newsletter signup:', data);
    // Handle newsletter signup
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        required
        error={errors.email}
        placeholder="Enter your email"
      />
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;

