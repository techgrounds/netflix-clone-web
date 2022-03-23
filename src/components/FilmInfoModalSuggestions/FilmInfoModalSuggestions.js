import './FilmInfoModalSuggestions.scss'

const FilmInfoModalSuggestions = () => {
  return (
    <>
      <h3 className='suggestions-title'>More Like This</h3>
      <div className='suggestions-container'>
        <div className='suggestions-item'>
          <div className='image-wrapper'>
            <img
              src={require('../../assets/images/MockupImg/001.jpg')}
              alt='suggestion'
            />
          </div>
        </div>
        <div className='suggestions-item'>
          <div className='image-wrapper'>
            <img
              src={require('../../assets/images/MockupImg/002.jpg')}
              alt='suggestion'
            />
          </div>
        </div>
        <div className='suggestions-item'>
          <div className='image-wrapper'>
            <img
              src={require('../../assets/images/MockupImg/003.jpg')}
              alt='suggestion'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalSuggestions
