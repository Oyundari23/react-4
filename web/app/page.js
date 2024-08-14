"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [articles, setArticles] = useState([]);

  console.log("articles", articles)

  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);


  return (
    <main>
      {articles.map((article) => (
        <div key={article.id}>
          <p>{article.title}
          </p>
        </div>
      ))}
    </main>
  );
}