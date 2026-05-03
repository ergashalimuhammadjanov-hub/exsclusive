import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <div className="error">
        <img
          src="https://user-images.githubusercontent.com/95972251/180693173-4c987bcd-43a0-4c5c-beac-a05d5e396b91.gif"
          alt=""
        />
      </div>
      <div className="errorBtn">
        <Link to={"/"}>
          <button>Bosh sahifaga qaytish</button>
        </Link>
      </div>
    </>
  );
}

export default Error;
