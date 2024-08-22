import React, { useEffect, useState } from 'react'
import './ServicesAf.css'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import NavbarAf from '../NavbarAf'
import Sidebar from '../sidebar/Sidebar'
import { FaFileInvoice, FaUserTie } from 'react-icons/fa'
import { useDataLayerValue } from '../../../DataLayer'
import Tsidebar from '../sidebar/Tsidebar'

const ServicesAf = () => {

    const[{ initialTitleSales, currentTitle}, dispatch] = useDataLayerValue()
    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : initialTitleSales
      })
    
    }, [])
    

  const headingLinks = [
    {
      heading: 'Sales',
      desc:'Generate invoice for your product sales.',
      btnIcon: <FaFileInvoice/>,
      btnText: "Generate Invoice"
    }
    
  ]

  return (
    <>
        <div className='af-pages'>
          <Tsidebar/>
          
          <div className='main-body'>
            <HeaderAf/>
            <Tip/>
            <NavbarAf Headings={headingLinks}/>
            <CurrentHeading />

          </div>
        </div>
    </>
  )
}

export default ServicesAf