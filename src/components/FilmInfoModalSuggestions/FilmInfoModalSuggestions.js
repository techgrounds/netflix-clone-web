import './FilmInfoModalSuggestions.scss'
import { useState } from 'react'
import { IconKijkWijzer16 } from '../Icons/IconKijkWijzer16'
import { IconAdd } from '../Icons/IconAdd'
import { IconArrowDown } from '../Icons/IconArrowDown'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'
import movieData from '../../movies.json'

const FilmInfoModalSuggestions = () => {
  const [amountVisible, setAmountVisible] = useState(6)

  const showMoreItems = () => {
    setAmountVisible((peviousValue) => peviousValue + 3)
  }

  return (
    <section>
      <h3 className='suggestions-title'>More Like This</h3>
      <div className='suggestions-container collapsed'>
        {movieData.slice(0, amountVisible).map(({ id, description }) => (
          <div className='suggestions-item' key={id}>
            <div className='suggestions-image'>
              <img
                src={require(`../../assets/mockup_images/${id}`)}
                alt='suggestion'
              />
              <span className='suggestions-duration'>1h 6m</span>
            </div>
            <div className='suggestions-description'>
              <div className='suggestions-top'>
                <div className='suggestions-first-line'>
                  <div className='suggestions-icon'>
                    <button className='details-button'>
                      <IconKijkWijzer16 />
                    </button>
                  </div>
                  <div className='suggestions-year'>1996</div>
                </div>
                <div className='suggestions-second-line'>
                  <ButtonRoundDarkTooltip tooltiptext='Add to My List'>
                    <IconAdd />
                  </ButtonRoundDarkTooltip>
                </div>
              </div>
              <div className='suggestions-bottom'>
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='suggestions-divider collapsed'>
        <div
          className='suggestions-button'
          onClick={() => showMoreItems((prevProps) => !prevProps)}
        >
          <ButtonRoundDarkTooltip tooltiptext='Show more'>
            <IconArrowDown />
          </ButtonRoundDarkTooltip>
        </div>
      </div>
    </section>
  )
}

export default FilmInfoModalSuggestions
