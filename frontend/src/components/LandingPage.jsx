import React, { useState, useEffect } from "react";
import "../scss/_landingPage.scss";
import AboutHeroImg from "../images/AboutHeroImg.png";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Transformation from "./Transformation";
import Testimonials from "./Testimonials";
import featureimg from "../images/Feature-img-1.jpeg"
import featureaudio from "../images/Feature-audio-1.mpeg"

function LandingPage(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container landingpage">
      <div className="welcome-container">
        <h2>
          Welcome to <br /> <span>NourishwithDhammaratna</span>
        </h2>
        <p>Perfect place for peoples who wants to stay healthy and fit.</p>
      </div>
      <Parallax>
        <div className="row hero-image-container">
          <div className="col-12 col-md-4 hero-img1">
            <img src={props.Heroimg1} alt="img1" />
          </div>
          <div className="col-md-4 hero-img2">
            <img src={props.Heroimg2} alt="img2" />
          </div>
          <div className="col-md-4 hero-img3">
            <img src={props.Heroimg3} alt="img3" />
          </div>
        </div>
      </Parallax>
      <div className="row hello-container">
        <div className="col-md-4 hello-img"  >
           <img src={AboutHeroImg} alt="img" /> 
        </div>
        <div className="col-md-8 hello-content">
          <div className="hello-content-container">
            <h3>Well Hello.</h3>

            <p>
              I'm Dhammaratna
              <br />I Welcome you to my small little world of
              nourishwithdhammaratna. I am a Certified Performance Nutritionist
              , Post graduate in Food Processing Technology🎓. With the passion
              to add value through my expertise in Food and Nutrition I am
              committed to help my clients transform into the Better version of
              themselves and achieve their desired health goals.
            </p>
            <p>
              Through Scientific research, expertise and learnings my clients
              will not only transform into the Better Version of themselves but
              also learn and adopt healthy eating habits leading to Nourishment
              and Mindfulness.
            </p>
            <p>
              Good nutrition can help you shed excess pounds — without food
              cravings or feeling hungry! This is because healthy foods are
              packed with nutrients.What's more,high-nutrition foods also
              require more chewing, slowing you down and helping you eat more
              mindfully. As a result, your body has a chance to send the signals
              to the brain that let you know when you're full. Good nutrition
              also means you can eat more of the healthy foods you love.
            </p>
          </div>
        </div>
      </div>
      <Transformation/>,

      <div className="featured-section">
        <h1>Featured On Akashwani Aurangabad</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={featureimg}  alt="img" />
          </div>
          <div className="col-12 col-md-6">
            <audio controls>
              <source src={featureaudio} type="audio/mpeg"/>
              </audio> 
              <p>Listen to full Interview</p>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default LandingPage;
