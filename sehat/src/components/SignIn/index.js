import React from "react";
import "./style.css";
import icon from "../HomePage/images/icon.png";

function SignIn() {
  return (
    <div className="text-center sign-in-container sign-in-container-2">
      <main class="form-signin w-100 m-auto">
        <form className="signin-form">
          <img className="sign-up-logo" src={icon} alt="sehat-icon" />

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default SignIn;
