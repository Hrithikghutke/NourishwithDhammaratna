import React, { useState } from "react";
import "../scss/_header.scss";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header(props) {
  var menuUl = document.getElementById("menu-ul");
  var body = document.getElementById("body");

  const [showicon, setshowicon] = useState(false);

  const onclick = () => {
    setshowicon(!showicon);
    if (menuUl.classList.contains("menu-link")) {
      body.classList.add("newbody");
    } else if (menuUl.classList.contains("mobile-menu-link")) {
      body.classList.remove("newbody");
    }
  };

  return (
    <div className="container-fluid header" style={props.header_color}>
      <div className="logo-container">
        <h2>
          .Nourishwith<span>Dhammaratna</span>
        </h2>
      </div>

      <ul id="menu-ul" className={showicon ? "mobile-menu-link" : "menu-link"}>
        <li>
          <Link onClick={onclick} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={onclick} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/comingsoon">Plans</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/comingsoon">Login</Link>
        </li>
      </ul>

      <ul className="header_social">
        <li>
          <a href="https://instagram.com/nourishwithdhammaratna?utm_medium=copy_link">
            <RiInstagramLine />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/archana.ghutke.7">
            <RiFacebookCircleLine />
          </a>
        </li>
        <li>
          <a href="/">
            <RiYoutubeLine />
          </a>
        </li>
      </ul>
      <Link className="link" to="/settings">
        <img
          className="topImg"
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </Link>

      {showicon ? (
        <CgClose onClick={onclick} className="hamburger-icon" />
      ) : (
        <CgMenuRightAlt onClick={onclick} className="hamburger-icon" />
      )}
    </div>
  );
}

export default Header;
