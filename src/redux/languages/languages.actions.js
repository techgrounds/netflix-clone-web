import * as actions from "./languages.types";

export const changeLanguage = (language) => {
  return {
    type: actions.changeLanguage,
    payload: language,
  };
};
