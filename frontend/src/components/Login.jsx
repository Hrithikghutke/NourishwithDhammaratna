import React from "react";
import "../scss/_login.scss";
import Whatsapp from "../images/whatsapp.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import LoginBackground from "../images/login-img.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="row login-page">
      <div className="col-12 col-md-6">
        <div>
          <h3>Welcome to .</h3>
          <h4>NourishWithDhammaratna</h4>
          <div className="scroll-container">
            <div class="mouse"></div>
            <p>Scroll Down</p>
          </div>
          {/* <p>Stay Fit Stay Healthy</p> */}
        </div>

        <img src={LoginBackground} alt="image" />
      </div>
      <div className="col-12 col-md-6 login-card-container">
        <div className="container login-card">
          <h3>Login</h3>
          <form>
            <label htmlFor="email">Username</label>
            <input type="text" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" required />
            <input type="submit" value="Submit" />
          </form>
          <div className="login-socials">
            <p>Follow Us On</p>
            <div className="login-social-icons">
              <a href="https://instagram.com/nourishwithdhammaratna?utm_medium=copy_link">
                <img src={Instagram} alt="img" />
              </a>
              <a href="https://www.facebook.com/archana.ghutke.7">
                <img src={Facebook} alt="img" />
              </a>
              <a href="">
                <img src={Whatsapp} alt="img" />
              </a>
            </div>
          </div>
          <p>
            Don't Have Account? &nbsp;
            <Link to="/register">Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
