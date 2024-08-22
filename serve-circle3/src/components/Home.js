import React from 'react'
import './Home.css'
import Header from './Header'
import HappyClients from './HappyClients'
import Signup15 from './Signup15'
import UnlmtdBranch from './UnlmtdBranch'
import AllinOne from './AllinOne'
import Footer from './Footer'
import Banner from './Banner'

const Home = () => {
  return (
    <>
        <div className='coloured-home' >
        <Header/>
        <Banner 
          heading="Software for product sales, services and repairs business." 
          desc="Join more than 3500 businesses. 15 days free." 
          button="Start Now"
          image="https://www.servecircle.com/resources/assets/img/homepage_banner.png" />
        </div>

        <AllinOne/>
        <UnlmtdBranch/>
        <HappyClients/>
        <Signup15/>
        <Footer/>
    </>
  )
}

export default Home