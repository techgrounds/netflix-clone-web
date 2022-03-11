import { IconPlayWhite } from "../components/Icons/IconPlayWhite";
import { IconBackArrow } from "../components/Icons/IconBackArrow";
import { IconFullscreen } from "../components/Icons/IconFullscreen";
import { IconFullscreenExit } from "../components/Icons/IconFullscreenExit";
import { IconPause } from "../components/Icons/IconPause";
import { IconCheck } from "../components/Icons/IconCheck";
import { IconAdd } from "../components/Icons/IconAdd";
import { IconFlag } from "../components/Icons/IconFlag";
import { ButtonRoundDark, ButtonRoundDarkTooltip, ButtonRoundLight } from "../components/ButtonRound/ButtonRound"
import { IconPlayBlack } from "../components/Icons/IconPlayBlack"
import { IconArrowDown } from "../components/Icons/IconArrowDown"
import { IconArrowUp } from "../components/Icons/IconArrowUp"
import { IconArrowRight } from "../components/Icons/IconArrowRight"
import { IconArrowLeft } from "../components/Icons/IconArrowLeft"
const GenrePage = () => {
  return (
    <>
      <div>Films Page</div>
      <IconPlayWhite/>
      <IconPause/>
      <IconBackArrow/>
      <IconFullscreen/>
      <IconFullscreenExit/>
      <IconCheck/>
      <IconAdd/>
      <IconFlag/>
      <ButtonRoundDarkTooltip>
      <IconAdd/>
      </ButtonRoundDarkTooltip>
      <ButtonRoundDarkTooltip>
      <IconCheck/>
      </ButtonRoundDarkTooltip>
      <ButtonRoundLight>
        <IconPlayBlack/>
      </ButtonRoundLight>
      <ButtonRoundDark>
      <IconArrowDown/>
      </ButtonRoundDark>
      <ButtonRoundDark>
      <IconArrowUp/>
      </ButtonRoundDark>
      <ButtonRoundDark>
      <IconArrowLeft/>
      </ButtonRoundDark>
      <ButtonRoundDark>
      <IconArrowRight/>
      </ButtonRoundDark>
    </>
  );
};

export default GenrePage;
