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

const SalesAf = () => {

    const[{currentTitle}, dispatch] = useDataLayerValue()
    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : headingLinks[0]
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

export default SalesAf