//import { NavLink } from "react-router-dom"
//import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeAccount } from "../../redux/account/account.action"
import { useContext } from "react"
import { AccountContext } from "../../redux/account/account.context"
import img from "../../assets/images/accounts/alfijah.jpg"

const accountData = require("../../assets/accountData.json")

const AccountMenu = () => {
  const dispatch = useDispatch()
  console.log(accountData)
  const { account, setAccount } = useContext(AccountContext)
  console.log(img)

  const customAccount = accountData.map((profile) => {
    console.log(profile.name)
    return (
      <li
        className="sub-menu-item profile"
        key={profile.name}
        value={profile.name}
        onClick={() => dispatch(changeAccount(setAccount(profile.name)))}
      >
        <div>
          <div className="profile-link custom-account">
            <div className="avatar-wrapper">
              <img
                className="profile-icon custom-profile-icon"
                src={`url(../../assets/images/accounts/${profile.img})`}
                alt={profile.name}
              />
            </div>
            <span className="profile-name">{profile.name}</span>
          </div>
        </div>
      </li>
    )
  })
  return <>{customAccount}</>
}

export default AccountMenu
