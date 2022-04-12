import React from "react";
import { Link } from "react-router-dom";
import "../scss/_footer.scss";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row footer-row">
        <div className="col-12 col-md-6 footer-logo-container">
          <h3>Dhammaratna</h3>
          <p>Stay fit stay healthy.</p>
          <ul className="footer_social">
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
        </div>
        <div className="col-12 col-md-6 footer-links-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/comingsoon">Plans</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/blogs">Nutritions</Link>
            </li>
            <li>
              <Link to="/currentlyUnavaliable">Promotions</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="copyright-container">
          <p>Copyright &copy; nourishwithdhammaratna.com All Rights Reserved</p>
          <p>
            <RiWhatsappLine className="footer-whatsapp-logo" /> : +917498018037{" "}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
