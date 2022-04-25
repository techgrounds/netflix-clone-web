import * as actions from "./account.types"

const initialAccount = 'defaultAccount'

export const accountReducer = (state = initialAccount, action) => {
  switch (action.type) {
    case actions.changeAccount:
      return { account: action.payload }
    default:
      return state
  }
}
