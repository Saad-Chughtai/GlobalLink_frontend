import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './FAQ.css';

const FAQ = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Number circles: ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩
  const numberCircles = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];

  return (
    <div className="faq-container">
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className={`faq-question ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleQuestion(index)}
            aria-expanded={openIndex === index}
          >
            <span className="faq-question-content">
              <span className="faq-number-circle">{numberCircles[index] || (index + 1)}</span>
              <span className="faq-question-text">{item.question}</span>
            </span>
            <FiChevronDown className={`faq-icon ${openIndex === index ? 'open' : ''}`} />
          </button>
          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

FAQ.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ).isRequired,
  defaultOpenIndex: PropTypes.number,
};

export default FAQ;

