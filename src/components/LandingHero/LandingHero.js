import React from 'react'
import HeroBG from '../../assets/images/landing-bg.jpg'
import LandingHeader from '../LandingHeader/LandingHeader'

import './styles.scss'

export default function LandingHero() {
  return (
    <div className="hero-container" style={{backgroundImage: `url(${HeroBG})`}}>
      <div className="hero-card">
        <h1 className="hero-card-title">
        Unlimited films, TV <br></br> programmes and more.
        </h1>
        <h2 className="hero-card-subtitle">
        Watch anywhere. Cancel at any time.
        </h2>
        <form className="email-form">
          <h3 className="email-form-title">
          Ready to watch? Enter your email to create or restart your membership.
          </h3>
          <input className="email-form-input" type="email" name="email" placeholder="Email address"/>
          <button className="email-from-btn" type="submit" role="button">
            <span className="btn-text">Get started</span>
            <span className="chevron-right-arrow">&#62;</span>
          </button>
        </form>
      </div>
   
  </div>
  )
}

