import movieData from '../../movies.json'
import './FilmInfoModalFooter.scss'

const FilmInfoModalFooter = () => {
  return (
    <div className='modal-footer-container'>
      <div className='modal-footer-header'>
        {movieData.slice(0, 1).map((movieTitle) => {
          return <h2>{movieTitle.title}</h2>
        })}
      </div>
      <div className='modal-footer-details'>
        <div className='details-tags details-person'>
          <span className='tags-label'>Director:</span>
          {movieData.slice(0, 1).map((director) => {
            return <span className='tag-item'>{director.director}</span>
          })}
        </div>
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
      </div>
    </div>
  )
}

export default FilmInfoModalFooter
