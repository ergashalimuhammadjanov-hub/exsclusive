import { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../../App";
import { baseUrl, addToCart, getProductDetail } from "../../services";
import toast from "react-hot-toast";
import "./Addmodal.css";

function Addmodal() {
  const { cartModal, setCartModal, refreshCart } = useContext(DataContext);

  const [qty, setQty]               = useState(1);
  const [selected, setSelected]     = useState({}); // { color: "black", size: "L" }
  const [allowedProps, setAllowed]  = useState({}); // { color: [...], size: [...] }
  const [loadingProps, setLoadingProps] = useState(false);
  const [adding, setAdding]         = useState(false);
  const addedRef                    = useRef(false);

  // Modal ochilganda mahsulot properties ni API dan olish
  useEffect(() => {
    if (!cartModal) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    setQty(1);
    setSelected({});
    setAllowed({});
    setAdding(false);
    addedRef.current = false;

    // API dan allowed properties ni olish
    setLoadingProps(true);
    getProductDetail(cartModal.id)
      .then((detail) => {
        if (detail?.properties && typeof detail.properties === "object") {
          setAllowed(detail.properties);
          // Har bir property uchun birinchi qiymatni default tanlash
          const defaults = {};
          Object.entries(detail.properties).forEach(([key, values]) => {
            if (Array.isArray(values) && values.length > 0) {
              defaults[key] = values[0];
            }
          });
          setSelected(defaults);
        }
      })
      .finally(() => setLoadingProps(false));

    return () => { document.body.style.overflow = ""; };
  }, [cartModal]);

  // ESC bilan yopish
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setCartModal(null);

  // Property tanlash
  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  // Cart ga qo'shish
  const handleAddToCart = async () => {
    if (adding || addedRef.current) return;

    if (!localStorage.getItem("token")) {
      toast.error("Iltimos avval tizimga kiring 🔐");
      return;
    }

    setAdding(true);
    addedRef.current = true;

    try {
      // Faqat tanlangan (bo'sh bo'lmagan) properties yuboriladi
      const propsToSend = Object.fromEntries(
        Object.entries(selected).filter(([, v]) => v)
      );

      await addToCart(cartModal.id, qty, propsToSend);
      toast.success("Cartga qo'shildi 🛒");
      refreshCart(); // navbar badge yangilanadi
      close();
    } catch (err) {
      addedRef.current = false;
      const msg = err.message || "";

      if (msg === "NO_TOKEN") {
        toast.error("Iltimos avval tizimga kiring 🔐");
      } else {
        try {
          const parsed = JSON.parse(msg);
          // API xato xabarini chiroyli ko'rsatish
          const firstKey = Object.keys(parsed)[0];
          const firstMsg = Array.isArray(parsed[firstKey])
            ? parsed[firstKey][0]
            : parsed[firstKey];
          toast.error(`Xatolik: ${firstMsg}`);
        } catch {
          toast.error("Xatolik yuz berdi. Qayta urinib ko'ring");
        }
      }
    } finally {
      setAdding(false);
    }
  };

  if (!cartModal) return null;

  // Rasm — pictures: [ { file, as_main } ] yoki string yoki array of strings
  const getPicture = () => {
    const pics = cartModal.pictures;
    if (!pics) return null;
    if (Array.isArray(pics)) {
      const first = pics[0];
      if (!first) return null;
      if (typeof first === "object") return `${baseUrl}${first.file}`;
      return `${baseUrl}${first}`;
    }
    return `${baseUrl}${pics}`;
  };

  const imgSrc = getPicture();
  const price  = ((cartModal.discount_price || cartModal.price || 0) / 12000).toFixed(2);
  const total  = (parseFloat(price) * qty).toFixed(2);

  // allowedProps dagi keylar: color, size, yoki boshqa narsalar
  const propKeys = Object.keys(allowedProps);

  return (
    <div className="overlayy" onClick={close}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>

        {/* Yopish */}
        <div className="popup_close" onClick={close}>×</div>

        {/* Rasm */}
        <div className="popup_left">
          {imgSrc && (
            <img className="popup_image" src={imgSrc} alt={cartModal.title} />
          )}
        </div>

        {/* Ma'lumotlar */}
        <div className="popup_right">
          <h2 className="popup_heading">{cartModal.title}</h2>

          {/* Properties loading */}
          {loadingProps ? (
            <div className="popup_props_loading">
              <span className="popup_spinner" /> Loading options...
            </div>
          ) : (
            <>
              {/* Har bir property uchun dinamik render */}
              {propKeys.map((key) => {
                const values = allowedProps[key];
                if (!Array.isArray(values) || values.length === 0) return null;

                return (
                  <div className="popup_row" key={key}>
                    <span className="popup_prop_label">
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </span>
                    <div className="popup_prop_options">
                      {values.map((val) => (
                        <button
                          key={val}
                          className={`popup_prop_btn ${
                            selected[key] === val ? "popup_prop_active" : ""
                          }`}
                          onClick={() => handleSelect(key, val)}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* Miqdor */}
          <div className="popup_row">
            <span className="popup_prop_label">Quantity:</span>
            <div className="count_box">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1}>
                −
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>

          {/* Narx */}
          <div className="popup_price">
            <span className="popup_unit">${price} × {qty}</span>
            <span className="popup_total"> = ${total}</span>
          </div>

          {/* Tugma */}
          <button
            className="popup_btn"
            onClick={handleAddToCart}
            disabled={adding || loadingProps}
          >
            {adding ? <span className="popup_spinner" /> : "🛒 Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addmodal;
