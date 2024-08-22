import React from 'react'
import './BigButton.css'

const BigButton = ({icon, text}) => {
  return (
    <>
      <ul className='big-btn'>
          <li>{icon}</li>
          <li>{text}</li>
      </ul>
    </>
  )
}

export default BigButton