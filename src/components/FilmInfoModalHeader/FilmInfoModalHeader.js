import './FilmInfoModalHeader.scss'
import movieData from '../../movies.json'
import { IconPlayBlack } from '../Icons/IconPlayBlack'
import { IconAdd } from '../Icons/IconAdd'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'

const FilmInfoModalVideo = () => {
  const newMovieData = movieData.slice(0, 1)

  return (
    <>
      <video autoPlay loop muted className='header-video'>
        <source src={require(`../../assets/videos/homehero.mp4`)} />
      </video>
      <div className='header-overlay'></div>
      <div className='header-container'>
        <div className='header-description'>
          {newMovieData.map((movieDetail, index) => {
            return (
              <h2 key={index} className='header-title'>
                {movieDetail.title}
              </h2>
            )
          })}
          <div className='header-button-container'>
            <button className='header-play-button has-icon has-label'>
              <div className='button-icon'>
                <IconPlayBlack />
              </div>
              <div style={{ width: '0.5rem' }}></div>
              <span className='button-text'>Play</span>
            </button>
            <div className='header-button-container'>
              <button className='header-button-icon header-add-button'>
                <div className='button-icon'>
                  <IconAdd />
                </div>
              </button>
            </div>
            <div className='header-button-container'>
              <button className='header-button-icon header-like-button'>
                <div className='button-icon'>
                  <IconLike />
                </div>
              </button>
            </div>
            <div className='header-button-container'>
              <button className='header-button-icon header-dislike-button'>
                <div className='button-icon'>
                  <IconDisLike />
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
