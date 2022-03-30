import movieData from '../../movies.json'
import './FilmInfoModalFooter.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'

const FilmInfoModalFooter = ({ ref }) => {
  const movie = movieData[0]

  return (
    <section className='modal-footer-container' ref={ref}>
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
    </section>
  )
}

export default FilmInfoModalFooter
