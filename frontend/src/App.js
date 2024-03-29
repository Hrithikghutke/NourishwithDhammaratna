import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import TTPImg from "./images/TTP.png";
import ThankyouPage from "./components/ThankyouPage";
import Scrollprogressbar from "./components/Scrollprogressbar";
import ContactPage from "./components/ContactPage";
import CFbackImg from "./images/cf-backImg.png";
import AboutPage from "./components/AboutPage";
import ComingsoonPage from "./components/ComingsoonPage";
import CurrentlyUnavaliable from "./components/CurrentlyUnavaliable";
import Blog from "./components/Blog/Blog";
import SinglePost from "./components/Blog/SinglePost";
import TestimonialImg1 from "./images/testimonials_1.jpeg";
import Plans from "./components/Plans";
import Enquiry from "./components/Enquiry";
import Transformation from "./components/Transformation";
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <Router>
      <Scrollprogressbar />
      <Header />
      <ParallaxProvider>
      <Routes>
        <Route
          path="/"
          element={[
            <LandingPage
              Heroimg1="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80"
              Heroimg2="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              Heroimg3="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80"
              Helloimg="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            />,
            <Testimonials
              timg1={TestimonialImg1}
              timg2="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              timg3="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              name1="Amol Dhakne"
              name2="Shubham Ghutke"
              name3="Ricky Ghutke"
            />,
            // <Fillerbox />,
            <ContactForm
              contactImg={TTPImg}
              backgroundImg={CFbackImg}
              className="cf-heading-lp"
            />,
          ]}
        />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/comingsoon" element={<ComingsoonPage />} />
        <Route
          path="/currentlyUnavaliable"
          element={<CurrentlyUnavaliable />}
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/post" element={<SinglePost />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      </ParallaxProvider>
      <Footer />
    </Router>
  );
}

export default App;
