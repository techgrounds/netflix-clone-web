import React from 'react'
import ButtonRed from '../ButtonRed/ButtonRed'

import './styles.scss'

export default function LandingHeader() {
  return (
    <div className="landing-page-header">
      <div className="logo">
        
      </div>
      <ButtonRed btnLink='/SignIn' btnTxt='Sign In'/>
    </div>
  )
}
