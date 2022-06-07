import React from 'react'
import "../scss/_register.scss"
import Whatsapp from "../images/whatsapp.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import registerBackground from "../images/login-img.jpg";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="row register-page">
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

      <img src={registerBackground} alt="image" />
    </div>
    <div className="col-12 col-md-6 register-card-container">
      <div className="container register-card">
        <h3>Register</h3>
        <form>
          <label htmlFor="username">Set Username</label>
          <input type="text" name="username" required />
          <label htmlFor="email">Enter Email</label>
          <input type="text" name="email" required />
          <label htmlFor="password">Set Password</label>
          <input type="text" name="password" required />
          <input type="submit" value="Register" />
        </form>
        <div className="register-socials">
          <p>Follow Us On</p>
          <div className="register-social-icons">
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
            Already have a Account? &nbsp;
            <Link to="/login">Login</Link>
          </p>
      </div>
    </div>
  </div>
  )
}

export default Register