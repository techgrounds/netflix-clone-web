import "./LanguagesSelector.scss";

import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";

import { LangContext } from "../../redux/languages/languages.context";
import { changeLanguage } from "../../redux/languages/languages.actions";

import { IconWorld } from "../Icons/IconWorld";

const LanguagesSelector = () => {
  const currentLanguage = useSelector((state) => state.language);
  console.log("currentLanguage: ", currentLanguage);
  const dispatch = useDispatch();
  const { language, setLanguage } = useContext(LangContext);

  useEffect(() => {
    dispatch(changeLanguage(language));
  }, [language]);

  const languages = [
    { code: "EN", name: "English" },
    { code: "NL", name: "Nederlands" },
  ];

  const languageOptions = languages.map((language) => {
    return (
      <option key={language.code} value={language.code}>
        {language.name}
      </option>
    );
  });

  return (
    <>
      <div className="selectContainer">
        <IconWorld />
        <select
          className="customSelect"
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languageOptions}
        </select>
      </div>
    </>
  );
};

export default LanguagesSelector;
