import React, { useState } from "react";
import "../scss/_header.scss";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header(props) {
  const [show, setshow] = useState(false);

  const onclick = () => {
    setshow(!show);
  };

  return (
    <div className="container-fluid header" style={props.header_color}>
      <div className="logo-container">
        <h2>
          .Nourishwith<span>Dhammaratna</span>
        </h2>
      </div>
      <div className={show ? "menu-link-expanded" : "menu-link"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/plans">Plans</Link>
          </li>
        </ul>
      </div>
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

      {show ? (
        <CgClose onClick={onclick} className="hamburger-icon bm-close" />
      ) : (
        <CgMenuRightAlt onClick={onclick} className="hamburger-icon " />
      )}
    </div>
  );
}

export default Header;
