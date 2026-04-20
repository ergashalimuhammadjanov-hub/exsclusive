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
        
        <section className="Category">
          <div className="sales">
            <h2>Categories</h2>
          </div>
          <h1 className="h1anim">Browse By Category</h1>
          <div className="categoryCards">
            <div className="cat_yCard">
              <img src="/imgs/Category-CellPhone.svg" alt="" />
              <h3>Phones</h3>
            </div>
            <div className="cat_yCard">
              <img src="/imgs/Category-Computer.svg" alt="" />
              <h3>Computers</h3>
            </div>
            <div className="cat_yCard">
              <img src="/imgs/Category-SmartWatch.svg" alt="" />
              <h3>SmartWatch</h3>
            </div>
            <div className="cat_yCard">
              <img src="/imgs/Category-Headphone.svg" alt="" />
              <h3>HeadPhones</h3>
            </div>
            <div className="cat_yCard">
              <img src="/imgs/Category-Gamepad.svg" alt="" />
              <h3>Gaming</h3>
            </div>
            <div className="cat_yCard">
              <img src="/imgs/Category-CellPhone.svg" alt="" />
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
            <button className="viewall">View All</button>
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
                  <img src="/imgs/Frame 685.svg" alt="" />
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
                    <img src="/imgs/Frame 686.svg" alt="" />
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
                    <img src="/imgs/Frame 687.svg" alt="" />
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
              <img src="/imgs/Services.svg" alt="" />
              <h2>FREE AND FAST DELIVERY</h2>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="services_box">
              <img src="/imgs/Services (1).svg" alt="" />
              <h2>24/7 CUSTOMER SERVICE</h2>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="services_box">
              <img src="/imgs/Services (2).svg" alt="" />
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
