import React, { useState } from "react";
import { lang, countries, sortby } from "./data";
const Filter = ({ setLanguage, setcountry, setSortBy }) => {
  const [language, setlanguage] = useState("en");
  const [country, setCountry] = useState("us");
  const handleChange = (e) => {
    const clicked = e.target.value;
    setLanguage(clicked);
    setlanguage(clicked);
  };

  const handleChangeCountry = (e) => {
    const clicked = e.target.value;
    setCountry(clicked);
    setcountry(clicked);
  };
  const handleSort = (e) => {
    const clicked = e.target.value;
    setSortBy(clicked);
  };

  return (
    <div className=" flex flex-col gap-3 pb-5">
      <div>Filter Here : -</div>
      <div className="flex flex-col sm:flex-row gap-5">
        {" "}
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
