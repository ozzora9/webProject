import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Sleek</Link>
      </div>
      <div className="menuBar">
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/select">Select</Link>
        <span>|</span>
        <Link to="/wish">Wish</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </div>
    </nav>
  );
}

export default Header;
