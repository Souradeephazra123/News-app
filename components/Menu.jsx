import React from "react";

function Menu({ active, setActive, setCategory }) {
  const links = [
    {
      id: 1,
      name: "General",
      value: "general",
    },
    {
      id: 2,
      name: "Business",
      value: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      value: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      value: "health",
    },
    {
      id: 5,
      name: "Science",
      value: "science",
    },
    {
      id: 6,
      name: "Sports",
      value: "sports",
    },
    {
      id: 7,
      name: "Technology",
      value: "technology",
    },
  ];

  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    <nav className="hidden md:flex justify-center py-4 ">
      <ul className="flex gap-2">
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
    </nav>
  );
}

export default Menu;