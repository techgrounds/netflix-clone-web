import "./MiniModal.scss";
import MiniModalDetails from "./MiniModalDetails";

import Video from "./Video";

const MiniModal = ({ loadMovie, moviePoster, movieTitle }) => {
  const youtubeId = "65xa8TG2G8o";

  return (
    <>
  <div className="modal">
      <div className="top-container">
        {/* {loadMovie ? (
          <Video youtubeId={youtubeId} />
        ) : ( */}
          <img
            src={require(`../../assets/mockup_images/${moviePoster}`)}
            alt={moviePoster}
            className="movie-poster"
          />
        {/* )} */}

        <div className="video-title">{movieTitle}</div>
      </div>
      <div className="bottom-container">
        <MiniModalDetails />
      </div>
    </div>
    </>
  );
};

export default MiniModal;
