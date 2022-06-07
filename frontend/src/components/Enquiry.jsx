import React from "react";
import Emailjs from "emailjs-com";
import "../scss/_enquiry.scss";
import Footer from "./Footer";
import Header from "./Header";

function Enquiry(props) {
  function sendEmail(e) {
    e.preventDefault();
    Emailjs.sendForm(
      "service_evq0ddo",
      "template_w1xjj6p",
      e.target,
      "FDYn0mMhCe-L2gSBh"
    )
      .then((res) => {
        window.location.replace("/thankyou");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
    <Header/>
    <div className="container-fluid enquiry-form-container">
      <div className="row cf-row">
        <div className="cf-heading-container">
          <h2 className={props.className}>Enquiry</h2>
        </div>

        <form className="my-form" onSubmit={sendEmail}>
          <div className="container">
            <ul>
              <li>
                <div className="row name-input">
                  <div className="col-6 col-md-6">
                    <input
                      className="e-input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      />
                  </div>
                  <div className="col-6 col-md-6">
                    <input
                      className="e-input"
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      required
                      />
                  </div>
                </div>
              </li>
              <li>
                <div className="row email-input">
                  <div className="col-6 col-md-6">
                    <input
                      className="e-input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      />
                  </div>
                  <div className="col-6 col-md-6">
                    <input
                      className="e-input"
                      type="tel"
                      name="contact-number"
                      placeholder="Phone"
                      />
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-12 col-md-12 dropdown-container">
                    <select className="select" name="plans" id="plans">
                      <option value="basic">Basic Nourish Plan</option>
                      <option value="advance">Advance Nourish Plan</option>
                    </select>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-12 col-md-12 e-message-container">
                    <textarea
                      name="message"
                      className="e-message-input"
                      placeholder="Message"
                      ></textarea>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="cf-submit-btn-container">
            <input className="cf-submit-btn" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default Enquiry;
