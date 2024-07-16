import React from "react";
import "./FirstPage.css";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="first-page">
      <div className="first-background">
        <div className="first-logo">
          <Link to="/">Sleek</Link>
        </div>
        <Link to="/Login" className="First-button-area">
          <button className="first-button-style">SIGN IN</button>
        </Link>
        <Link to="/Signup" className="First-button-area">
          <button className="first-button-style">SIGN UP</button>
        </Link>
        <div className="move-font">Everything, Anything</div>
      </div>
    </div>
  );
}

export default FirstPage;
