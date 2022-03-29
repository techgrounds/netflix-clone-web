import "./MiniModal.scss";
import MiniModalDetails from "./MiniModalDetails";

import Video from "./Video";

const MiniModal = () => {
  const youtubeId = "65xa8TG2G8o";

  return (
    <div className="modal">
      <div className="top-container">
        <Video youtubeId={youtubeId} />
        <div className="video-title">INVENTING ANNA</div>
      </div>
      <div className="bottom-container">
        <MiniModalDetails />
      </div>
    </div>
  );
};

export default MiniModal;
