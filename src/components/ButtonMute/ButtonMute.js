import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { IconVolumeUp } from '../Icons/IconVolumeUp'
import { useEffect } from 'react'

const ButtonMute = ({mute, setMute}) => {
    const switchMute = () => {
        setMute(!mute)
      }

      // useEffect(() => {
      //   setMute(!mute)

      // },[])

    return (
      <div className='volume-button' onClick={switchMute}>
          {!mute ? <IconVolumeMute /> : <IconVolumeUp />}
    </div>)
}

export default ButtonMute;