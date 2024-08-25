import React from 'react'
import './NavbarAf.css'
import { useDataLayerValue } from '../../DataLayer'

const NavbarAf = ({Headings}) => {

  const[{currentTitle}, dispatch] = useDataLayerValue()

  const setCurrentTitle = (item) => {
    dispatch(
      {
        type: 'SET_CURRENT_TITLE',
        currentTitle: item
      }
    )
  }

  return (
    <>
        <div className='navbar-af'>

        { 
          Headings.map((item, index) => (
            <li key={index} onClick={()=>{setCurrentTitle(item)}}  >{item.heading}</li>
          ))
        }

        </div>
    </>
  )
}

export default NavbarAf