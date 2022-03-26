import './FilmInfoModalDetailsItem.scss'

const FilmInfoModalDetailsItem = ({ tagLabel, tagItem }) => {
  return (
    <>
      <div className='details-tags'>
        <span className='tags-label'>{tagLabel}:</span>
        <span className='tag-item'>{tagItem}</span>
      </div>
    </>
  )
}

export default FilmInfoModalDetailsItem
