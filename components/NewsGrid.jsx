import React, { useState } from "react";
import NewsItem from "./NewsItem";

// NewsGrid component displays a grid of news articles
const NewsGrid = ({ items }) => {
  return (
    <div
      className={`news-grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
        // Apply different styles based on the number of items
        items.length > 0
          ? "text-white grid"
          : "flex text-xl items-center justify-center text-white h-screen text-center "
      }`}
    >
      {items.length > 0
        ? // If there are items, map each item to a NewsItem component
          items.map((item, i) => <NewsItem key={i} item={item} />)
        : // If there are no items, display a message
          " 😒 We're sorry, but we couldn't find any news articles that match your criteria. Please try a different category or language."}
    </div>
  );
};

export default NewsGrid;
