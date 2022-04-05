import './FilmInfoModalDetails.scss'
import movieData from '../../movies.json'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'
import FilmInfoModalKijkWijzer from '../FilmInfoModalKijkWijzer/FilmInfoModalKijkWijzer'

const FilmInfoModalDetails = () => {
  const movie = movieData[0]

  return (
    <>
      <div className='details-wrapper'>
        <div className='details-left'>
          <div className='first-line'>
            <span className='match-title'>97% Match</span>
            <span className='release-title'>1995</span>
            <div className='details-icons'>
              <FilmInfoModalKijkWijzer />
            </div>
            <span className='duration-title'>2h 15m</span>
          </div>
          <div style={{ marginBottom: '1em' }}></div>
          <p className='details-description'>{movie.description}</p>
        </div>
        <div className='details-right'>
          <FilmInfoModalDetailsItem tagLabel='Cast' tagItem={movie.actors} />
          <FilmInfoModalDetailsItem
            tagLabel='Genres'
            tagItem={movie.category}
          />
          <FilmInfoModalDetailsItem
            tagLabel='This film is'
            tagItem={movie.category}
          />
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalDetails
