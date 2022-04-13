import React from 'react'
import './MiniModalVideo.scss'

const MiniModalVideo = ({ youtubeId }) => {
  const removeControls = '&controls=0'
  const startTime = 'start=2'
  const autoPlay = '&autoplay=1'
  const mute = '&mute=1'
  const loop = `&playlist=${youtubeId}&loop=1`
  const modestBranding = '&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3'

  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?${startTime}${autoPlay}${mute}${loop}${modestBranding}`

  return (
    <div className='video-container'>
      <iframe
        src= {embedUrl}
        frameBorder='0'
        className='video-content'
        loading='lazy'
        allow='autoplay'
        title='trailer'></iframe>
    </div>
  )
}

export default MiniModalVideo
