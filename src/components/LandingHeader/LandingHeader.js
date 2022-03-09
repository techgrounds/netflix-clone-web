import React from 'react';
import ButtonRed from '../ButtonRed/ButtonRed';
import { NetflixLogo } from './../Logos/NetflixLogo';

import './styles.scss';

export default function LandingHeader({}) {
  return (
    <div className="landing-page-header">
      <div className="logo">
        <NetflixLogo />
      </div>
      <ButtonRed>Sign In</ButtonRed>
    </div>
  );
}
