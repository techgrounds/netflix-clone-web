import { IconKijkWijzerAll } from '../Icons/IconKijkWijzerAll'
import { IconKijkWijzer6 } from '../Icons/IconKijkWijzer6'
import { IconKijkWijzer12 } from '../Icons/IconKijkWijzer12'
import { IconKijkWijzer16 } from '../Icons/IconKijkWijzer16'

const KijkWijzer = ({ value }) => {
  function CheckAge(props) {
    switch (props.value) {
      case 'AL':
        return <IconKijkWijzerAll />
      case '6':
        return <IconKijkWijzer6 />
      case '9':
        return <IconKijkWijzer6 />
      case '7':
        return <IconKijkWijzer6 />
      case '12':
        return <IconKijkWijzer12 />
      case '16':
        return <IconKijkWijzer16 />
      default:
        return <IconKijkWijzer16 />
    }
  }

  return (
    <>
      <CheckAge value={value} />
    </>
  )
}

export default KijkWijzer
