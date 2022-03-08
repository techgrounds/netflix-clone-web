import "./ButtonRound.scss";
import { Icon } from "../Icon/Icon";

export const ButtonRoundDark = () => {
  return (
    <>
      <button className="buttonRound buttonDark">
        <Icon className="icon" />
      </button>
    </>
  );
};

export const ButtonRoundLight = () => {
  return (
    <>
      <button className="buttonRound buttonLight">
        <Icon className="icon" />
      </button>
    </>
  );
};
