import { useForm } from 'react-hook-form';
import FormInput from './FormInput';

const ConsultationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  return (
    <form className="consultation-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Full Name"
        name="name"
        register={register}
        required
        error={errors.name}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        required
        error={errors.email}
      />
      <FormInput
        label="Phone"
        name="phone"
        type="tel"
        register={register}
        error={errors.phone}
      />
      <div className="form-group">
        <label htmlFor="program">Program Interest</label>
        <select
          id="program"
          {...register('program', { required: true })}
          className={errors.program ? 'error' : ''}
        >
          <option value="">Select a program</option>
          <option value="mba">MBA</option>
          <option value="law">Law School</option>
          <option value="college">College</option>
        </select>
        {errors.program && (
          <span className="error-message">This field is required</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register('message')}
          rows="5"
          placeholder="Tell us about your goals and how we can help..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Request
      </button>
    </form>
  );
};

export default ConsultationForm;

