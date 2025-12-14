import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/blog/${article.slug}`} className="article-card-link">
        <Card hoverable className="article-card">
          <div className="article-thumbnail">
            <img src={article.thumbnail} alt={article.title} loading="lazy" />
            <span className="category-badge">{article.category}</span>
          </div>
          <div className="article-content">
            <h3>{article.title}</h3>
            <p className="excerpt">{article.excerpt}</p>
            <div className="article-meta">
              <span className="author">{article.author}</span>
              <span className="separator">•</span>
              <span className="read-time">{article.readTime}</span>
              <span className="separator">•</span>
              <span className="date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
