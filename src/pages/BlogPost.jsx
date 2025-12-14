import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="page blog-post">
        <div className="container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page blog-post">
      <div className="container">
        <article>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>By {article.author}</span>
            <span>{article.date}</span>
          </div>
          {article.image && (
            <div className="article-featured-image">
              <img src={article.image} alt={article.title} />
            </div>
          )}
          <div className="article-content">
            <p>{article.content || article.excerpt}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;

