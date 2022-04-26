import "./FilmInfoModalHeader.scss";
import { useState } from "react";
import { IconPlayBlack } from "../Icons/IconPlayBlack";
import MiniModalVideo from "../MiniModalVideo/MiniModalVideo";
import ButtonRating from "../ButtonRating/ButtonRating";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ButtonMute from "../ButtonMute/ButtonMute";
import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";

const FilmInfoModalVideo = ({ isVideoPlaying, movieData }) => {
  const { language } = useContext(LangContext);

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
              <span className="home-hero-button-text">
                {language === "EN" ? "Play" : "Afspelen"}
              </span>
            </button>
            <div className="header-button-container">
              <ButtonAdd />
            </div>
            <div className="header-button-container">
              <ButtonRating />
            </div>
          </div>
        </div>
        <div className="modal-volume-button-wrapper">
          <button className="home-hero-volume-button">
            <ButtonMute />
          </button>
        </div>
      </div>
    </>
  );
};

export default FilmInfoModalVideo;
