import React from 'react'
import './BigButton.css'

const BigButton = ({icon, text, handleBtnClick}) => {
  return (
    <>
      <ul className='big-btn' onClick={handleBtnClick}>
          <li>{icon}</li>
          <li>{text}</li>
      </ul>
    </>
  )
}

export default BigButton