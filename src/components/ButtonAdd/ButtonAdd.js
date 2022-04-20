import React from 'react'
import { IconAdd } from '../Icons/IconAdd'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'

import { useContext } from 'react'
import { LangContext } from '../../redux/languages/languages.context'

const ButtonAdd = () => {
  const { language } = useContext(LangContext)
  return (
    <ButtonRoundDarkTooltip
      tooltiptext={
        language === 'EN' ? 'Add to My List' : 'Toevoegen aan mijn lijst'
      }>
      <IconAdd />
    </ButtonRoundDarkTooltip>
  )
}

export default ButtonAdd
