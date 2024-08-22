import React, { useEffect, useState } from 'react'
import './ServicesAf.css'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import NavbarAf from '../NavbarAf'
import { FaBoxes, FaBoxOpen} from 'react-icons/fa'
import { useDataLayerValue } from '../../../DataLayer'
import { MdCategory } from 'react-icons/md'
import Tsidebar from '../sidebar/Tsidebar'

const InventoryAf = () => {

    const[{currentTitle}, dispatch] = useDataLayerValue()
    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : headingLinks[0]
      })
    
    }, [])
    
  const headingLinks = [
    {
      heading: 'Items',
      desc:'List of all the items defined. Each item may have multiple Variants.',
      btnIcon: <FaBoxOpen/>,
      btnText: "Create Item"
    },
    {
      heading: 'Variants',
      desc:'List of all the variants of all your items.',
      btnIcon: '',
      btnText: ""
    },
    {
      heading: 'Stocks',
      desc:'List of inventory available in the branch.',
      btnIcon: <FaBoxes/>,
      btnText: "Manage Stocks"
    },
    {
      heading: 'Suppliers',
      desc:'List of all your supplier.',
      btnIcon: '',
      btnText: ""
    },
    {
      heading: 'Categories',
      desc:'Grouping and sub-grouping of the items.',
      btnIcon: <MdCategory/>,
      btnText: "Create Item"
    },
    {
      heading: 'Reports',
      desc:'Reports of all your items.',
      btnIcon: '',
      btnText: ""
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

export default InventoryAf