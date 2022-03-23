import './FilmInfoModalSuggestions.scss'

const FilmInfoModalSuggestions = () => {
  return (
    <>
      <h3 className='suggestions-title'>More Like This</h3>
      <div className='suggestions-container'>
        <div className='suggestions-item'>
          <div className='image-wrapper'>
            <img
              src={require('../../assets/mockup_images/01.jpg')}
              alt='suggestion'
            />
          </div>
        </div>
        <div className='suggestions-item'>
          <div className='image-wrapper'>
            <img
              src={require('../../assets/mockup_images/02.jpg')}
              alt='suggestion'
            />
          </div>
        </div>
        <div className='suggestions-item'>
          <div className='image-wrapper'>
            <img
              src={require('../../assets/mockup_images/03.jpg')}
              alt='suggestion'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalSuggestions
