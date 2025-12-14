import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import Card from '../common/Card';
import { fadeInUp } from '../../utils/animations';
import './Testimonials.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} className="star-icon" />
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <motion.h2
          className="testimonials-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Real Reviews From Real Clients
        </motion.h2>
        <motion.p
          className="testimonials-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Candidates Love Working With Us
        </motion.p>
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <Card hoverable className="testimonial-card">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-school">{testimonial.school}</p>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
