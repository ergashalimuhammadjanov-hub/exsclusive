import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import { baseUrl } from "../../services";

function Wishlist() {
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setLikeData(wishlist);
  }, []);
  return (
    <div className="wishlist">
      {likeData.map((item) => {
        return (
          <div className="product-card" key={item.id}>
            <div className="image-box">
              <img src={`${baseUrl}${item.pictures[0]}`} />
              <div className="delete-btn">🗑</div>
            </div>

            <button className="add-btn">🛒 Add To Cart</button>

            <div className="info">
              <p className="title">{item.title}</p>
              <p className="price">
                ${(item.discount_price / 12000).toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wishlist;
