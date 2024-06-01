import React, { useState } from "react";

const NewsCard = ({ newsArticle }) => {
  const { content, description, publishedAt, source, title, urlToImage } =
    newsArticle;
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="NewsCard">
      <div className="title" onClick={handleToggle}>
        {title}
      </div>
      <div className={`hidden_information ${isVisible ? "visible" : ""}`}>
        {description}
        {content}
      </div>
      <div className="source_publication">{publishedAt}</div>
    </div>
  );
};

export default NewsCard;
