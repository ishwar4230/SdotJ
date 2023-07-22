import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");

    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="bx bxs-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or sign in with social platforms</p>

            <div className="social-media">
              {/* <a href="#" className="social-icon"> */}
                {/* <i className='bx bxl-facebook'></i> */}
                <SocialIcon url="https://facebook.com" />
              {/* </a> */}
              {/* <a href="#" className="social-icon"> */}
                {/* <i className="bx bxl-twitter"></i> */}
                <SocialIcon url="https://twitter.com" />
              {/* </a> */}
              {/* <a href="#" className="social-icon"> */}
                {/* <i className="bx bxl-google"></i> */}
                <SocialIcon url="https://google.com" />
              {/* </a> */}
              {/* <a href="#" className="social-icon"> */}
                {/* <i className="bx bxl-linkedin"></i> */}
                <SocialIcon url="https://linkedin.com" />
              {/* </a> */}
            </div>
          </form>
          <form className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="bx bxs-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="bx bxs-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />
            <p className="social-text">Or sign up with social platforms</p>

            <div className="social-media">
              {/* <a href="#" className="social-icon"> */}
                {/* <i className="bx bxl-facebook"></i> */}
                <SocialIcon url="https://facebook.com" />
              {/* </a> */}
              {/* <a href="#" className="social-icon"> */}
                {/* <i className="bx bxl-twitter"></i> */}
                <SocialIcon url="https://twitter.com" />
              {/* </a> */}
              {/* <a href="#" className="social-icon"> */}
                {/* <i className="bx bxl-google"></i> */}
                <SocialIcon url="https://google.com" />
              {/* </a> */}
              {/* <a href="#" className="social-icon"> */}
                {/* <i className="bx bxl-linkedin"></i> */}
                <SocialIcon url="https://linkedin.com" />
              {/* </a> */}
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
                "Discover the Art of Hospitality - Sign up now to unlock exclusive offers, exceptional services, and create timeless memories in our luxurious hotels. Your perfect escape awaits!"
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img
            src="/images/Profiling_Monochromatic.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
                "Welcome back to a world of extraordinary experiences! Sign in to access your personalized reservations, manage your bookings, and indulge in our impeccable hospitality. We're thrilled to continue making your stays truly unforgettable."
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img
            src="/images/Authentication_Outline.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
