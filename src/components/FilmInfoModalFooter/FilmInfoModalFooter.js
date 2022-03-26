import movieData from '../../movies.json'
import './FilmInfoModalFooter.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'

const FilmInfoModalFooter = () => {
  const movie = movieData[0]

  return (
    <div className='modal-footer-container'>
      <div className='modal-footer-header'>
        <h2>{movie.title}</h2>
      </div>
      <div className='modal-footer-details'>
        <FilmInfoModalDetailsItem tagLabel='Cast' tagItem={movie.actors} />
        <FilmInfoModalDetailsItem tagLabel='Genres' tagItem={movie.category} />
        <FilmInfoModalDetailsItem
          tagLabel='Director'
          tagItem={movie.director}
        />
      </div>
    </div>
  )
}

export default FilmInfoModalFooter
