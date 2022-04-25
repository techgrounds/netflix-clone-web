import * as actions from "./account.types"

export const changeAccount = (account) => {
  return {
    type: actions.changeAccount,
    payload: account,
  }
}
