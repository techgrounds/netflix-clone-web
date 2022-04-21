import './FilmInfoModalDetailsItem.scss'

const FilmInfoModalDetailsItem = ({ tagLabel, tagItems }) => {
  return (
    <section>
      <div className='details-tags'>
        <span className='tags-label'>{tagLabel}:</span>
        {tagItems?.slice(0, 4).map((tagItem, i) => (
          <span key={tagItem} className='tag-item'>
            {tagItem}
            {i !== tagItems.length - 1 && ','}
          </span>
        ))}
      </div>
    </section>
  )
}

export default FilmInfoModalDetailsItem
