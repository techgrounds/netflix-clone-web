import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { IconVolumeUp } from '../Icons/IconVolumeUp'
<<<<<<< HEAD
import { useEffect } from 'react'
=======
import './ButtonMute.scss'
>>>>>>> 7001cdb9146392c6b914b5d19ca1979fbe1e82ce

const ButtonMute = ({ mute, setMute }) => {
  const switchMute = () => {
    setMute(!mute)
  }

<<<<<<< HEAD
      // useEffect(() => {
      //   setMute(!mute)

      // },[])

    return (
      <div className='volume-button' onClick={switchMute}>
          {!mute ? <IconVolumeMute /> : <IconVolumeUp />}
    </div>)
=======
  return (
    <button className='volume-button' onClick={switchMute}>
      {!mute ? <IconVolumeMute /> : <IconVolumeUp />}
    </button>
  )
>>>>>>> 7001cdb9146392c6b914b5d19ca1979fbe1e82ce
}

export default ButtonMute
