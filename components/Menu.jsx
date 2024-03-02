import React from "react";
import { links } from "./data";

// Menu component handles navigation between different categories
function Menu({ active, setActive, setCategory }) {
  // Function to handle click on a menu item
  // It sets the active item and the category
  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    // Navigation bar, hidden on small screens
    <nav className="hidden md:flex justify-center py-4 ">
      <ul className="flex gap-2">
        {/* Map each link to a list item */}
        {links.map((link) => (
          <li
            key={link.id}
            // Apply different styles based on whether the link is active
            className={` p-2 rounded-md cursor-pointer ${
              active === link.id
                ? "active  bg-gray-500"
                : "inactive bg-bg-gray-500"
            }`}
            // On click, call the onClick function with the link's id and value
            onClick={() => onClick(link.id, link.value)}
          >
            {/* Display the link name */}
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
