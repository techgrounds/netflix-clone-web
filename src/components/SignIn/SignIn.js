import React, { useState } from "react";
import ButtonRed from "../ButtonRed/ButtonRed";
import InputField from "../InputField/InputField";
import { Link } from "react-router-dom";
import { IconFacebook } from '../Icons/IconFacebook'
import HeroBG from '../../assets/images/landing-bg.jpg';


import "./styles.scss";
import { NetflixLogo } from "../Logos/NetflixLogo";

function SignIn({ }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container"
    style={{ backgroundImage: `url(${HeroBG})` }}
    >
      <div className="logo-signin">
      <Link to='/'>
        <NetflixLogo />
      </Link>

      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Sign In</h1>
        <InputField
          type="text"
          name="email"
          value={email}
          placeholder="Email or phone number"
          handleChange = {(e) => setEmail(e.target.value)}
        />
        <InputField 
          
          type="password" 
          name="password" 
          placeholder="Password" 
          value={password}
          handleChange = {(e) => setPassword(e.target.value)}
        />
        <ButtonRed type="submit">
          Sign In
        </ButtonRed>
        <div className="checkbox">
          <div className="checkbox-container">
            <input className="checkbox-box" type="checkbox" />
            <span className="checkbox-text">Remember Me</span>
          </div>
          <div className="checkbox-link">
            <span>Need help?</span>
          </div>
        </div>
        <div className="facebook-login">
          <IconFacebook className="fb-icon"/>
          <span>Login with Facebook</span>
        </div>
        <div className="login-signup-now">
          <span>New to Netflix</span>
          <Link className="signup_link" to="/">Sign Up Now</Link>
        </div>

        <div className="terms-of-use">
          <span>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </span>
          <Link className="link-learn-more" to="/">Learn more.</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
