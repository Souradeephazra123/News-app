import React, { useState } from "react";
import { lang, countries, sortby } from "./data";

// Filter component allows the user to filter news articles by language, country, and sort order
const Filter = ({ setLanguage, setcountry, setSortBy }) => {
  // State for the selected language and country
  const [language, setlanguage] = useState("en");
  const [country, setCountry] = useState("us");

  // Handler for changing the language
  const handleChange = (e) => {
    const clicked = e.target.value;
    setLanguage(clicked);
    setlanguage(clicked);
  };

  // Handler for changing the country
  const handleChangeCountry = (e) => {
    const clicked = e.target.value;
    setCountry(clicked);
    setcountry(clicked);
  };

  // Handler for changing the sort order
  const handleSort = (e) => {
    const clicked = e.target.value;
    setSortBy(clicked);
  };

  return (
    // Filter form
    <div className=" flex flex-col gap-3 pb-5">
      <div>Filter Here : -</div>
      <div className="flex flex-col sm:flex-row gap-5">
        {" "}
        {/* Language selection dropdown */}
        <select
          className=" bg-slate-400 text-black w-fit"
          id="language"
          onChange={handleChange}
        >
          {lang.map((lang) => {
            return (
              <option key={lang.id} value={lang.value}>
                {lang.name}
              </option>
            );
          })}
        </select>
        {/* Country selection dropdown */}
        <select
          className=" bg-slate-400 text-black w-fit"
          id="country"
          onChange={handleChangeCountry}
        >
          {countries.map((country) => {
            return (
              <option key={country.id} value={country.value}>
                {country.name}
              </option>
            );
          })}
        </select>
        {/* Sort order selection dropdown */}
        <select
          className=" bg-slate-400 text-black w-fit"
          id="sort"
          onChange={handleSort}
        >
          {sortby.map((sort) => {
            return (
              <option key={sort.id} value={sort.value}>
                {sort.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
