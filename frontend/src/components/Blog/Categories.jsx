import React from "react";
import { categories } from "../../constants/data";

function Categories() {
  return (
    <div className="container categories_container">
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li>
            <a href="/">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
