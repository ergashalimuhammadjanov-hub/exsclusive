import { useEffect, useState } from "react";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signUpFuc } from "../../services";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [eye, setEye] = useState(false);
  return (
    <div className="sign">
      <img src="./imgs/Side Image.svg" alt="" />
      <div className="sign_up">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        {/* FORM */}
        <form
          className="sing_inputs"
          onSubmit={(e) => {
            e.preventDefault();
            signUpFuc(email, name, password).then((info) => {
              if (
                info?.message ==
                "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi."
              ) {
                navigate("/login");
              }
            });
          }}
        >
          <div class="input-container">
            <input
              onInput={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              class="input-field"
              type="text"
            />
            <label for="input-field" class="input-label">
              Enter name
            </label>
            <span class="input-highlight"></span>
          </div>
          <div class="input-container">
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email or Phone Number"
              class="input-field"
              type="email"
            />
            <label for="input-field" class="input-label">
              Enter email or phone number
            </label>
            <span class="input-highlight"></span>
          </div>
          <div class="input-container">
            <input
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              class="input-field"
              type={eye ? "text" : "password"}
            />
            <label for="input-field" class="input-label">
              Enter password
            </label>
            {/* eye */}
            <span className="input-highlight" onClick={() => setEye(!eye)}>
              {eye ? (
                <IoMdEyeOff className="eyeoff" />
              ) : (
                <IoEye className="signeye" />
              )}
            </span>
          </div>

          <div className="signbutton">
            <button className="accaunt">Create Account</button>
            <button className="withgoogle">
              <img src="./imgs/Icon-Google.svg" alt="" />
              Sign up with Google
            </button>
          </div>
        </form>
        <div className="already">
          <p>
            Already have account?{" "}
            <NavLink to={"/login"} title="Login">
              Log in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
