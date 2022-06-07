import React from "react";
import "../scss/_currentlyunavaliable.scss";
import Footer from "./Footer";
import Header from "./Header";

function PageNotFound() {
  return (
      <>
      <Header/>
    <div className="Container-fluid cu-container">
      <h1>Page Not Found !</h1>
      <p>
        We are sorry for the inconvenience but the page you are looking for does not exists.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default PageNotFound;