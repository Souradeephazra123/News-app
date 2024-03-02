import React, { useState } from "react";
import NewsItem from "./NewsItem";

const NewsGrid = ({ items }) => {
  return (
    <div
      className={`news-grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
        items.length > 0
          ? "text-white grid"
          : "flex text-xl items-center justify-center text-white h-screen text-center "
      }`}
    >
      {items.length > 0
        ? items.map((item, i) => <NewsItem key={i} item={item} />)
        : " 😒 We're sorry, but we couldn't find any news articles that match your criteria. Please try a different category or language."}
    </div>
  );
};

export default NewsGrid;
