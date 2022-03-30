import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/cf-backImg.png";

function Post() {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-categories">Nutrition , Fitness</p>
        <h5 className="card-title">Nutrition</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="time-stamp">1 hour ago</p>
        <Link to="/post" className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  );
}

export default Post;
