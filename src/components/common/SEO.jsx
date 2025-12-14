import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description = 'Expert admissions consulting from former admissions directors at top schools. Triple your chances of admission with Fortuna.',
  keywords = 'MBA admissions, law school admissions, college admissions, consulting, Fortuna Admissions',
  image = '/images/og-image.jpg',
  url 
}) => {
  const siteTitle = 'Fortuna Admissions';
  const siteUrl = url || 'https://www.fortunaadmissions.com';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Fortuna Admissions" />
    </Helmet>
  );
};

export default SEO;

