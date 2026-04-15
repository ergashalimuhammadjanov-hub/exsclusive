import React from "react";
import "./Home.css";
import Slider from "../../components/homeslider/Slider";
import { Slide } from "@mui/material";
import Product from "../../components/products/Product";
import Countdown from "react-countdown";

function Home() {
  return (
    <div>
      <div className="hero">
        {/* LEFT MENU */}
        <div className="sidebar">
          <ul>
            <li>
              Woman’s Fashion <span>›</span>
            </li>
            <li>
              Men’s Fashion <span>›</span>
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        <Slider />
      </div>
      <div className="container">
        <div className="sales">
          <h2>Flash Sales</h2>
        </div>
        <div className="home_poducts">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
