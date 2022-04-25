import { IconVolumeMute } from "../Icons/IconVolumeMute";
import { IconVolumeUp } from "../Icons/IconVolumeUp";
import { soundMuteSwitch } from "../../redux/movies/movies.actions";
import { useDispatch, useSelector } from "react-redux";

import "./ButtonMute.scss";

const ButtonMute = ({ mute, setMute }) => {
  const switchMute = () => {
    setMute(!mute);
  };
  // const ButtonMute = () => {
  //   const dispatch = useDispatch();
  //   const switchMute = useSelector((state) => state.movies.soundMute);
  //   console.log(switchMute);
  return (
    <div className="volume-button" onClick={switchMute}>
      {!mute ? <IconVolumeMute /> : <IconVolumeUp />}
    </div>
  );

  // return (
  //   <div
  //     className="volume-button"
  //     onClick={() => {
  //       dispatch(soundMuteSwitch(switchMute));
  //     }}
  //   >
  //     {!switchMute ? <IconVolumeMute /> : <IconVolumeUp />}
  //   </div>
  // );
};

export default ButtonMute;
