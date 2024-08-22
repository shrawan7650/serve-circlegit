import React, { useEffect, useState } from 'react'
import './ServicesAf.css'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CheckCustomer from './CheckCustomer'
import Tsidebar from '../sidebar/Tsidebar'

const Jobsheet = () => {
   


  return (
    <>
        <div className='af-pages'>
          <Tsidebar/>
          
          <div className='main-body'>
            <HeaderAf/>
            <Tip/>

            <CheckCustomer/>

          </div>
        </div>
    </>
  )
}

export default Jobsheet