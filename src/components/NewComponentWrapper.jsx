import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import NewsCard from "./NewsCard";

const NewComponentWrapper = () => {
  // Data fetch function
  const api_key = process.env.REACT_APP_API_KEY;
  const [dataSet, setDataSet] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHandle = async () => {
    try {
      const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
      const response = await fetch(url + api_key);
      const result = await response.json();
      const sortedArticles = result.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      setDataSet(sortedArticles);
      setDataSet(result.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHandle();
  }, []);

  return (
    <div className="NewComponentWrapper">
      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        dataSet.map((item, index) => (
          <NewsCard key={index} newsArticle={item} />
        ))
      )}
    </div>
  );
};

export default NewComponentWrapper;
