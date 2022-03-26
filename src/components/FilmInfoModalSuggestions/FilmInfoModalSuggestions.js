import './FilmInfoModalSuggestions.scss'
import { IconSearch } from '../Icons/IconSearch'
import { useState } from 'react'
import { IconLike } from '../Icons/IconLike'
import { IconAdd } from '../Icons/IconAdd'
import movieData from '../../movies.json'

const FilmInfoModalSuggestions = () => {
  const [amountVisible, setAmountVisible] = useState(6)

  const showMoreItems = () => {
    setAmountVisible((peviousValue) => peviousValue + 3)
  }

  return (
    <>
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
                    <button className='details-button details-like-button'>
                      <IconLike />
                    </button>
                  </div>
                  <div className='suggestions-year'>1996</div>
                </div>
                <div className='suggestions-second-line'>
                  <button className='details-button details-like-button'>
                    <IconAdd />
                  </button>
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
        <button className='suggestions-button' onClick={showMoreItems}>
          <IconSearch />
        </button>
      </div>
    </>
  )
}

export default FilmInfoModalSuggestions
