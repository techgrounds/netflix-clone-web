import React, { useState } from "react"
import ButtonRed from "../ButtonRed/ButtonRed"
import InputField from "../InputField/InputField"
import { Link } from "react-router-dom"
import { IconFacebook } from "../Icons/IconFacebook"
import HeroBG from "../../assets/images/landing-bg.jpg"
import FooterSigninPage from "../FooterSigninPage/FooterSignin"

import { useContext } from "react"
import { LangContext } from "../../redux/languages/languages.context"

import "./styles.scss"
import { NetflixLogo } from "../Logos/NetflixLogo"

function SignIn({}) {
  const { language } = useContext(LangContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${HeroBG})` }}>
        <div className="logo-signin">
          <Link to="/">
            <NetflixLogo />
          </Link>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form-title">
            {language === "EN" ? "Sign In" : "Inloggen"}
          </h1>
          <InputField
            type="text"
            name="email"
            value={email}
            placeholder={
              language === "EN"
                ? "Email or phone number"
                : "E-mailadres of telefoonnummer"
            }
            handleChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            name="password"
            placeholder={language === "EN" ? "Password" : "Wachtwoord"}
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/home">
          <ButtonRed type="submit">
            {language === "EN" ? "Sign In" : "Inloggen"}
          </ButtonRed>
          </Link>
          
          <div className="checkbox">
            <div className="checkbox-container">
              <input className="checkbox-box" type="checkbox" />
              <span className="checkbox-text">
                {language === "EN" ? "Remember Me" : "Onthouden"}
              </span>
            </div>
            <div className="checkbox-link">
              <span>{language === "EN" ? "Need help?" : "Hulp nodig?"}</span>
            </div>
          </div>
          <div className="facebook-login">
            <IconFacebook className="fb-icon" />
            <span>
              {language === "EN"
                ? "Login with Facebook"
                : "Inlogen met Facebook"}
            </span>
          </div>
          <div className="login-signup-now">
            <span>
              {language === "EN" ? "New to Netflix?" : "Nieuw bij Netflix?"}
            </span>
            <Link className="signup_link" to="/">
              {language === "EN" ? "Sign Up Now" : "Meld je aan"}
            </Link>
          </div>

          <div className="terms-of-use">
            <span>
              {language === "EN"
                ? "This page is protected by Google reCAPTCHA to ensure you're not a bot."
                : "Deze pagina is beschermd door Google reCAPTCHA om te zien dat je geen robot bent."}
            </span>
            <Link className="link-learn-more" to="/">
              {language === "EN" ? "Learn more." : "Meer info"}
            </Link>
          </div>
        </form>
        <FooterSigninPage />
      </div>
    </>
  )
}

export default SignIn
