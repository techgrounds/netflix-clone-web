import "./FilmInfoModalHeader.scss";

import { IconPlayBlack } from "../Icons/IconPlayBlack";

import MiniModalVideo from "../MiniModalVideo/MiniModalVideo";
import ButtonRating from "../ButtonRating/ButtonRating";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

const FilmInfoModalVideo = ({ isVideoPlaying, movieData }) => {
  return (
    <>
      <div className="header-video">
        {!isVideoPlaying && (
          <MiniModalVideo youtubeId={movieData?.trailer?.substr(32)} />
        )}
      </div>
      <div className="header-overlay"></div>
      <div className="header-container">
        <div className="header-description">
          <h2 className="header-title">{movieData?.title}</h2>
          <div className="header-button-container">
            <button className="header-play-button">
              <div className="header-play-button-icon">
                <IconPlayBlack />
              </div>
              <div style={{ width: "0.5rem" }}></div>
              <span className="home-hero-button-text">Play</span>
            </button>
            <div className="header-button-container">
              <ButtonAdd />
            </div>
            <div className="header-button-container">
              <ButtonRating />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmInfoModalVideo;
