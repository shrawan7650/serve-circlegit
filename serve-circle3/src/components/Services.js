import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Features from './Features'
import coveringEntire from '../data/coveringEntire'
import carryIn from '../data/carryIn'
import SMS from './SMS'
import Signup15 from './Signup15'
import Footer from './Footer'

const Services = () => {
  return (
    <>
        <div className='coloured-home' >
        <Header/>
        <Banner 
          heading="Services, repairs and AMC business management software" 
          desc="Join more than 3500 businesses. 15 days free." 
          button="Start Free Trial"
          image="https://www.servecircle.com/resources/assets/img/service-page-banner.png" />
        </div>

        <Features Heading="Covering the entire service process" cardData={coveringEntire} bg={null}/>
        <Features Heading="Carry In, Onsite & Pickup options" cardData={carryIn} bg="1"/>
        <SMS/>
        <Signup15/>
        <Footer/>

    </>
  )
}

export default Services