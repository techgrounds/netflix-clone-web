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

export const ButtonRoundLight = ({children}) => {
  return (
    <>
      <button className="buttonRound buttonLight">
        {children}
      </button>
    </>
  );
};
