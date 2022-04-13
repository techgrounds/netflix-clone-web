import React from 'react'
import { IconCheck } from '../Icons/IconCheck'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'
import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";

import './ButtonCheck.scss'

const ButtonCheck = () => {
  const { language } = useContext(LangContext);
  return (
    <ButtonRoundDarkTooltip 
    tooltiptext={language === 'EN' ? 'Add to My List' : 'Toevoegen aan mijn lijst'}>
      <IconCheck />
    </ButtonRoundDarkTooltip>
  )
}

export default ButtonCheck
