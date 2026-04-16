import React from "react";
import "./Product.css";
import Raiting from "../raiting/Raiting";
function Product() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <div className="imgBox">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="product"
            />
          </div>

          <div className="content">
            <h3>CLUSE</h3>
            <p>
              This La Bohème model features an ultrathin case with a 38 mm dia
            </p>

            <div className="price_raiting">
              <span className="price">$60</span>
              <Raiting />
            </div>
          </div>
          <div className="cardLike">
            <div title="Like" class="heart-container">
              <input id="Give-It-An-Id" class="checkbox" type="checkbox" />
              <div class="svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-outline"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-filled"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100"
                  width="100"
                  class="svg-celebrate"
                >
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
          </div>

          <button className="cart" style={{ background: "#2ec4b6" }}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
