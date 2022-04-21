import './FilmInfoModalFooter.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'

const FilmInfoModalFooter = ({
  ref,
  actors,
  directors,
  genres,
  movieData,
  writers,
  certification,
}) => {
  return (
    <section className='modal-footer-container' ref={ref}>
      <div className='modal-footer-header'>
        <h2 className='modal-footer-title'>
          <span>About</span> {movieData?.title}
        </h2>
      </div>
      <div className='modal-footer-details'>
        <FilmInfoModalDetailsItem tagLabel='Actors' tagItems={actors} />
        <FilmInfoModalDetailsItem tagLabel='Director' tagItems={directors} />
        <FilmInfoModalDetailsItem tagLabel='Writer' tagItems={writers} />
        <FilmInfoModalDetailsItem tagLabel='Genres' tagItems={genres} />
        <div className='details-tags'>
          <span className='tags-label'>Maturity Rating:</span>
          <span className='tag-item'>{certification}</span>
        </div>
      </div>
    </section>
  )
}

export default FilmInfoModalFooter
