import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Features from './Features'
import managingProduct from '../data/managingProduct'
import Signup15 from './Signup15'
import Footer from './Footer'


const Inventory = () => {
  return (
    <>
        <div className='coloured-home' >
        <Header/>
        <Banner 
          heading="A common inventory for your sales and services business" 
          desc="Join more than 3500 businesses. 15 days free." 
          button="Start Now"
          image="https://www.servecircle.com/resources/assets/img/inventory-page-banner.png" />
        </div>
        <Features Heading="Managing product and spare inventory" cardData={managingProduct} layout="2x2"/>
        <Signup15/>
        <Footer/>
    </>
  )
}

export default Inventory