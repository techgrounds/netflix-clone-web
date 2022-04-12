import "./MiniModalDetails.scss";
import { IconAdd } from "../../Icons/IconAdd";
import { IconCheck } from "../../Icons/IconCheck";
import { IconPlayBlack } from "../../Icons/IconPlayBlack";
import { IconArrowDown } from "../../Icons/IconArrowDown";
import { useState } from "react";
import RatingButton from "../RatingButton";
const MiniModalDetails = ({ setMoreInfo, moreInfo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const changeIcon = () => {
    !isChecked ? setIsChecked(true) : setIsChecked(false);
  };
  const openInfo = () => {
    !moreInfo ? setMoreInfo(true) : setMoreInfo(false);
  };

  return (
    <>
      <div className="minimodal-button-wrapper">
        <div className="left-content">
          <button className="play-button">
            <IconPlayBlack />
          </button>
          <button className="add-button" onClick={() => changeIcon()}>
            {isChecked ? <IconCheck /> : <IconAdd />}
          </button>
          <RatingButton />
        </div>
        <div className="right-content">
          <button className="moreInfo-button" onClick={() => openInfo()} >
            <IconArrowDown />
          </button>
        </div>
      </div>
      <div className="info-container">
        <span className="match">Match 98%</span>
        <span className="year">2022</span>
        <span className="maturity-rating">🔞</span>
        <span className="duration">1h 46m</span>
        <span className="feature-badge">HD</span>
      </div>
      <div className="tag-container">
        <span className="tag-item-mini">Witty</span>•
        <span className="tag-item-mini">Feel-Good</span>•
        <span className="tag-item-mini">Exciting</span>
      </div>
    </>
  );
};

export default MiniModalDetails;
