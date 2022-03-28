import './FilmInfoModalHeader.scss'
import movieData from '../../movies.json'
import { IconPlayBlack } from '../Icons/IconPlayBlack'
import { IconAdd } from '../Icons/IconAdd'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'

const FilmInfoModalVideo = ({ ref }) => {
  const movie = movieData[0]

  return (
    <section ref={ref}>
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
              <span className='button-text'>Play</span>
            </button>
            <div className='header-button-container'>
              <button className='header-button-icon-wrapper header-add-button'>
                <div className='home-hero-button-icon'>
                  <IconAdd />
                </div>
              </button>
            </div>
            <div className='header-button-container'>
              <button className='header-button-icon-wrapper header-like-button'>
                <div className='home-hero-button-icon'>
                  <IconLike />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilmInfoModalVideo
