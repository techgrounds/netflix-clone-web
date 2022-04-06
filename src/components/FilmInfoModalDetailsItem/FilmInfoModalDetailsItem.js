import './FilmInfoModalDetailsItem.scss'
import movieData from '../../movies.json'

const FilmInfoModalDetailsItem = ({ tagLabel, tagItem }) => {
  const movie = movieData[1]

  return (
    <section>
      <div className='details-tags'>
        <span className='tags-label'>{tagLabel}:</span>
        <span className='tag-item'>{tagItem}</span>
      </div>
    </section>
  )
}

export default FilmInfoModalDetailsItem
