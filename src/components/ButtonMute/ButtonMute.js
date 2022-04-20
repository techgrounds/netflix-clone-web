import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { IconVolumeUp } from '../Icons/IconVolumeUp'

const ButtonMute = ({mute, setMute}) => {
    const switchMute = () => {
        setMute(!mute)
      }

    return (
      <button className='volume-button' onClick={switchMute}>
          {!mute ? <IconVolumeMute /> : <IconVolumeUp />}
    </button>)
}

export default ButtonMute;