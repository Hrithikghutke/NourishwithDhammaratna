import React from "react";
import "../scss/_settings.scss";
import { FcAddImage } from "react-icons/fc";
import Header from "./Header";
import Footer from "./Footer";

function Settings() {
  return (
    <>
    <Header/>
   
    
    <div className="container-fluid settings-container">
      <h1>
        Update <span>Settings</span>
      </h1>
      <div className="row">
        <div className="col-md-6 pp-container">
          <div className="pp-change-container">
            <label htmlFor="pp-input">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="img"
                className="pp"
              />
            </label>
            <input type="file" id="pp-input" style={{ display: "none" }} />
            <div className="pp-info-container">
              <h3>Hrithik Ghutke</h3>
              <p>hrithikghutke01@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 settings-form-container">
          <form className="settings-form">
            <label>Username</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button type="submit">Update</button>
            <span>Delete Account</span>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Settings;
