import React from 'react'
import { IconCheck } from '../Icons/IconCheck'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'
import './ButtonCheck.scss'

const ButtonCheck = () => {
  return (
    <ButtonRoundDarkTooltip tooltiptext='Add to My List'>
      <IconCheck />
    </ButtonRoundDarkTooltip>
  )
}

export default ButtonCheck
