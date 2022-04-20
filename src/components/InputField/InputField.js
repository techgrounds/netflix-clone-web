import React from 'react'

import './styles.scss'

export default function ({ handleChange, label, ...otherProps }) {
  return (
    <>
      {label && <label>{label}</label>}
      <input className='input-field' onChange={handleChange} {...otherProps} />
    </>
  )
}
