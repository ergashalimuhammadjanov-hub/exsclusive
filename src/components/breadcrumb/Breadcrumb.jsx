import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../App";
import "./Breadcrumb.css";

// Segment nomi → { label, linkable }
// linkable: false bo'lsa — bu segment link emas, oddiy text
const ROUTE_MAP = {
  about:         { label: "About",        linkable: true  },
  contact:       { label: "Contact",      linkable: true  },
  cart:          { label: "Cart",         linkable: true  },
  wishlist:      { label: "Wishlist",     linkable: true  },
  signup:        { label: "Sign Up",      linkable: true  },
  login:         { label: "Login",        linkable: true  },
  accaunt:       { label: "My Account",   linkable: true  },
  allproducts:   { label: "All Products", linkable: true  },
  // /category yoki /productdetail degan route YO'Q —
  // faqat /:id bilan birga ishlaydi, shuning uchun linkable: false
  category:      { label: "Category",     linkable: false },
  productdetail: { label: "Product",      linkable: false },
};

function Breadcrumb() {
  const { pathname } = useLocation();
  const { categoryData, productData } = useContext(DataContext);

  // Home da ko'rsatmaymiz
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, index) => {
    const path    = "/" + segments.slice(0, index + 1).join("/");
    const prevSeg = segments[index - 1];

    // ── Raqam (ID) segmenti ──
    if (!isNaN(seg) && seg.trim() !== "") {
      // category/:id → categoryData dan nom
      if (prevSeg === "category" && categoryData) {
        const found = categoryData.find((c) => String(c.id) === seg);
        return { label: found ? found.title : `#${seg}`, path, linkable: true };
      }
      // productdetail/:id → productData dan nom
      if (prevSeg === "productdetail" && productData) {
        const found = productData.find((p) => String(p.id) === seg);
        return { label: found ? found.title : `#${seg}`, path, linkable: true };
      }
      return { label: `#${seg}`, path, linkable: false };
    }

    // ── Matn segmenti ──
    const config = ROUTE_MAP[seg];
    if (config) {
      return { label: config.label, path, linkable: config.linkable };
    }

    // Noma'lum segment — link emas
    return {
      label: seg.charAt(0).toUpperCase() + seg.slice(1),
      path,
      linkable: false,
    };
  });

  const allCrumbs = [{ label: "Home", path: "/", linkable: true }, ...crumbs];

  return (
    <nav className="bc-wrapper" aria-label="breadcrumb">
      <div className="bc-container">
        <ol className="bc-list">
          {allCrumbs.map((crumb, index) => {
            const isLast = index === allCrumbs.length - 1;

            return (
              <li key={index} className="bc-item">
                {isLast ? (
                  // Joriy sahifa — aktiv, link emas
                  <span className="bc-active">{crumb.label}</span>
                ) : crumb.linkable ? (
                  // Mavjud route — bosiladigan link
                  <>
                    <Link to={crumb.path} className="bc-link">
                      {crumb.label}
                    </Link>
                    <span className="bc-sep" aria-hidden="true">/</span>
                  </>
                ) : (
                  // Route yo'q — oddiy text (link emas)
                  <>
                    <span className="bc-text">{crumb.label}</span>
                    <span className="bc-sep" aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
