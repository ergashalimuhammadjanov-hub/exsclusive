import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img className="login__image" src="./imgs/Side Image.svg" alt="" />

      <div className="login__form">
        <h1 className="login__title">Log in to Exclusive</h1>
        <p className="login__subtitle">Enter your details below</p>

        <div className="login__inputs">
          <div className="login__input-group">
            <input
              placeholder="Email or Phone Number"
              className="login__input"
              type="text"
            />
            <label className="login__label">Enter email or phone number</label>
            <span className="login__underline"></span>
          </div>

          <div className="login__input-group">
            <input
              placeholder="Password"
              className="login__input"
              type="password"
            />
            <label className="login__label">Enter password</label>
            <span className="login__underline"></span>
          </div>

          <div className="login__actions">
            <button className="login__button">Log In</button>
            <p className="login__forgot">Forget Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
