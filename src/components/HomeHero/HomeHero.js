import './HomeHero.scss'

const HomeHero = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted className='hero-video'>
        <source src={require(`../../assets/videos/homehero.mp4`)} />
      </video>

      <div className='hero-description'>
        <div className='title-wrapper'>
          <h2>The Bombardment</h2>
        </div>

        <div className='info-wrapper'>
          <p>
            The fates of several Copenhagen residents collide when a WWII
            bombing mission accidentally targets a school full of children.
          </p>
        </div>

        <div className='button-wrapper'>
          <button className='hero-button play-button'>Play</button>
          <button className='hero-button info-button'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
