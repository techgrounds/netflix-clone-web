import { useDispatch, useSelector } from "react-redux";
import { soundMuteSwitch } from "../../redux/movies/movies.actions";
import { IconVolumeMute } from "../Icons/IconVolumeMute";
import { IconVolumeUp } from "../Icons/IconVolumeUp";
import "./ButtonMute.scss";

const ButtonMute = () => {
  const dispatch = useDispatch();
  const switchMute = useSelector((state) => state.movies.soundMute);

  return (
    <div
      className="volume-button"
      onClick={() => dispatch(soundMuteSwitch(!switchMute))}
    >
      {!switchMute ? <IconVolumeMute /> : <IconVolumeUp />}
    </div>
  );
};

export default ButtonMute;
