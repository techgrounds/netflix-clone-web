import './FilmInfoModalHeader.scss'
import movieData from '../../movies.json'
import { IconPlayBlack } from '../Icons/IconPlayBlack'
import { IconAdd } from '../Icons/IconAdd'
import { IconLike } from '../Icons/IconLike'
import { IconDisLike } from '../Icons/IconDisLike'
import { ButtonRoundDarkTooltip } from '../ButtonRound/ButtonRound'
import Video from '../MiniModal/Video'

const FilmInfoModalVideo = ({ isVideoPlaying }) => {
  const movie = movieData[0]

  const youtubeId = '65xa8TG2G8o'

  return (
    <>
      <div className='header-video'>
        {!isVideoPlaying && <Video youtubeId={youtubeId} />}
      </div>
      <div className='header-overlay'></div>
      <div className='header-container'>
        <div className='header-description'>
          <h2 className='header-title'>{movie.title}</h2>
          <div className='header-button-container'>
            <button className='header-play-button has-label'>
              <div className='home-hero-button-icon'>
                <IconPlayBlack />
              </div>
              <div style={{ width: '0.5rem' }}></div>
              <span className='home-hero-button-text'>Play</span>
            </button>
            <div className='header-button-container'>
              <div className='header-icon-wrapper'>
                <div className='header-add-button'>
                  <div className='like-button'>
                    <ButtonRoundDarkTooltip tooltiptext='Add to My List'>
                      <IconAdd />
                    </ButtonRoundDarkTooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className='header-button-container'>
              <div className='like-button header-icon-wrapper '>
                <div className='header-button-icon'>
                  <ButtonRoundDarkTooltip tooltiptext='I Like This'>
                    <IconLike />
                  </ButtonRoundDarkTooltip>
                </div>
                <div className='rating-button-wrapper'>
                  <div className='dislike-button rating-button'>
                    <ButtonRoundDarkTooltip tooltiptext='Not For Me'>
                      <IconDisLike />
                    </ButtonRoundDarkTooltip>
                  </div>
                  <div className='like-button rating-button'>
                    <ButtonRoundDarkTooltip tooltiptext='I Like This!'>
                      <IconLike />
                    </ButtonRoundDarkTooltip>
                  </div>
                  <div className='lovelike-button rating-button'>
                    <ButtonRoundDarkTooltip tooltiptext='  Love This!'>
                      <IconLike />
                    </ButtonRoundDarkTooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilmInfoModalVideo
