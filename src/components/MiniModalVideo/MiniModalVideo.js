import './MiniModalVideo.scss'

const MiniModalVideo = ({ youtubeId, mute }) => {
  const autoPlay = '&autoplay=1'
  const loop = `&playlist=${youtubeId}&loop=1`
  const modestBranding = '&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3'
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?${autoPlay}${loop}${modestBranding}`
  
  return (
    <div className="video-container">
      <iframe
        src= {mute ? embedUrl : (embedUrl + "&mute=1")}
        frameBorder='0'
        className='video-content'
        loading='lazy'
        allow='autoplay'>
      </iframe>
    </div>
  );
};

export default MiniModalVideo;
