import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_logo"><Link to="/">Logo</Link></div>
      <div className="Navbar_menu">
        <ul>
          <div className="Navbar_menu-left">
            <li className="Navbar_menu_item">
              <Link to="/">My Resumes</Link>
            </li>
            <li className="Navbar_menu_item">
              <Link to="/create">Create Resume</Link>
            </li>
            <li className="Navbar_menu_item">
              <Link to="/success">SuccessPage</Link>
            </li>
            <li className="Navbar_menu_item">
              <Link to="/buy">Buy Tokens</Link>
            </li>
          </div>
          <div className="Navbar_menu-right">
          <li className="Navbar_menu_item">
              <Link to="/account/credentials">Account</Link>
            </li>
            <li className="Navbar_menu_item">
              <Link to="/login">Log In</Link>
            </li>
            <li className="Navbar_menu_item_logout">
              <Link to="/login">Sign Up</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
