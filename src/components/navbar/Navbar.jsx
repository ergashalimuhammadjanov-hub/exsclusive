import React from "react";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar1">
        <div className="navbar">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a href="/">ShopNow</a>
          </p>
          <div className="select">
            <select>
              <option>English</option>
              <option>O'zbek</option>
              <option>Русский</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="container">
          <div className="components">
            <div className="logo">
              <h1>Exclusive</h1>
            </div>
            <div className="pages">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>Contact</li>
                <li>About</li>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
              </ul>
            </div>
            <div className="search">
              <div class="InputContainer">
                <input
                  placeholder="Search"
                  id="input"
                  class="input"
                  name="text"
                  type="text"
                />

                <label class="labelforsearch" for="input">
                  <svg class="searchIcon" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </label>
              </div>
              <FaRegHeart className="hearttt" />
              <FaCartShopping className="carttt" />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
