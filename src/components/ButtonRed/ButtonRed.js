import React from 'react'
import { Link } from 'react-router-dom'


const ButtonRed = ({
  btnLink = 'test',
  btnText = 'Test',
}) => {
  return (
    <ButtonRed className="btn-red">
      <Link className="button" to = {btnLink}>
        {btnText}
      </Link>
    </ButtonRed>
  )
}

export default ButtonRed
