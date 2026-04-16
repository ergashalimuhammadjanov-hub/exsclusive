import React from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
function Signup() {
  return (
    <div className="sign">
      <img src="./imgs/Side Image.svg" alt="" />
      <div className="sign_up">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <div className="sing_inputs">
          <div class="input-container">
            <input placeholder="Name" class="input-field" type="text" />
            <label for="input-field" class="input-label">
              Enter name
            </label>
            <span class="input-highlight"></span>
          </div>
          <div class="input-container">
            <input
              placeholder="Email or Phone Number"
              class="input-field"
              type="text"
            />
            <label for="input-field" class="input-label">
              Enter email or phone number
            </label>
            <span class="input-highlight"></span>
          </div>
          <div class="input-container">
            <input placeholder="Password" class="input-field" type="text" />
            <label for="input-field" class="input-label">
              Enter password
            </label>
            <span class="input-highlight"></span>
          </div>

          <div className="signbutton">
            <button className="accaunt">Create Account</button>
            <button className="withgoogle">
              <img src="./imgs/Icon-Google.svg" alt="" />
              Sign up with Google
            </button>
          </div>
        </div>
        <div className="already">
          <p>
            Already have account? <NavLink to={"/login"} title="Login">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
