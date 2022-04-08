import movieData from '../../movies.json'
import './FilmInfoModalFooter.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'
import FilmInfoModalKijkWijzer from '../FilmInfoModalKijkWijzer/FilmInfoModalKijkWijzer'

const FilmInfoModalFooter = ({ ref }) => {
  const movie = movieData[1]

  const { actors } = movieData[1]
  const seperatedActors = actors.split(',')

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
        <div className='details-tags'>
          <span className='tags-label'>Cast:</span>
          {seperatedActors.map((actor, id) => {
            return (
              <span className='tag-item' key={id}>
                {actor},
              </span>
            )
          })}
        </div>
        <FilmInfoModalDetailsItem tagLabel='Writer' tagItem={movie.director} />
        <FilmInfoModalDetailsItem tagLabel='Genres' tagItem={movie.category} />
        <FilmInfoModalDetailsItem
          tagLabel='This Film is'
          tagItem={movie.category}
        />
        <div className='modal-footer-kijk-wijzer'>
          <FilmInfoModalDetailsItem tagLabel='Maturity Rating' />
          <FilmInfoModalKijkWijzer />
        </div>
      </div>
    </section>
  )
}

export default FilmInfoModalFooter
