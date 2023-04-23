import { useState } from "react";
import "./style/login.css"
import BackgroundImage from "../../Images/manila_reception.jpg"

export default function Login() {
  return (
    <div className="login-container">
      <img src={BackgroundImage} alt="" className="background-image" />

      <div className="container-mid">
        <h1 className="welcome-falcon">Welcome to FALCon <br /> ERC!</h1>

        <form action="" className="sign-in">
          <label className="label-email">Email</label><br />
          <input type="email" name="email" className="email-input" placeholder="Email"/><br />

          <label className="label-password">Password</label>
          <input type="password" name="password" className="email-input" placeholder="Password"/><br />
          
          <a className="forgot-pas" href="/forgotpassword">Forgot Password?</a><br />
          
          <button className="buttn-log" name="log">Log In</button>
        </form>

      </div>
    </div>
  );
};
