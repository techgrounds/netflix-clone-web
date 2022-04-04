import './FilmInfoModalDetails.scss'
import { IconKijkWijzer16 } from '../Icons/IconKijkWijzer16'
import { IconKijkWijzerGeweld } from '../Icons/IconKijkWijzerGeweld'
import { IconKijkWijzerGrof } from '../Icons/IconKijkWijzerGrof'
import movieData from '../../movies.json'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'

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
              <button className='details-button details-add-button'>
                <IconKijkWijzer16 />
              </button>
              <button className='details-button details-like-button'>
                <IconKijkWijzerGeweld />
              </button>
              <button className='details-button details-dislike-button'>
                <IconKijkWijzerGrof />
              </button>
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
