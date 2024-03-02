"use client";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import NewsGrid from "./NewsGrid";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { data } from "autoprefixer";
import Loading from "./Loading";
import Footer from "./Footer";
// import PropTypes from "prop-types";
const News = () => {
  const [item, setitem] = useState([]);
  const [Active, setActive] = useState(1);
  const [category, setCategory] = useState("general");
  const [Language, setLanguage] = useState("en");
  const [country, setcountry] = useState("us");
  const [loading, setLoading] = useState();
  const [pageSize, setpageSize] = useState(20);
  const [totalResults, settotalResults] = useState(0);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");
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
          console.log("Total Results", data.totalResults);
          setitem(data.articles);
          console.log(item);
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

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      item.length < totalResults
    ) {
      setpageSize((prev) => prev + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [item.length, totalResults]);

  useEffect(() => {
    console.log(item);
  }, [item]);

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
