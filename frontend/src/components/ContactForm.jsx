import React from "react";
import "../scss/_contactForm.scss";
import Emailjs from "emailjs-com";

function ContactForm(props) {
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
    <div className="container-fluid contact-form-container">
      <div className="row cf-row">
        <div className="cf-heading-container">
          <h2 className={props.className}>Contact Us</h2>
        </div>

        <img className="cf-row-img" src={props.backgroundImg} alt="" />
        <div className="col-md-6 cf-lp">
          <img src={props.contactImg} alt="" />
        </div>
        <div className="col-md-6 cf-rp">
          <form className="my-form" onSubmit={sendEmail}>
            <div className="container">
              <ul>
                <li>
                  <div className="row name-input">
                    <div className="col-6 col-md-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        style={props.input_color}
                        required
                      />
                    </div>
                    <div className="col-6 col-md-6">
                      <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        style={props.input_color}
                        required
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row email-input">
                    <div className="col-6 col-md-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        style={props.input_color}
                        required
                      />
                    </div>
                    <div className="col-6 col-md-6">
                      <input
                        type="tel"
                        name="contact-number"
                        placeholder="Phone"
                        style={props.input_color}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <textarea
                        style={props.input_color}
                        name="message"
                        className="message-input"
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
    </div>
  );
}

export default ContactForm;
