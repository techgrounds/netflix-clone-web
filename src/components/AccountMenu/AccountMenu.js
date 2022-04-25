import "./AccountMenu.scss"
import { useDispatch } from "react-redux"
import { changeAccount } from "../../redux/account/account.action"
import { useContext } from "react"
import { AccountContext } from "../../redux/account/account.context"

import Jens from "../../assets/images/accounts/jens.jpg"
import Zico from "../../assets/images/accounts/zico.jpg"
import Michael from "../../assets/images/accounts/michael.jpg"
import Roibin from "../../assets/images/accounts/roibin.png"
import Fatos from "../../assets/images/accounts/fatos.webp"
import Janou from "../../assets/images/accounts/janou.jpg"
import Miki from "../../assets/images/accounts/miki.jpg"
import Alfijah from "../../assets/images/accounts/alfijah.jpg"
import Wesley from "../../assets/images/accounts/wesley.jpg"
import Carolyn from "../../assets/images/accounts/carolyn.webp"

const AccountMenu = () => {
  const dispatch = useDispatch()
  const { setAccount } = useContext(AccountContext)

  const allAccounts = [
    { name: "Alfijah", source: Alfijah },
    { name: "Zico", source: Zico },
    { name: "Michael", source: Michael },
    { name: "Miki", source: Miki },
    { name: "Wesley", source: Wesley },
    { name: "Janou", source: Janou },
    { name: "Carolyn", source: Carolyn },
    { name: "Roibin", source: Roibin },
    { name: "Fatos", source: Fatos },
    { name: "Jens", source: Jens },
  ]
  const customAccount = allAccounts.map((profile) => {
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
                src={profile.source}
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
