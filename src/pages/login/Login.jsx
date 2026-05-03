import { useEffect, useState, useContext } from "react";
import "./Login.css";
import { loginFunc } from "../../services";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

function Login() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(DataContext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [eye, setEye] = useState(false);

  return (
    <div className="login">
      <img className="login__image" src="./imgs/Side Image.svg" alt="" />

      <div className="login__form">
        <h1 className="login__title">Log in to Exclusive</h1>
        <p className="login__subtitle">Enter your details below</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginFunc(email, password).then((info) => {
              if (info?.access) {
                toast.success("Foydalanuvchi tizimga kirdi ✅");
                setToken(info?.access);
                localStorage.setItem("token", info?.access);
                navigate("/");
              } else {
                toast.error(info?.non_field_errors || "Xatolik yuz berdi ❌");
              }
            });
          }}
          className="login__inputs"
        >
          <div className="login__input-group">
            <input
              required
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email or Phone Number"
              className="login__input"
              type="email"
            />
            <label className="login__label">Enter email or phone number</label>
            <span className="login__underline"></span>
          </div>

          <div className="login__input-group">
            <input
              required
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="login__input"
              type={eye ? "text" : "password"}
            />
            <label className="login__label">Enter password</label>
            <span className="login__underline" onClick={() => setEye(!eye)}>
              {eye ? (
                <IoMdEyeOff className="eyeofff" />
              ) : (
                <IoEye className="signeyee" />
              )}
            </span>
          </div>

          <div className="login__actions">
            <button className="login__button">Log In</button>
            <p className="login__forgot">Forget Password?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
