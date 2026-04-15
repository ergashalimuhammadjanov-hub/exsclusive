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

          <button className="cart" style={{ background: "#2ec4b6" }}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
