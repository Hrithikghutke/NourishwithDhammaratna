import React from "react";
import "../scss/_currentlyunavaliable.scss";

function CurrentlyUnavaliable() {
  return (
    <div className="Container-fluid cu-container">
      <h1>This page is currently unavaliable!</h1>
      <p>
        Thank you for visiting this page but currently this page is under
        development please visit again later.
      </p>
    </div>
  );
}

export default CurrentlyUnavaliable;
