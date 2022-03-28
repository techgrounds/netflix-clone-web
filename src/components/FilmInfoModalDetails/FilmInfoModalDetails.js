import './FilmInfoModalDetails.scss'
import { IconAdd } from '../Icons/IconAdd'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'
import movieData from '../../movies.json'

const FilmInfoModalDetails = () => {
  return (
    <>
      <div className='details-wrapper'>
        <div className='details-left'>
          <div className='first-line'>
            <span className='match-title'>97% Match</span>
            <span className='release-title'>1995</span>
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
            <span>2h 15m</span>
          </div>
          <div style={{ marginBottom: '1em' }}></div>
          {movieData.slice(0, 1).map((movieDetail, index) => {
            return (
              <p className='details-description' key={index}>
                {movieDetail.description}
              </p>
            )
          })}
        </div>
        <div className='details-right'>
          <div className='details-tags details-person'>
            <span className='tags-label'>Cast:</span>
            {movieData.slice(0, 1).map((cast) => {
              return <span className='tag-item'>{cast.actors}</span>
            })}
          </div>
          <div className='details-tags details-person'>
            <span className='tags-label'>Genres:</span>
            {movieData.slice(0, 1).map((genre) => {
              return <span className='tag-item'>{genre.category}</span>
            })}
          </div>
          <div className='details-tags details-person'>
            <span className='tags-label'>Director:</span>
            {movieData.slice(0, 1).map((director) => {
              return <span className='tag-item'>{director.director}</span>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalDetails
