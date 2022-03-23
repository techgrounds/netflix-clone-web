import './FilmInfoModalDetails.scss'
import { IconAdd } from '../Icons/IconAdd'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'
import movieData from '../../movies.json'

const FilmInfoModalDetails = () => {
  const newMovieData = movieData.slice(0, 1)
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
          {newMovieData.map((movieDetail, index) => {
            return (
              <p className='details-title' key={index}>
                {movieDetail.description}
              </p>
            )
          })}
        </div>
        <div className='details-right'>
          <div className='details-tags details-person'>
            <span className='tags-label'>Cast:</span>
            <span className='tag-item'>Morgan Freeman,</span>
            <span className='tag-item'>Brad Pitt,</span>
            <span className='tag-item'>Gwyneth Paltrow,</span>
            <span className='tag-item'>Kevin Spacey</span>
          </div>
          <div className='details-tags details-person'>
            <span className='tags-label'>Genres:</span>
            <span className='tag-item'>Crime,</span>
            <span className='tag-item'>Mystery,</span>
            <span className='tag-item'>Drama</span>
          </div>
          <div className='details-tags details-person'>
            <span className='tags-label'>This film is:</span>
            <span className='tag-item'>Dark</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalDetails
