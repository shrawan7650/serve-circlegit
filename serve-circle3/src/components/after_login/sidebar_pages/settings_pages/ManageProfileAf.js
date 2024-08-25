import React, { useEffect, useState } from 'react'
import '../ServicesAf.css'
import HeaderAf from '../../HeaderAf'
import Tip from '../../Tip'
import CurrentHeading from '../../CurrentHeading'
import NavbarAf from '../../NavbarAf'
import { useDataLayerValue } from '../../../../DataLayer'
import Tsidebar from '../../sidebar/Tsidebar'
import LogoUpload from './LogoUpload'
import AccountDetails from './AccountDetails'
import Products from './Products'
import SMS_SenderId from './SMS_SenderId'

const ManageProfileAf = () => {

    const[{currentTitle}, dispatch] = useDataLayerValue()
    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : headingLinks[0]
      })
    
    }, [])
    
  const headingLinks = [
    {
      heading: 'Logo',
      desc:'Maintain your complete and updated company details and profile information.',
    },
    {
      heading: 'Account Details',
      desc:'Maintain your complete and updated company details and profile information.',
    },
    {
      heading: 'Products',
      desc:'Maintain your complete and updated company details and profile information.',
    },
    {
      heading: 'SMS Sender ID',
      desc:'Maintain your complete and updated company details and profile information.',
    },
    {
      heading: 'Terms & Conditions',
      desc:'Maintain your complete and updated company details and profile information.',
    },
        
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

            { currentTitle.heading === 'Logo' && <LogoUpload/>}
            { currentTitle.heading === 'Account Details' && <AccountDetails/>}
            { currentTitle.heading === 'Products' && <Products/>}
            { currentTitle.heading === 'SMS Sender ID' && <SMS_SenderId/>}
            { currentTitle.heading === 'Logo' && <LogoUpload/>}
   
          </div>
        </div>
    </>
  )
}

export default ManageProfileAf