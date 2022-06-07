import React from "react";
import { Link } from "react-router-dom";
import "../scss/_plans.scss";
import Footer from "./Footer";
import Header from "./Header";

function Plans() {
  return (
    <>
    <Header/>
    
    <div className="plans-container">
      <div className="row">
        <div className="col-6 col-md-6">
          <img
            src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </div>
        <div className="col-6 col-md-6">
          <h1>Basic Nourish Plan</h1>
          <ul>
            <li>Will provide customized diet plan as per goal</li>
          </ul>
          <Link to="/enquiry" className="enquire-btn-container">
            <button>Enquire Now</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-6">
          <h1>Advance Nourish Plan</h1>
          <ul>
            <li>Customized diet plan</li>
            <li>Nutrition Counseling</li>
            <li>Weekly follow up</li>
            <li>Daily assistance</li>
            <li>Complete guidance on what to eat what not to eat & Why?</li>
            <li>Intermittent fasting</li>
            <li>Supplements guidance (*extra charges may apply)</li>
            <li>
              Bonus*** Super easy & effective hacks to enjoy your favorite food
              without guilt
            </li>
          </ul>
          <Link to="/enquiry" className="enquire-btn-container">
            <button>Enquire Now</button>
          </Link>
        </div>
        <div className="col-6 col-md-6">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Plans;
