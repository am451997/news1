import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=73633b1e56c04ef8ba5d686861f243e5')
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Latest News from India</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
