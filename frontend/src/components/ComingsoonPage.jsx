import React from "react";
import "../scss/_comingSoon.scss";
import Footer from "./Footer";
import Header from "./Header";

function ComingsoonPage() {
  return (
    <>
    <Header/>
    <div className="Container-fluid cs-container">
      <h1>Coming Soon!</h1>
      <p>
        Our Plans are currently in development stage. Please stay connected with
        us so you recieve our plans at early stage.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default ComingsoonPage;
