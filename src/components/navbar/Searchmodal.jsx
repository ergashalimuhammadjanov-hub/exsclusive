import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import { baseUrl } from "../../services";
import "./Searchmodal.css";

const MAX_RESULTS = 10;
const DEBOUNCE_MS = 300;

function Searchmodal({ navmodal, setNavodal }) {
  const { productData } = useContext(DataContext);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const debounceRef = useRef(null);

  // Modal ochilganda inputga focus
  useEffect(() => {
    if (navmodal && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 60);
    }
  }, [navmodal]);

  // ESC bilan yopish
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (navmodal) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navmodal]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = navmodal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navmodal]);

  // Modal yopilganda state tozalash
  const closeModal = () => {
    setNavodal(false);
    setQuery("");
    setResults([]);
    setIsSearching(false);
  };

  // Overlay bosilganda yopish
  const handleOverlayClick = (e) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Debounce + filter
  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    // Oldingi debounce ni bekor qil
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (val.trim() === "") {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    debounceRef.current = setTimeout(() => {
      if (!productData || !Array.isArray(productData)) {
        setResults([]);
        setIsSearching(false);
        return;
      }

      const lower = val.toLowerCase();

      const filtered = productData
        .filter((product) =>
          product?.title?.toLowerCase().includes(lower)
        )
        .slice(0, MAX_RESULTS);

      setResults(filtered);
      setIsSearching(false);
    }, DEBOUNCE_MS);
  };

  // Mahsulotga o'tish
  const handleProductClick = (id) => {
    closeModal();
    navigate(`/productdetail/${id}`);
  };

  if (!navmodal) return null;

  return (
    <div className="sm-overlay" onClick={handleOverlayClick}>
      <div className="sm-box" ref={boxRef}>

        {/* ── INPUT ── */}
        <div className="sm-input-row">
          <svg className="sm-search-icon" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>

          <input
            ref={inputRef}
            type="text"
            className="sm-input"
            placeholder="Search for products..."
            value={query}
            onChange={handleInputChange}
          />

          {query && (
            <button
              className="sm-clear-btn"
              onClick={() => {
                setQuery("");
                setResults([]);
                inputRef.current?.focus();
              }}
            >
              ✕
            </button>
          )}

          <button className="sm-esc-btn" onClick={closeModal}>
            ESC
          </button>
        </div>

        {/* ── RESULTS ── */}
        <div className="sm-results">

          {/* Hali hech narsa yozilmagan */}
          {query === "" && (
            <div className="sm-hint">
              <svg className="sm-hint-icon" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <p>Start typing to search products...</p>
            </div>
          )}

          {/* Debounce kutilmoqda */}
          {query !== "" && isSearching && (
            <div className="sm-loading">
              <span className="sm-spinner" />
              <p>Searching...</p>
            </div>
          )}

          {/* Natijalar */}
          {query !== "" && !isSearching && results.length > 0 && (
            <>
              <p className="sm-label">
                {results.length} result{results.length > 1 ? "s" : ""} for &quot;{query}&quot;
              </p>
              <ul className="sm-list">
                {results.map((product) => (
                  <li
                    key={product.id}
                    className="sm-item"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {/* Rasm */}
                    <div className="sm-item-img-wrap">
                      <img
                        src={`${baseUrl}${product.pictures?.[0]}`}
                        alt={product.title}
                        className="sm-item-img"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>

                    {/* Matn */}
                    <div className="sm-item-info">
                      <span className="sm-item-title">{product.title}</span>
                      <div className="sm-item-prices">
                        <span className="sm-item-discount">
                          ${(product.discount_price / 12000).toFixed(2)}
                        </span>
                        {product.price !== product.discount_price && (
                          <span className="sm-item-price">
                            ${(product.price / 12000).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* O'q */}
                    <span className="sm-item-arrow">→</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Natija topilmadi */}
          {query !== "" && !isSearching && results.length === 0 && (
            <div className="sm-empty">
              <span className="sm-empty-icon">🔍</span>
              <p>No products found</p>
              <span>Try a different keyword</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Searchmodal;
