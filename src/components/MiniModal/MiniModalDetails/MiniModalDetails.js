import "./MiniModalDetails.scss";
import { IconPlayBlack } from "../../Icons/IconPlayBlack";
import { IconArrowDown } from "../../Icons/IconArrowDown";
import { IconKijkWijzer16 } from "../../Icons/IconKijkWijzer16";
import { useSelector } from "react-redux";
import { useState } from "react";
import ButtonRating from "../../ButtonRating/ButtonRating";
import ButtonAdd from "../../ButtonAdd/ButtonAdd";
import ButtonCheck from "../../ButtonCheck/ButtonCheck";
import FilmInfoModal from "../../FilmInfoModal/FilmInfoModal";

const MiniModalDetails = ({ openModal, isModalVisible, movieData }) => {
  const [isChecked, setIsChecked] = useState(false);

  const changeIcon = () => {
    !isChecked ? setIsChecked(true) : setIsChecked(false);
  };

  return (
    <>
      <div className="minimodal-button-wrapper">
        <div className="left-content">
          <button className="play-button">
            <IconPlayBlack />
          </button>
          <div onClick={() => changeIcon()}>
            {isChecked ? <ButtonCheck /> : <ButtonAdd />}
          </div>
          <ButtonRating />
        </div>
        <div className="right-content">
          {/* OPEN MODAL IN LANE ITEM */}
          <button
            className="moreInfo-button"
            onClick={() => {
              openModal();
            }}
          >
            <IconArrowDown />
          </button>
        </div>
      </div>
      <div className="info-container">
        <span className="match">98% Match</span>
        <span className="maturity-rating">
          {/* <IconKijkWijzer16 /> */}
          {/* {movie?.rating} */}
        </span>
        {/* <span className="duration">1h 46m</span> */}
        {/* <span className="duration">{movie?.runtime}</span> */}

        <span className="feature-badge">HD</span>
      </div>
      <div className="tag-container">
        <span className="tag-item-mini">Witty</span>•
        <span className="tag-item-mini">Feel-Good</span>•
        <span className="tag-item-mini">Exciting</span>
      </div>
      <FilmInfoModal />
    </>
  );
};

export default MiniModalDetails;
