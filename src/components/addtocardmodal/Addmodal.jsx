import React from "react";
import "./Addmodal.css";

function Addmodal() {
  return (
    <div className="overlayy">
      <div className="popup">
        <div className="popup_close">×</div>

        <div className="popup_left">
          <img src="https://picsum.photos/300" />
        </div>

        <div className="popup_right">
          <h2 className="popup_heading">futbolka</h2>

          <div className="popup_row">
            <span>Color:</span>
            <div className="color_list">
              <div className="color_item green"></div>
              <div className="color_item red"></div>
              <div className="color_item black"></div>
            </div>
          </div>

          <div className="popup_row">
            <span>Size:</span>
            <div className="size_list">
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>2XL</button>
            </div>
          </div>

          <div className="popup_row">
            <span>Quantity:</span>
            <div className="count_box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className="popup_price">price: 100000</div>

          <button className="popup_btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Addmodal;
