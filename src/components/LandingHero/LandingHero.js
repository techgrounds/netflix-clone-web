import React, { useState } from 'react'
import HeroBG from '../../assets/images/landing-bg.jpg'
import LandingHeader from '../LandingHeader/LandingHeader'
import ButtonRed from '../ButtonRed/ButtonRed'
import { IconArrowRight } from '../Icons/IconArrowRight'
import { Link } from 'react-router-dom'
// import SignInModal from '../SignInModal/SignInModal'
import './styles.scss'

export default function LandingHero() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const [signIn, setSignIn] = useState(false)

  return (
    <div
      className='hero-container'
      style={{ backgroundImage: `url(${HeroBG})` }}
    >
      <LandingHeader />
      {/* {signIn ? (
        <SignInModal />
      ) : ( */}
      <div className='hero-card'>
        <h1 className='hero-card-title'>
          Unlimited films, TV <br></br> programmes and more.
        </h1>
        <h2 className='hero-card-subtitle'>
          Watch anywhere. Cancel at any time.
        </h2>
        <form className='email-form'>
          <h3 className='email-form-title'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <input
            className='email-form-input'
            type='email'
            name='email'
            placeholder='Email address'
          />
          <ButtonRed
          // onClick = {() => setSignIn(true)}
          // onClick={() => setIsModalOpen(true)}
          >
            <Link to='/signin'>
              <span>Get Started</span>
            </Link>
            <div className='chevron-right-arrow'>
              <IconArrowRight />
            </div>
          </ButtonRed>
        </form>
        {/* {isModalOpen && <SignInModal setIsModalOpen={setIsModalOpen} />} */}
      </div>
      {/* )} */}
    </div>
  )
}
