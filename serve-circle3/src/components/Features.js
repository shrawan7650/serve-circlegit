import React from 'react'
import './Features.css'
import Card from './Card'

const Features = ({Heading, cardData, bg, layout}) => {
  return (
    <>
        <div className= { bg ? 'features-container bg-grey' : 'features-container'}>
            <p>FEATURES</p>
            <h2>{Heading}</h2>

            <div className={ layout? 'grid-layout-2x2': 'grid-layout-3x3' }>
              {
                cardData.map((data) => (
                  <Card 
                    image={data.image} 
                    heading={data.heading}
                    desc={data.desc}/>
                ))
              }                

            </div>
        </div>
    </>
  )
}

export default Features