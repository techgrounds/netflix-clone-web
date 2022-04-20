import './FilmInfoModalDetails.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'
import FilmInfoModalKijkWijzer from '../FilmInfoModalKijkWijzer/FilmInfoModalKijkWijzer'

const FilmInfoModalDetails = ({
  actors,
  releaseDate,
  directors,
  genres,
  movieData,
}) => {
  return (
    <>
      <div className='modal-details-wrapper'>
        <div className='modal-details-left'>
          <div className='modal-details-first-line'>
            <span className='match-title'>97% Match</span>
            <span className='release-title'>{releaseDate}</span>
            <div className='details-icons'>
              <FilmInfoModalKijkWijzer />
            </div>
            <span className='duration-title'>{movieData?.runtime}</span>
          </div>
          <div style={{ marginBottom: '1em' }}></div>
          <p className='modal-details-description'>{movieData?.desc}</p>
        </div>
        <div className='details-right'>
          <FilmInfoModalDetailsItem tagLabel='Actors' tagItems={actors} />
          <FilmInfoModalDetailsItem tagLabel='Genres' tagItems={genres} />
          <FilmInfoModalDetailsItem tagLabel='Director' tagItems={directors} />
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalDetails
