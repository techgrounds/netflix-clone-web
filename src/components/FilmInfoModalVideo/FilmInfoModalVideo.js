import './FilmInfoModalVideo.scss'

const FilmInfoModalVideo = ({ youtubeId }) => {
  const autoPlay = '&autoplay=1'
  const loop = `&playlist=${youtubeId}&loop=1`
  const modestBranding = '&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3'
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?${autoPlay}${loop}${modestBranding}`

  return (
    <div className='film-modal-video-container'>
      <iframe
        src={embedUrl}
        frameBorder='0'
        className='film-modal-video-content'
        loading='lazy'
        allow='autoplay'></iframe>
    </div>
  )
}

export default FilmInfoModalVideo
