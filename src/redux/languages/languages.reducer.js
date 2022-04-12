import * as actions from "./languages.types";

const initialLanguage = "EN";

export const languagesReducer = (state = initialLanguage, action) => {
  switch (action.type) {
    case actions.changeLanguage:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
