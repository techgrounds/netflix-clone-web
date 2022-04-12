import './ButtonRating.scss'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'

const ButtonRating = () => {
  return (
    <>
      <div className='like-button header-icon-wrapper '>
        <div className='header-button-icon'>
          <ButtonRoundDarkTooltip tooltiptext='I Like This'>
            <IconLike />
          </ButtonRoundDarkTooltip>
        </div>
        <div className='rating-button-wrapper'>
          <div className='dislike-button rating-button'>
            <ButtonRoundDarkTooltip tooltiptext='Not For Me'>
              <IconDisLike />
            </ButtonRoundDarkTooltip>
          </div>
          <div className='like-button rating-button'>
            <ButtonRoundDarkTooltip tooltiptext='I Like This!'>
              <IconLike />
            </ButtonRoundDarkTooltip>
          </div>
          <div className='lovelike-button rating-button'>
            <ButtonRoundDarkTooltip tooltiptext='  Love This!'>
              <IconLike />
            </ButtonRoundDarkTooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default ButtonRating
