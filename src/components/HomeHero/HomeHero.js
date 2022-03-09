import './HomeHero.scss'

const HomeHero = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted className='hero-video'>
        <source src={require(`../../assets/videos/homehero.mp4`)} />
      </video>

      <div className='hero-description'>
        <h2>The Bombardment</h2>
        <p className='hero-info'>
          The fates of several Copenhagen residents collide when a WWII bombing
          mission accidentally targets a school full of children.
        </p>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default HomeHero
