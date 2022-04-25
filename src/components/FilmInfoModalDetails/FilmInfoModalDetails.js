import './FilmInfoModalDetails.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'
import KijkWijzer from '../KijkWijzer/KijkWijzer'

import { useContext } from 'react'
import { LangContext } from '../../redux/languages/languages.context'
const FilmInfoModalDetails = ({
  actors,
  releaseDate,
  directors,
  genres,
  rating,
  movieData,
  certification,
}) => {
  const { language } = useContext(LangContext)
  return (
    <>
      <div className='modal-details-wrapper'>
        <div className='modal-details-left'>
          <div className='modal-details-first-line'>
            <span className='match-title'>97% Match</span>
            <span className='release-title'>{releaseDate}</span>
            <span className='release-title'>
              <KijkWijzer value={rating} />
            </span>
            <div className='details-icons'>{certification}</div>
            <span className='duration-title'>{movieData?.runtime}</span>
          </div>
          <div style={{ marginBottom: '1em' }}></div>
          <p className='modal-details-description'>{movieData?.desc}</p>
        </div>
        <div className='modal-details-right'>
          <FilmInfoModalDetailsItem tagLabel={language === 'EN' ? 'Actors' : 'Acteurs'} tagItems={actors} />
          <FilmInfoModalDetailsItem tagLabel={language === 'EN' ? 'Genres' : 'Genres'} tagItems={genres} />
          <FilmInfoModalDetailsItem tagLabel={language === 'EN' ? 'Director' : 'Regiseur'} tagItems={directors} />
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalDetails
