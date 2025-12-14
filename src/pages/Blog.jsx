import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/blog/ArticleCard';
import NewsletterForm from '../components/forms/NewsletterForm';
import SEO from '../components/common/SEO';
import { articles } from '../data/articles';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'MBA', 'Law', 'College'];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Admissions Insights & Resources"
        description="Expert guidance and insights to help you navigate the MBA, Law, and College admissions journey. Learn from former admissions directors."
        keywords="MBA admissions blog, law school admissions advice, college admissions tips, admissions consulting"
        image="/images/blog/og-image.jpg"
      />
      <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1>Admissions Insights & Resources</h1>
          <p>Expert guidance to help you navigate the admissions journey</p>
        </div>
      </section>

      <div className="container blog-container">
        <div className="blog-content">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination-button active">1</button>
            <button className="pagination-button">2</button>
            <button className="pagination-button">3</button>
            <button className="pagination-button">Next →</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Popular Articles</h3>
            <ul className="popular-articles-list">
              {articles.slice(0, 5).map((article) => (
                <li key={article.id}>
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-widget newsletter">
            <h3>Stay Updated</h3>
            <p>Get the latest admissions insights delivered to your inbox.</p>
            <NewsletterForm />
          </div>
        </aside>
      </div>
    </div>
    </>
  );
};

export default Blog;
