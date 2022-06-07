import React from "react";
import "../scss/_thankyouPage.scss";
import Footer from "./Footer";
import Header from "./Header";

function ThankyouPage() {
  return (
    <>
    <Header/>
    
    <div className="Container-fluid ty-container">
      <h1>Thankyou for contacting Us!</h1>
      <p>Our team will reach you out soon</p>
    </div>
    <Footer/>
    </>
  );
}

export default ThankyouPage;
