import React, { useState } from 'react'
import HeroBG from '../../assets/images/landing-bg.jpg'
import LandingHeader from '../LandingHeader/LandingHeader'
import ButtonRed from '../ButtonRed/ButtonRed'
import { IconArrowRight } from '../Icons/IconArrowRight'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LangContext } from '../../redux/languages/languages.context'
// import SignInModal from '../SignInModal/SignInModal'
import './styles.scss'

export default function LandingHero() {
  const { language } = useContext(LangContext)
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const [signIn, setSignIn] = useState(false)

  return (
    <div
      className='hero-container'
      style={{ backgroundImage: `url(${HeroBG})` }}>
      <LandingHeader />
      {/* {signIn ? (
        <SignInModal />
      ) : ( */}
      <div className='hero-card'>
        <h1 className='hero-card-title'>
          {language === 'EN'
            ? 'Unlimited films, TV programmes and more.'
            : 'Onbeperkt series, films en meer kijken.'}
        </h1>
        <h2 className='hero-card-subtitle'>
          {language === 'EN'
            ? 'Watch anywhere. Cancel any time.'
            : 'Kijk waar je wilt. Altijd opzegbaar.'}
        </h2>
        <form className='email-form'>
          <h3 className='email-form-title'>
            {language === 'EN'
              ? 'Ready to watch? Enter your email to create or restart your membership.'
              : 'Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen.'}
          </h3>
          <div className='input-container'>
            <input
              className='email-form-input'
              type='email'
              name='email'
              placeholder={language === 'EN' ? 'Email address' : 'E-mailadres'}
            />

            <Link to='/signin'>
              <ButtonRed
                className='start-button'
                // onClick = {() => setSignIn(true)}
                // onClick={() => setIsModalOpen(true)}
              >
                <span>{language === 'EN' ? 'Get started' : 'Aan de slag'}</span>

                <IconArrowRight />
              </ButtonRed>
            </Link>
          </div>
        </form>
        {/* {isModalOpen && <SignInModal setIsModalOpen={setIsModalOpen} />} */}
      </div>
      {/* )} */}
    </div>
  )
}
