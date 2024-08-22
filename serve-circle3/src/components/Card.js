import React from 'react'
import './Card.css'

const Card = ({image, heading, desc}) => {
  return (
    <>
        <div className='card-container'>
            <img src={image} alt='card-img'/>
            <h3>{heading}</h3>
            <p>{desc}</p>
        </div>
    </>
  )
}

export default Card