import movieData from '../../movies.json'
import './FilmInfoModalFooter.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'
import FilmInfoModalKijkWijzer from '../FilmInfoModalKijkWijzer/FilmInfoModalKijkWijzer'

const FilmInfoModalFooter = ({ ref }) => {
  const movie = movieData[0]

  return (
    <section className='modal-footer-container' ref={ref}>
      <div className='modal-footer-header'>
        <h2 className='modal-footer-title'>
          <span>About</span> {movie.title}
        </h2>
      </div>
      <div className='modal-footer-details'>
        <FilmInfoModalDetailsItem
          tagLabel='Director'
          tagItem={movie.director}
        />
        <FilmInfoModalDetailsItem tagLabel='Cast' tagItem={movie.actors} />
        <FilmInfoModalDetailsItem tagLabel='Writer' tagItem={movie.director} />
        <FilmInfoModalDetailsItem tagLabel='Genres' tagItem={movie.category} />
        <FilmInfoModalDetailsItem
          tagLabel='This Film is'
          tagItem={movie.category}
        />
        <div className='kijk-wijzer'>
          <FilmInfoModalDetailsItem tagLabel='Maturity Rating' />
          <FilmInfoModalKijkWijzer />
        </div>
      </div>
    </section>
  )
}

export default FilmInfoModalFooter
