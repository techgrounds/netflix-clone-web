import './FilmInfoModalDetails.scss'
import { IconAdd } from '../Icons/IconAdd'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'
import movieData from '../../movies.json'

const FilmInfoModalDetails = () => {
  const newMovieData = movieData.slice(0, 1)
  return (
    <div className='details-contrainer'>
      <div className='details-wrapper'>
        <div className='details-left'>
          <div className='first-line'>
            <span className='match-title'>97% Match</span>
            <span className='release-title'>2020</span>
            <div className='details-icons'>
              <button className='details-button details-add-button'>
                <IconAdd />
              </button>
              <button className='details-button details-like-button'>
                <IconLike />
              </button>
              <button className='details-button details-dislike-button'>
                <IconDisLike />
              </button>
            </div>
            <span>1h 45m</span>
          </div>
          <div style={{ marginBottom: '2em' }}></div>
          <p className='details-description'>
            {newMovieData.map((movieDetail, index) => {
              return <div key={index}>{movieDetail.description}</div>
            })}
          </p>
        </div>
        <div className='details-right'>
          <div className='details-tags details-person'>
            <span className='tags-label'>Cast:</span>
            <span className='tag-item'>Morgan Freeman,</span>
            <span className='tag-item'>Brad Pitt,</span>
            <span className='tag-item'>Gwyneth Paltrow</span>
          </div>
          <div className='details-tags details-person'>
            <span className='tags-label'>Genres:</span>
            <span className='tag-item'>Crime</span>
            <span className='tag-item'>Mystery</span>
            <span className='tag-item'>Drama</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmInfoModalDetails
