import React from "react";
import Banner from "./Banner";
import "../../scss/BlogScss/_blog.scss";
import Categories from "./Categories";
import Posts from "./Posts";
import Footer from "../Footer";
import Header from "../Header";

function Blog() {
  return (
    <>
    <Header/>
      <Banner />
      <div className="row">
        <div className="col-12 col-md-3">
          <Categories />
        </div>
        <div className="col-12 col-md-9">
          <Posts />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blog;
