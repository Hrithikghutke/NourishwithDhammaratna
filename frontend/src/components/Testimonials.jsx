import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../scss/_testimonials.scss";

function Testimonials(props) {
  return (
    <div className="container-fluid testimonials-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={props.timg1} alt="img1" />
          <div className="myCarousel">
            <h3>{props.name1}</h3>
            <h4></h4>
            <p>
              I have always known that healthy eating is essential for overall
              long term health, but it has been with your instructions that I
              have committed myself to proper nutrition and it’s working! After
              following your plan, I am more productive, have more energy at
              work, and have learned not only what to eat, why and when, but
              also easy strategies to keep it up. My commitment to long term
              health has never been better or more fun. Thanks to dear friend
              Ratna for sharing your expertise and putting me on the path to a
              healthy life.
            </p>
          </div>
        </div>

        {/* <div>
          <img src={props.timg2} alt="img2" />
          <div className="myCarousel">
            <h3>{props.name2}</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={props.timg3} alt="img3" />
          <div className="myCarousel">
            <h3>{props.name3}</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}

export default Testimonials;
