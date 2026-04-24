import React, { useState } from "react";
import "./Product.css";
import Raiting from "../raiting/Raiting";
import { baseUrl } from "../../services";
import { picture } from "framer-motion/client";
import { FaEye } from "react-icons/fa";
import { daDK } from "@mui/material/locale";
import { NavLink } from "react-router-dom";
import ProductDetail from "../productDetail/ProductDetail";
import { GoHeart } from "react-icons/go";
function Product({ item }) {
  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  return (
    <div className="card">
      <div className="imgBox">
        <img src={`${baseUrl}${item?.pictures[0]}`} />
      </div>

      <div className="content">
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
        <GoHeart
          onClick={() => {
            handleWishlist();
          }}
        />
      </div>
      <div className="eye">
        <NavLink to={`/productdetail/${item?.id}`}>
          <FaEye />
        </NavLink>
      </div>

      <button className="cart" style={{ background: "black" }}>
        ADD TO CART
      </button>
    </div>
  );
}

export default Product;
