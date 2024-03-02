"use client";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import NewsGrid from "./NewsGrid";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Loading from "./Loading";
import Footer from "./Footer";
// News component fetches and displays news articles
const News = () => {
  const [item, setitem] = useState([]); // Holds fetched news articles
  const [Active, setActive] = useState(1);// Active menu item
  const [category, setCategory] = useState("general"); // News category
  const [Language, setLanguage] = useState("en");//Language of news
  const [country, setcountry] = useState("us");// Country of news
  const [loading, setLoading] = useState();// Loading state
  const [pageSize, setpageSize] = useState(20);// Number of news articles per page
  const [totalResults, settotalResults] = useState(0);// Total number of fetched news articles
  const [query, setQuery] = useState("");// Search query
  const [sortBy, setSortBy] = useState("publishedAt");// Sort news articles by
  

   // Fetch news articles
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v2/top-headlines?country=${country}&sortBy=${sortBy}&q=${query}&pageSize=${pageSize}&language=${Language}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_API_BASE_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          settotalResults(data.totalResults);
       
          setitem(data.articles);
        
        } else {
          console.error("Response was not ok", response);
        }
        setLoading(false);
      } catch (error) {
        console.error("An error occurred while fetching the data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [category, Language, country, pageSize, query, sortBy]);

   // Handle infinite scrolling
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      item.length < totalResults
    ) {
      setpageSize((prev) => prev + 10);
    }
  };

   // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [item.length, totalResults]);


 // Render components
  return (
    <div className={`pt-24 `}>
      <Navbar
        active={Active}
        setActive={setActive}
        setCategory={setCategory}
        setQuery={setQuery}
      />
      <Menu active={Active} setActive={setActive} setCategory={setCategory} />
      <Filter
        setLanguage={setLanguage}
        setcountry={setcountry}
        setSortBy={setSortBy}
      />
      {loading ? <Loading /> : <NewsGrid items={item} />}
      <Footer />
    </div>
  );
};

export default News;
