import './MiniModalVideo.scss'
import { useRef } from 'react'

const MiniModalVideo = ({ youtubeId, setMuteIcon, muteIcon }) => {


  // const playerRef = useRef(true);
  // const pauseVideo = () => {
  //   playerRef.current.internalPlayer.pauseVideo();
  // };


  // const startTime = 'start=2'
  // const mute = '&mute=1'
  const autoPlay = '&autoplay=1'
  const loop = `&playlist=${youtubeId}&loop=1`
  const modestBranding = '&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3'
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?${autoPlay}${loop}${modestBranding}`

  return (
    <div className='video-container'>
      <iframe
        ref={playerRef}
        src= {embedUrl}
        frameBorder='0'
        className='video-content'
        loading='lazy'
        allow='autoplay'>
      </iframe>
    </div>
  )
}

export default MiniModalVideo
