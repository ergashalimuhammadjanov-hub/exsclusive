import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../../App";
import { baseUrl } from "../../services";
import Skeleton from "@mui/material/Skeleton";
import Product from "../../components/products/Product";


function ProductDetail() {
  const { id } = useParams();
  const { productData } = useContext(DataContext);

  const product = productData.find((item) => String(item.id) === String(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);
  return (
    <div>
      <div className="product-container">
        <div className="thumbnail-gallery">
          <div className="thumb-item">
            <img
              src={`${baseUrl}/${product?.pictures?.[0] || ""}`}
              alt="thumb"
            />
          </div>
          <div className="thumb-item">
            <img
              src={`${baseUrl}/${product?.pictures?.[1] || ""}`}
              alt="thumb"
            />
          </div>
          <div className="thumb-item">
            <img
              src={`${baseUrl}/${product?.pictures?.[2] || ""}`}
              alt="thumb"
            />
          </div>
          <div className="thumb-item">
            <img
              src={`${baseUrl}/${product?.pictures?.[3] || ""}`}
              alt="thumb"
            />
          </div>
        </div>

        <div className="main-image-container">
          <div className="image-blob-bg">
            <img
              src={`${baseUrl}${product?.pictures[0]}`}
              alt="Main Product"
              className="main-image"
            />
          </div>
        </div>

        <div className="product-details">
          <nav className="breadcrumb">
            <span>{product.category.title}</span>
          </nav>

          <h1 className="product-title">{product.title}</h1>

          <div className="rating-section">
            <span className="stars">★{product.stars}</span>
          </div>

          <div className="discount_price">
            <h2>Price :</h2>${Math.floor(product.discount_price / 12000)}
          </div>
          <hr className="divider" />

          <div className="option-group">
            <span className="label">Colours:</span>
            <div className="color-options">
              <div className="color-circle green"></div>
              <div className="color-circle red active"></div>
              <div className="color-circle black"></div>
            </div>
          </div>

          <div className="option-group">
            <span className="label">Size:</span>
            <div className="size-options">
              <button className="size-btn">M</button>
              <button className="size-btn active">L</button>
              <button className="size-btn">XL</button>
              <button className="size-btn">2XL</button>
            </div>
          </div>

          <div className="purchase-actions">
            <div className="quantity-selector">
              <button>-</button>
              <input type="number" value={1} readOnly />
              <button>+</button>
            </div>
            <button className="buy-now-btn">Buy Now</button>
          </div>

          <div className="delivery-info">
            <div className="info-row">
              <i className="icon-truck">
                <img src="/imgs/icon-delivery.svg" alt="" />
              </i>
              <div>
                <p className="info-title">Free Delivery</p>
                <p className="info-sub">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="info-row">
              <i className="icon-return">
                <img src="/imgs/Icon-return.svg" alt="" />
              </i>
              <div>
                <p className="info-title">Return Delivery</p>
                <p className="info-sub">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Suggpr">
        <h1 className="prdetai">Suggested products</h1>
      </div>
      <div className="detailProducts">
        {productData
          ? productData?.slice(11, 19).map((item) => {
              return <Product key={item?.id} item={item} />;
            })
          : [1, 1, 1, 1].map((item) => {
              return (
                <div className="skeleton-wrapper">
                  <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="circular" width={60} height={60} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                  </Stack>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ProductDetail;
