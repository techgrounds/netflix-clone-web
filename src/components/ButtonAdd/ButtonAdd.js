import React from 'react'
import { IconAdd } from '../Icons/IconAdd'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'
import './ButtonAdd.scss'

const ButtonAdd = () => {
  return (
    <ButtonRoundDarkTooltip tooltiptext='Add to My List'>
      <IconAdd />
    </ButtonRoundDarkTooltip>
  )
}

export default ButtonAdd
