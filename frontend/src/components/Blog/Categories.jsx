import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../constants/data";

function Categories() {
  return (
    <div className="container categories_container">
      <Link to="/write">
        <button className="cp-btn">Create Post</button>
      </Link>
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
