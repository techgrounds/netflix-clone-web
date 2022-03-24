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

      <div className='header-description'>
        {newMovieData.map((movieDetail, index) => {
          return (
            <h2 key={index} className='header-title'>
              {movieDetail.title}
            </h2>
          )
        })}
        <div className='header-button-wrapper'>
          <button className='header-play-button'>
            <IconPlayBlack />
            <div style={{ width: '1rem' }}></div>
            <span>Play</span>
          </button>
          <button className='header-button header-add-button'>
            <IconAdd />
          </button>
          <button className='header-button header-like-button'>
            <IconLike />
          </button>
          <button className='header-button header-dislike-button'>
            <IconDisLike />
          </button>
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalVideo
