import './FilmInfoModalHeader.scss'
import movieData from '../../movies.json'
import { IconPlayBlack } from '../Icons/IconPlayBlack'
import { IconAdd } from '../Icons/IconAdd'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'
import ReactTooltip from 'react-tooltip'

const FilmInfoModalVideo = () => {
  const movie = movieData[0]

  return (
    <>
      <video autoPlay loop muted className='header-video'>
        <source src={require(`../../assets/videos/homehero.mp4`)} />
      </video>
      <div className='header-overlay'></div>
      <div className='header-container'>
        <div className='header-description'>
          <h2 className='header-title'>{movie.title}</h2>
          <div className='header-button-container'>
            <button className='header-play-button has-label'>
              <div className='home-hero-button-icon'>
                <IconPlayBlack />
              </div>
              <div style={{ width: '0.5rem' }}></div>
              <span className='home-hero-button-text'>Play</span>
            </button>
            <div className='header-button-container'>
              <button
                className='header-icon-wrapper header-add-button'
                data-tip
                data-for='add'
              >
                <div className='header-button-icon'>
                  <IconAdd />
                </div>
                <ReactTooltip
                  id='add'
                  className='tool-tip'
                  place='top'
                  type='light'
                >
                  Add to My List
                </ReactTooltip>
              </button>
            </div>
            <div className='header-button-container'>
              <button className='like-button header-icon-wrapper'>
                <div className='header-button-icon'>
                  <IconLike />
                </div>
                <div className='rating-button-wrapper'>
                  <button
                    className='dislike-button rating-button'
                    data-tip
                    data-for='dislike'
                  >
                    <IconDisLike />
                  </button>
                  <ReactTooltip
                    id='dislike'
                    className='tool-tip'
                    place='top'
                    type='light'
                  >
                    Not For Me
                  </ReactTooltip>
                  <button
                    className='like-button rating-button'
                    data-tip
                    data-for='like'
                  >
                    <IconLike />
                  </button>
                  <ReactTooltip
                    id='like'
                    className='tool-tip'
                    place='top'
                    type='light'
                  >
                    I Like This
                  </ReactTooltip>
                  <button
                    className='lovelike-button rating-button'
                    data-tip
                    data-for='love'
                  >
                    <IconLike />
                  </button>
                  <ReactTooltip
                    id='love'
                    className='tool-tip'
                    place='top'
                    type='light'
                  >
                    Love This!
                  </ReactTooltip>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalVideo
