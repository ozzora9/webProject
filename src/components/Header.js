import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ loginStatus }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">Sleek</Link>
      </div>
      <div className="menuBar">
        <Link to="/Home">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/select">Select</Link>
        <span>|</span>
        <Link to="/Mypage">Mypage</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
}

export default Header;
