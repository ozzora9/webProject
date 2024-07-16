import React from "react";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="first-page">
      <div className="first-background">
        <div className="first-logo">
          <Link to="/">Sleek</Link>
        </div>
      </div>
      <div First-button-area>
        <Link to="/Login" className="First-button-area">
          <button className="first-button-style">SIGN IN</button>
        </Link>
        <Link to="/Signup" className="First-button-area">
          <button className="first-button-style">SIGN UP</button>
        </Link>
      </div>
      <div className="move-font">
        <span>Anything, Everything</span>
      </div>
    </div>
  );
}

export default FirstPage;
