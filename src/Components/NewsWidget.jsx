import { useEffect, useState } from "react";

export default function NewsWidget() {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Erreur API News:", error)
      });
  }, []);

  return (
    <div className="rounded-2xl shadow p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">News</h2>
      <ul className="text-sm list-disc pl-5">
        {articles.map((article, index) => (
          <li key={index} className="mb-2">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className=" hover:underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
