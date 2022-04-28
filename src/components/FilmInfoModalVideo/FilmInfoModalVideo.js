import { useSelector } from "react-redux";

import "./FilmInfoModalVideo.scss";

const FilmInfoModalVideo = ({ youtubeId }) => {
  const autoPlay = "&autoplay=1";
  const loop = `&playlist=${youtubeId}&loop=1`;
  const modestBranding = "&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3";
  const switchMute = useSelector((state) => state.movies.soundMute);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?${autoPlay}${loop}${modestBranding}`;;

  // if (youtubeId !== "undefined&mute=1") {
  //   embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?${autoPlay}${loop}${modestBranding}`;}
  // if (youtubeId === "undefined&mute=1") { 
  //   embedUrl = "https://www.youtube-nocookie.com/embed/m0Xb9BhfVjY&mute=1?&autoplay=1&playlist=m0Xb9BhfVjY&mute=1&loop=1&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3"}

console.log(youtubeId)

  return (
    <div className="film-modal-video-container">
      <iframe
        src={switchMute ? embedUrl : embedUrl + "&mute=1"}
        frameBorder="0"
        className="film-modal-video-content"
        loading="lazy"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default FilmInfoModalVideo;
