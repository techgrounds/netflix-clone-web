import { ButtonRoundDarkTooltip } from "../ButtonRound/ButtonRound";
import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";
import { IconArrowDown } from "../Icons/IconArrowDown";

const ButtonMore = () => {
    const { language } = useContext(LangContext);
    return (
      <ButtonRoundDarkTooltip 
      tooltiptext={language === 'EN' ? 'Show more' : 'Meer tonen'}>
        <IconArrowDown />
      </ButtonRoundDarkTooltip>
    )
  }
  
  export default ButtonMore
