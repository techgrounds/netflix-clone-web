import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { IconVolumeUp } from '../Icons/IconVolumeUp'
import './ButtonMute.scss'

const ButtonMute = ({ mute, setMute }) => {
  const switchMute = () => {
    setMute(!mute)
  }

  return (
    <div className='volume-button' onClick={switchMute}>
      {!mute ? <IconVolumeMute /> : <IconVolumeUp />}
    </div>
  )
}

export default ButtonMute
