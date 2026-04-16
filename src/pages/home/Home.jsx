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
        <button class="button">
          Apply Now
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <section className="Category">
          <div className="sales">
            <h2>Categories</h2>
          </div>
          <h1 className="h1anim">Browse By Category</h1>
          <div className="categoryCards">
            <div className="cat_yCard">
              <img src="./imgs/Category-CellPhone.svg" alt="" />
              <h3>Phones</h3>
            </div>
            <div className="cat_yCard">
              <img src="./imgs/Category-Computer.svg" alt="" />
              <h3>Computers</h3>
            </div>
            <div className="cat_yCard">
              <img src="./imgs/Category-SmartWatch.svg" alt="" />
              <h3>SmartWatch</h3>
            </div>
            <div className="cat_yCard">
              <img src="./imgs/Category-Headphone.svg" alt="" />
              <h3>HeadPhones</h3>
            </div>
            <div className="cat_yCard">
              <img src="./imgs/Category-Gamepad.svg" alt="" />
              <h3>Gaming</h3>
            </div>
            <div className="cat_yCard">
              <img src="./imgs/Category-CellPhone.svg" alt="" />
              <h3>Phones</h3>
            </div>
          </div>
        </section>
        <section>
          <div className="selling">
            <div className="sell">
              <div className="sales">
                <h2>This Month</h2>
              </div>
              <h1 className="h1anim">Best Selling Products</h1>
            </div>
            <button class="Btn-Container">
              <span class="text">View All</span>
              <span class="icon-Container">
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="nones"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.61321"
                    cy="1.61321"
                    r="1.5"
                    fill="black"
                  ></circle>
                  <circle
                    cx="5.73583"
                    cy="1.61321"
                    r="1.5"
                    fill="black"
                  ></circle>
                  <circle
                    cx="5.73583"
                    cy="5.5566"
                    r="1.5"
                    fill="black"
                  ></circle>
                  <circle
                    cx="9.85851"
                    cy="5.5566"
                    r="1.5"
                    fill="black"
                  ></circle>
                  <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                  <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                  <circle
                    cx="5.73583"
                    cy="13.4434"
                    r="1.5"
                    fill="black"
                  ></circle>
                  <circle
                    cx="9.85851"
                    cy="13.4434"
                    r="1.5"
                    fill="black"
                  ></circle>
                  <circle
                    cx="1.61321"
                    cy="17.3868"
                    r="1.5"
                    fill="black"
                  ></circle>
                  <circle
                    cx="5.73583"
                    cy="17.3868"
                    r="1.5"
                    fill="black"
                  ></circle>
                </svg>
              </span>
            </button>
          </div>
          <div className="prodectss">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="slideImg">
            <div class="music-box">
              <p className="category">Categories</p>

              <h1 className="title">
                Enhance Your <br />
                Music Experience
              </h1>

              <div className="timer">
                <div className="dumaloq">
                  23 <span>Hours</span>
                </div>
                <div className="dumaloq">
                  05 <span>Days</span>
                </div>
                <div className="dumaloq">
                  59 <span>Minutes</span>
                </div>
                <div className="dumaloq">
                  35 <span>Seconds</span>
                </div>
              </div>

              <button className="bynow">Buy Now!</button>
            </div>
          </div>
        </section>
        <section>
          <div className="sell">
            <div className="sales">
              <h2>Our Products</h2>
            </div>
            <h1 className="h1anim">Explore Our Products</h1>
          </div>
          <div className="prodectss">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <button class="btn"> View All Products</button>
        </section>
        <section>
          <div className="sell">
            <div className="sales">
              <h2>Featured</h2>
            </div>
            <h1 className="h1anim">New Arrival</h1>
          </div>
          <div className="arrival">
            <div className="arr_left">
              <div className="arrimg">
                <img src="./imgs/Frame 684.svg" alt="" />
              </div>
              <div className="arrivaltxt">
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <a href="">Shop Now</a>
              </div>
            </div>
            <div className="arr_right">
              <div className="top">
                <div className="arrimg">
                  <img src="./imgs/Frame 685.svg" alt="" />
                </div>
                <div className="arrivaltxt">
                  <h3>PlayStation 5</h3>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className="bottomn">
                <div className="carddd">
                  <div className="arrimg">
                    <img src="./imgs/Frame 686.svg" alt="" />
                  </div>
                  <div className="arrivaltxt">
                    <h3>PlayStation 5</h3>
                    <p>
                      Black and White version of the PS5 coming out on sale.
                    </p>
                    <a href="">Shop Now</a>
                  </div>
                </div>
                <div className="carddd">
                  <div className="arrimg">
                    <img src="./imgs/Frame 687.svg" alt="" />
                  </div>
                  <div className="arrivaltxt">
                    <h3>PlayStation 5</h3>
                    <p>
                      Black and White version of the PS5 coming out on sale.
                    </p>
                    <a href="">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services">
            <div className="services_box">
              <img src="./imgs/Services.svg" alt="" />
              <h2>FREE AND FAST DELIVERY</h2>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="services_box">
              <img src="./imgs/Services (1).svg" alt="" />
              <h2>24/7 CUSTOMER SERVICE</h2>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="services_box">
              <img src="./imgs/Services (2).svg" alt="" />
              <h2>MONEY BACK GUARANTEE</h2>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
