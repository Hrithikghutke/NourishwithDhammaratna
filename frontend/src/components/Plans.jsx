import React from "react";
import { Link } from "react-router-dom";
import "../scss/_plans.scss";

function Plans() {
  return (
    <div className="plans-container">
      <div className="row">
        <div className="col-6 col-md-6">
          <img
            src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </div>
        <div className="col-6 col-md-6">
          <h1>Basic Nourish Plan <br />
          <span>(Heal Your Gut Program)</span>
          </h1>
          <ul>
            <li>15 Days Plan.</li>
            <li>Will provide customized diet plan as per goal</li>
            <h4>Benefits</h4>
            <li>Decrease Inflamation</li>
            <li>Increase Energy</li>
            <li>Clear Skin</li>
            <li>Reduce Acidity</li>
            <li>Relief from Constipation</li>
            <li>Relif from gases / bloating</li>
          </ul>
          <p>Starts at &#8377;3000/-</p>
          <Link to="/enquiry" className="enquire-btn-container">
            <button>Enquire Now</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-6">
          <h1>Advance Nourish Plan</h1>
          <ul>
            <li>5 Months Duration</li>
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
          <p>Starts at &#8377;15000/-</p>
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
  );
}

export default Plans;
