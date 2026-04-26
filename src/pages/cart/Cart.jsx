import { useState, useEffect } from "react";
import "./Cart.css";

function Cart() {
  const [son, setSon] = useState(1);

  const narx = 650;
  const subtotal = narx * son;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="cart_container">
      <div className="cart_header">
        <div className="cart_col">Product</div>
        <div className="cart_col">Price</div>
        <div className="cart_col">Quantity</div>
        <div className="cart_col">Subtotal</div>
      </div>

      <div className="cart_item">
        <div className="cart_product">
          <div className="cart_img_wrapper">
            <img
              src="https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2023061511134545031evSkSLKj3N.jpg.webp"
              alt=""
            />
          </div>
          <span className="cart_title">LCD Monitor</span>
        </div>

        <div className="cart_price">$650</div>

        <div className="cart_quantity">
          <button
            onClick={() => {
              if (son > 1) {
                setSon(son - 1);
              }
            }}
          >
            -
          </button>
          <span>{son}</span>
          <button onClick={() => setSon(son + 1)}>+</button>
        </div>

        <div className="cart_subtotal">${subtotal}</div>
      </div>

      <div className="cart_actions">
        <button className="cart_btn">Return To Shop</button>
        <button className="cart_btn">Update Cart</button>
      </div>

      <div className="cart_bottom">
        <div className="cart_coupon">
          <input type="text" placeholder="Coupon Code" className="cart_input" />
          <button className="cart_apply_btn">Apply Coupon</button>
        </div>

        <div className="cart_total">
          <h3>Cart Total</h3>

          <div className="cart_row">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="cart_row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="cart_row total">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="cart_checkout_btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
