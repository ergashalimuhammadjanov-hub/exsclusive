import React from "react";
import "./Product.css";
import Raiting from "../raiting/Raiting";
import { baseUrl } from "../../services";
import { picture } from "framer-motion/client";
import { FaEye } from "react-icons/fa";
function Product({ item }) {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={`${baseUrl}${item?.pictures[0]}`} />
      </div>

      <div className="content">
        {/* <h3>{item?.category.title}</h3> */}
        <p>{item?.title}</p>

        <div className="price_raiting">
          <div className="prices">
            <span className="discount_price">
              ${(item?.discount_price / 12000).toFixed(2)}
            </span>
            <span className="price">${(item?.price / 12000).toFixed(2)}</span>
          </div>

          <div className="raiting">
            <Raiting />
          </div>
        </div>
      </div>
      <div className="cardLike">
        <label class="ui-like">
          <input type="checkbox" />
          <div class="like">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
              </g>
            </svg>
          </div>
        </label>
      </div>
      <div className="eye">
        <FaEye />
      </div>

      <button className="cart" style={{ background: "black" }}>
        ADD TO CART
      </button>
    </div>
  );
}

export default Product;
