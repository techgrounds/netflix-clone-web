import './FilmInfoModalDetails.scss'
import movieData from '../../movies.json'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'
import FilmInfoModalKijkWijzer from '../FilmInfoModalKijkWijzer/FilmInfoModalKijkWijzer'

const FilmInfoModalDetails = () => {
  const movie = movieData[1]

  const { actors } = movieData[1]
  const seperatedActors = actors.split(',')

  return (
    <>
      <div className='modal-details-wrapper'>
        <div className='modal-details-left'>
          <div className='modal-details-first-line'>
            <span className='match-title'>97% Match</span>
            <span className='release-title'>1995</span>
            <div className='details-icons'>
              <FilmInfoModalKijkWijzer />
            </div>
            <span className='duration-title'>2h 15m</span>
          </div>
          <div style={{ marginBottom: '1em' }}></div>
          <p className='modal-details-description'>{movie.description}</p>
        </div>
        <div className='details-right'>
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
          <FilmInfoModalDetailsItem
            tagLabel='Genres'
            tagItem={movie.category}
          />
          <FilmInfoModalDetailsItem
            tagLabel='Director'
            tagItem={movie.director}
          />
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalDetails
