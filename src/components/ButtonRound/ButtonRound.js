import "./ButtonRound.scss";

export const ButtonRoundDark = ({children}) => {
  return (
    <>
      <button className="buttonRound buttonDark">
        {children}
      </button>
    </>
  );
};

export const ButtonRoundDarkTooltip = ({children, tooltiptext}) => {
  return (
    <>
      <button className="buttonRound buttonDark buttonTooltip">
        <span className="tooltipText">{tooltiptext}</span>
        {children}
      </button>
    </>
  );
};

export const ButtonRoundLight = ({children}) => {
  return (
    <>
      <button className="buttonRound buttonLight">
        {children}
      </button>
    </>
  );
};
