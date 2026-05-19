import { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { getCart, removeFromCart, baseUrl } from "../../services";
import { DataContext } from "../../App";
import { MdDelete } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";
import "./Cart.css";

// ─── Helpers ─────────────────────────────────────────────────

const normalizeCart = (data) => {
  if (Array.isArray(data))             return data;
  if (Array.isArray(data?.results))    return data.results;
  if (Array.isArray(data?.items))      return data.items;
  if (Array.isArray(data?.cart_items)) return data.cart_items;
  return [];
};

// pictures quyidagi formatlarda kelishi mumkin:
//  1. string  → "/media/photo.jpg"          (cart API — Product serializer)
//  2. string  → "http://..."                (to'liq URL)
//  3. array of string → ["/media/..."]
//  4. array of object → [{ file: "/media/...", as_main: false }]  (product detail API)
//  5. null / undefined
const getImgSrc = (product) => {
  if (!product) return "/no-image.png";

  const pic = product.pictures;
  if (!pic) return "/no-image.png";

  let path = null;

  if (typeof pic === "string") {
    // 1 & 2 — to'g'ridan string
    path = pic;
  } else if (Array.isArray(pic) && pic.length > 0) {
    const first = pic[0];
    if (typeof first === "string") {
      // 3 — array of string
      path = first;
    } else if (first?.file) {
      // 4 — array of { file, as_main }
      path = first.file;
    }
  }

  if (!path) return "/no-image.png";

  // To'liq URL bo'lsa (http/https) — as-is ishlatamiz
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // Relative path — baseUrl qo'shamiz
  return `${baseUrl}${path}`;
};

// Narxni dollar ga o'girish
const toDollar = (val) =>
  val ? (parseFloat(val) / 12000).toFixed(2) : "0.00";

// ─── Component ───────────────────────────────────────────────
function Cart() {
  const { refreshCart } = useContext(DataContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [removing, setRemoving]   = useState(null); // o'chirilayotgan item id

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getCart();
      const items = normalizeCart(data);
      // Birinchi item strukturasini ko'rish uchun
      if (items.length > 0) console.log("Cart item sample:", items[0]);
      setCartItems(items);
    } catch {
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [fetchCart]);

  // O'chirish
  const handleRemove = async (itemId) => {
    if (removing === itemId) return;
    setRemoving(itemId);
    try {
      await removeFromCart(itemId);
      setCartItems((prev) => prev.filter((i) => i.id !== itemId));
      refreshCart(); // navbar badge yangilanadi
      toast.success("Cartdan o'chirildi");
    } catch {
      toast.error("O'chirishda xatolik");
      fetchCart(); // serverdan qayta yuklaymiz
    } finally {
      setRemoving(null);
    }
  };

  // Miqdor o'zgartirish (faqat UI — backend update endpoint yo'q)
  const handleQtyChange = (itemId, delta) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === itemId
          ? { ...i, quantity: Math.max(1, (i.quantity || 1) + delta) }
          : i
      )
    );
  };

  // Jami hisob
  const subtotal = cartItems.reduce((sum, item) => {
    const product = item?.product || item;
    const price   = parseFloat(toDollar(product?.discount_price || product?.price));
    return sum + price * (item.quantity || 1);
  }, 0);

  // ─── Render ────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="cart_container">
        <div className="cart_loading">
          {[1, 2, 3].map((i) => <div key={i} className="cart_skeleton" />)}
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart_container">
        <div className="cart_empty">
          <FiShoppingCart className="cart_empty_icon" />
          <h3>Your cart is empty</h3>
          <p>Add some products to get started</p>
          <Link to="/" className="cart_empty_btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart_container">

      {/* Header */}
      <div className="cart_header">
        <div className="cart_col">Product</div>
        <div className="cart_col">Price</div>
        <div className="cart_col">Quantity</div>
        <div className="cart_col">Subtotal</div>
        <div className="cart_col"></div>
      </div>

      {/* Items */}
      {cartItems.map((item) => {
        // product ichida yoki to'g'ridan-to'g'ri item da bo'lishi mumkin
        const product   = item?.product || item;
        const price     = parseFloat(toDollar(product?.discount_price || product?.price));
        const qty       = item.quantity || 1;
        const lineTotal = (price * qty).toFixed(2);
        const imgSrc    = getImgSrc(product);
        const title     = product?.title || "Product";
        const size      = item?.properties?.size || null;

        return (
          <div className="cart_item" key={item.id}>

            {/* Mahsulot */}
            <div className="cart_product">
              <div className="cart_img_wrapper">
                <img
                  src={imgSrc}
                  alt={title}
                  onError={(e) => { e.target.src = "/no-image.png"; }}
                />
              </div>
              <div className="cart_item_info">
                <span className="cart_title">{title}</span>
                {size && <span className="cart_size">Size: {size}</span>}
              </div>
            </div>

            {/* Narx */}
            <div className="cart_price">${price.toFixed(2)}</div>

            {/* Miqdor */}
            <div className="cart_quantity">
              <button onClick={() => handleQtyChange(item.id, -1)}>−</button>
              <span>{qty}</span>
              <button onClick={() => handleQtyChange(item.id, +1)}>+</button>
            </div>

            {/* Jami */}
            <div className="cart_subtotal">${lineTotal}</div>

            {/* O'chirish */}
            <div className="cart_delete">
              {removing === item.id ? (
                <span className="cart_removing" />
              ) : (
                <MdDelete
                  className="cart_delete_icon"
                  onClick={() => handleRemove(item.id)}
                  title="Remove"
                />
              )}
            </div>
          </div>
        );
      })}

      {/* Actions */}
      <div className="cart_actions">
        <Link to="/"><button className="cart_btn">Return To Shop</button></Link>
        <button className="cart_btn" onClick={fetchCart}>Update Cart</button>
      </div>

      {/* Bottom */}
      <div className="cart_bottom">
        <div className="cart_coupon">
          <input type="text" placeholder="Coupon Code" className="cart_input" />
          <button className="cart_apply_btn">Apply Coupon</button>
        </div>

        <div className="cart_total">
          <h3>Cart Total</h3>
          <div className="cart_row">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="cart_row">
            <span>Shipping:</span>
            <span className="cart_free">Free</span>
          </div>
          <div className="cart_row total">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="cart_checkout_btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
