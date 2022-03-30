import React from "react";
import AboutHeroImg from "../images/AboutHeroImg.png";
import { Link } from "react-router-dom";
import K11Certificate from "../images/K11 certificate.jpeg";
import "../scss/_aboutPage.scss";

function AboutPage() {
  return (
    <div className="container-fluid about-page">
      <div className="row about-row">
        <div className="col-12 col-md-6 lp-container">
          <div className="title">
            <h1>Hello! I am Dhammaratna</h1>
          </div>
          <div className="content">
            <p>
              I help people to transform themselves and make a fresh start
              towards{" "}
              <strong style={{ color: "black" }}>
                Better version of themselves.
              </strong>{" "}
              <br />
              <strong style={{ color: "black" }}>
                THE NEW YOU
                <br />
                THE FITTER YOU
                <br />
                THE HEALTHIER YOU
                <br />
              </strong>
              This Pandamic has taught us again{" "}
              <strong style={{ color: "black" }}>
                "Health is the real wealth"
              </strong>{" "}
              . When it comes to health, correct Nutrition and Exercise becomes
              vital.
            </p>
            <div className="socials">
              <h4>Socials</h4>
            </div>
          </div>
          <div className="social">
            <Link to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 rp-container">
          <img src={AboutHeroImg} alt="" />
        </div>
      </div>

      <div className="row about-points-row">
        <div className="col-12 col-md-6 about-points-container">
          <h4>Have you ever experienced any of these?</h4>
          <ul>
            <li>I'm doing cardio everyday why I'm not losing my weight?</li>
            <li>
              I'm spending hours⌛ on the gym floor still I'm not seeing any
              significant change in weight loss
            </li>
            <li>
              Despite working out regularly (never missed a single day in a
              week) why I'm not looking lean & toned?
            </li>
            <li>
              Last time I lost weight after 1/2months I gained the double amount
              of weight I have lost earlier.. What's wrong with my body?
            </li>
            <li>I'm not feeling energetic throughout the day</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 about-points2-container">
          <h4>
            If you have any of these questions than our nourish plan is just
            right for you !
          </h4>
          <ul>
            <li>Do you want to loose weight?</li>
            <li>Do you want to get rid of that extra bulging fat??</li>
            <li>Do you want to improve your energy levels⚡??</li>
            <li>Do you want to improve your metabolic health?? </li>
            <li>Do you want to keep your hormonal environment happy ? </li>
            <li>
              Do you want your internal body functioning work well & smoothly?
            </li>
            <li>Do you want to prevent TYPE 2 Dibetes, Fat Gain etc??</li>
          </ul>
          <h5>
            If your answer is YES than our nourish plan is just Best for you
          </h5>
          <Link to="/comingsoon" className="about-plans-btn">
            Visit Nourishment Plans
          </Link>
        </div>
      </div>

      <div className="row about-row">
        <div className="col-12 col-md-6 lp-container">
          <img className="about-k11-image" src={K11Certificate} alt="" />
        </div>
        <div className="col-12 col-md-6 rp-container">
          <div className="title">
            <h1>Certification</h1>
          </div>
          <div className="content">
            <p>
              I have completed my Human Performance Nutritionist course from{" "}
              <strong>
                India's leading Fitness School K11 School of fitness sciences
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
