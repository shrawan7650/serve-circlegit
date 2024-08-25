import React, { useState, useEffect } from 'react'
import './BranchesAf.css'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import { useDataLayerValue } from '../../../DataLayer'
import BranchCard from './BranchCard'
import Tsidebar from '../sidebar/Tsidebar'
import { FaStore } from 'react-icons/fa'
import AddBranchForm from './AddBranchForm'

const BranchesAf = () => {

    const[{currentTitle}, dispatch] = useDataLayerValue()
    const [modal, setmodal] = useState(false)

    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : headingLinks[0]
      })
    
    }, [])

    const createNewBranch = () => {
      handleClick()
    }
  
    const handleClick = () => {
      setmodal(!modal);
    }

    const headingLinks = [
      {
        heading: "Branches",
        desc: "Add and manage all your branches here. Click 'Enter' to create job sheets, generate invoices and manage inventory.",
        btnIcon: <FaStore/>,
        btnText: "Add Branch",
        btnFunction : createNewBranch
      }
      
    ]

  return (
    <>

        <div className='af-pages'>

          {modal && (
            <div className='create-branch-container' >
            <AddBranchForm handleClickCancel={handleClick}/>
            </div>
          )}

          <Tsidebar/>
          
          <div className='main-body'>
            <HeaderAf/>
            <Tip/>
            <CurrentHeading />

            <div className='branch-cards-grid'>
                <BranchCard/>
                <BranchCard/>
                <BranchCard/>
            </div>
   
          </div>
        </div>
    </>
  )
}

export default BranchesAf