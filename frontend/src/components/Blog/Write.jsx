import React from "react";
import "../../scss/BlogScss/_write.scss";
import { FcAddImage } from "react-icons/fc";

function Write() {
  return (
    <div className="container-fluid write-container">
      <form>
        <div className="add-img-container">
          <label htmlFor="file-input">
            <FcAddImage className="add-img-icon" />
            <p>Select Image</p>
          </label>
          <input type="file" id="file-input" className="file-input" />
        </div>

        <div className="content-container">
          <input type="text" placeholder="Title" required />
          <textarea
            placeholder="Tell Your Story..."
            name="textarea"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>

        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
