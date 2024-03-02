"use client";
import { debounce } from "lodash";
import Image from "next/image";
import { Input } from "postcss";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { links } from "./data";

// Navbar component handles navigation and search functionality
const Navbar = ({ active, setActive, setCategory, setQuery }) => {
  const [show, setshow] = useState(false);

  // Toggle show state
  const handleClick = () => {
    setshow(!show);
  };

  // Set active link and category
  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  const [searchterm, setSearchTerm] = useState("");
  // Debounce search input to limit API calls
  const debouncedSearchTerm = debounce(setQuery, 500);
  const searchInput = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    debouncedSearchTerm(input);
  };
  // Cancel debounced search term on component unmount
  useEffect(() => {
    return () => {
      debouncedSearchTerm.cancel();
    };
  });

  // Render Navbar
  return (
    <div
      className={` z-50 fixed top-0 left-0 w-[100vw] px-2 sm:px-5 md:px-10 bg-gray-700 py-5 bg-transparent bg-opacity-55 text-white flex justify-between ${
        show ? "bg-black" : "bg-black bg-transparent bg-opacity-75 "
      } 
      `}
      style={{ backgroundColor: "black", opacity: "0.75" }}
    >
      <div> Your NewsPaper</div>
      <div className=" gap-10 flex">
        {/* search option */}
        <div className="relative">
          <button
            type="submit"
            className=" absolute inset-y-0 end-0 flex items-center py-3"
            onClick={searchInput}
          >
            <CiSearch size={30} color="black" className="" />
          </button>
          <form className="md:w-fit" onSubmit={searchInput}>
            <input
              placeholder="Search for news..."
              value={searchterm}
              name="query"
              type="text"
              onChange={searchInput}
              className="text-black p-3 rounded-full"
            />
          </form>
        </div>
        {/* only visible for small screen */}
        <div className=" block md:hidden">
          <IoIosMenu onClick={handleClick} size={30} color="white" />

          {show && (
            <div className=" bg-black transition-transform transform delay-150 duration-600 translate-x-0 p-6 fixed bg-opacity-100 right-0 h-[100vh] overflow-auto w-[100vw] top-0 flex justify-between">
              <ul className=" flex flex-col gap-2">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className={` p-2 rounded-md cursor-pointer ${
                      active === link.id
                        ? "active  bg-gray-500"
                        : "inactive bg-bg-gray-500"
                    }`}
                    onClick={() => onClick(link.id, link.value)}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
              <IoMdClose onClick={handleClick} size={30} color="white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
