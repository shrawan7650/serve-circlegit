import React from 'react'
import './Sales.css'
import Banner from './Banner'
import Header from './Header'
import Features from './Features'
import salesBilling from '../data/SalesBilling'
import Signup15 from './Signup15'
import Footer from './Footer'


const Sales = () => {
  return (
    <>
        <div className='coloured-home' >
        <Header/>
        <Banner 
          heading="Simple and sophisticated solution to manage your sales billing" 
          desc="Join more than 3500 businesses. 15 days free." 
          button="Start Now"
          image="https://www.servecircle.com/resources/assets/img/sales-page-banner.png" />
        </div>

        <Features Heading="Sales Billing" cardData={salesBilling} layout="1fr 1fr"/>
        <Signup15/>
        <Footer/>
    </>
  )
}

export default Sales