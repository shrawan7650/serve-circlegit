import React from 'react'
import './RoundBtn.css'

const RoundBtn = ({icon, text}) => {
  return (
    <>
      <ul className='round-btn'>
        { icon && <li>{icon}</li> }
        <li>{text}</li>
      </ul>
    </>
  )
}

export default RoundBtn