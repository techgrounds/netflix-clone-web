import './ButtonRating.scss'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'

import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";

const ButtonRating = () => {
  const { language } = useContext(LangContext);

  return (
    <>
      <div className='like-button header-icon-wrapper '>
        <div className='header-button-icon'>
          <ButtonRoundDarkTooltip 
          tooltiptext={language === 'EN' ? 'I Like This' : 'Vind ik leuk'}>
            <IconLike />
          </ButtonRoundDarkTooltip>
        </div>
        <div className='rating-button-wrapper'>
          <div className='dislike-button rating-button'>
            <ButtonRoundDarkTooltip 
            tooltiptext={language === 'EN' ? 'Not For Me' : 'Niet voor mij'}>
              <IconDisLike />
            </ButtonRoundDarkTooltip>
          </div>
          <div className='like-button rating-button'>
            <ButtonRoundDarkTooltip 
            tooltiptext={language === 'EN' ? 'I Like This!' : 'Vind ik leuk'}>
              <IconLike />
            </ButtonRoundDarkTooltip>
          </div>
          <div className='lovelike-button rating-button'>
            <ButtonRoundDarkTooltip 
            tooltiptext={language === 'EN' ? 'Love This!' : 'Geweldig'}>
              <IconLike />
            </ButtonRoundDarkTooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default ButtonRating
