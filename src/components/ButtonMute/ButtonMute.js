import { useDispatch, useSelector } from "react-redux";
// import { soundMuteSwitch } from "../../redux/movies/movies.actions";
import { soundMuteToggle } from "../../redux/movies/movies.actions";

import { IconVolumeMute } from "../Icons/IconVolumeMute";
import { IconVolumeUp } from "../Icons/IconVolumeUp";
import "./ButtonMute.scss";

const ButtonMute = () => {
  const dispatch = useDispatch();
  // const switchMute = useSelector((state) => state.movies.soundMute);
  const toggleMute = useSelector((state) => state.movies.soundMute);

  return (
    <div
      className="volume-button"
      // onClick={() => dispatch(soundMuteSwitch(!switchMute))}
      onClick={() => dispatch(soundMuteToggle())}
    >
      {/* {!switchMute ? <IconVolumeMute /> : <IconVolumeUp />} */}
      {!toggleMute ? <IconVolumeMute /> : <IconVolumeUp />}
    </div>
  );
};

export default ButtonMute;
