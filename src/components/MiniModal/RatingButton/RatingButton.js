
import "./RatingButton.scss";
import ReactTooltip from "react-tooltip";

import { IconLike } from "../../Icons/IconLike";
import { IconDisLike } from "../../Icons/IconDisLike";

const RatingButton = () => {
  return (
    <>
      <div className="like-button like-icon-wrapper">
        <div className="like-button-icon">
          <IconLike />
        </div>
        <div className="rating-button-wrapper">
          <button
            className="dislike-button rating-button"
            data-tip
            data-for="dislike"
            tabIndex="0"
          >
            <IconDisLike />
          </button>
          <ReactTooltip
            id="dislike"
            className="tool-tip"
            place="top"
            type="light"
          >
            Not For Me
          </ReactTooltip>
          <button
            className="like-button rating-button"
            data-tip
            data-for="like"
            tabIndex="0"

          >
            <IconLike />
          </button>
          <ReactTooltip id="like" className="tool-tip" place="top" type="light">
            I Like This
          </ReactTooltip>
          <button
            className="lovelike-button rating-button"
            data-tip
            data-for="love"
            tabIndex="0"

          >
            <IconLike />
          </button>
          <ReactTooltip id="love" className="tool-tip" place="top" type="light">
            Love This!
          </ReactTooltip>
        </div>
      </div>
    </>
  );
};

export default RatingButton;
