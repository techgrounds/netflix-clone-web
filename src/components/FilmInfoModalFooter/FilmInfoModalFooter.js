import './FilmInfoModalFooter.scss'
import FilmInfoModalDetailsItem from '../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem'

import { useContext } from 'react'
import { LangContext } from '../../redux/languages/languages.context'

const FilmInfoModalFooter = ({
  ref,
  actors,
  directors,
  genres,
  movieData,
  writers,
  certification,
}) => {
  const { language } = useContext(LangContext)
  return (
    <section className='modal-footer-container' ref={ref}>
      <div className='modal-footer-header'>
        <h2 className='modal-footer-title'>
          <span>
            {language === 'EN'? 'About' : 'Over'}</span> {movieData?.title}
        </h2>
      </div>
      <div className='modal-footer-details'>
        <FilmInfoModalDetailsItem tagLabel={language === 'EN' ? 'Actors' : 'Acteurs'} tagItems={actors} />
        <FilmInfoModalDetailsItem tagLabel={language === 'EN' ? 'Director' : 'Regiseur'} tagItems={directors} />
        <FilmInfoModalDetailsItem tagLabel={language === 'EN' ? 'Writer' : 'Schrijver'} tagItems={writers} />
        <FilmInfoModalDetailsItem tagLabel='Genres' tagItems={genres} />
        <div className='details-tags'>
          <span className='tags-label'>
            {language === 'EN' ? 'Maturity Rating:' : 'Leeftijdscategorie'}</span>
          <span className='tag-item'>{certification}</span>
        </div>
      </div>
    </section>
  )
}

export default FilmInfoModalFooter
