import React from "react";
import ContactForm from "./ContactForm";
import TTPImg from "../images/TTP.png";
import { RiWhatsappLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import "../scss/_contactPage.scss";
import Header from "./Header";
import Footer from "./Footer";

function ContactPage() {
  return (
    <>
    <Header/>
   
    <div>
      <ContactForm
        heading_color={{ color: "gray" }}
        contactImg={TTPImg}
        backgroundImg="https://wallpaperbat.com/img/173641-world-map-background-hd.gif"
        input_color={{ color: "gray" }}
        className="cf-heading-cp"
      />
      <div className="container-fluid ca-container">
        <div className="row">
          <div className="col-6 col-md-6 address-container">
            <h3>Our Adderss</h3>
            <p>
              Aurangabad,
              <br />
              Maharashtra
            </p>
          </div>
          <div className="col-6 col-md-6 contact-container">
            <h3>Contact</h3>
            <p>
              <RiWhatsappLine /> : +917498018037 <br />
              <RiMailLine /> : nourishwithdhammaratna@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ContactPage;
