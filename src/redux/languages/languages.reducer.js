import * as actions from "./languages.types";

const initialState = {
  language: "EN",
};

export const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.changeLanguage:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
