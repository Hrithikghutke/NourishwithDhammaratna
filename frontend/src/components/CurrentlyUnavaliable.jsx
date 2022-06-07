import React from "react";
import "../scss/_currentlyunavaliable.scss";
import Footer from "./Footer";
import Header from "./Header";

function CurrentlyUnavaliable() {
  return (
    <>
    <Header/> 
    <div className="Container-fluid cu-container">
      <h1>This page is currently unavaliable!</h1>
      <p>
        Thank you for visiting this page but currently this page is under
        development please visit again later.
      </p>
    </div>
     <Footer/>
     </>
  );
}

export default CurrentlyUnavaliable;
