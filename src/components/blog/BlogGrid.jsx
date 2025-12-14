import ArticleCard from './ArticleCard';

const BlogGrid = ({ articles }) => {
  return (
    <div className="blog-grid">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
};

export default BlogGrid;

