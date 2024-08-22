import React, { useEffect } from 'react'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import { useDataLayerValue } from '../../../DataLayer'
import BranchCard from './BranchCard'
import Tsidebar from '../sidebar/Tsidebar'

const BranchesAf = () => {

    const[{ initialTitleBranches, currentTitle}, dispatch] = useDataLayerValue()
    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : initialTitleBranches
      })
    
    }, [])

  return (
    <>
        <div className='af-pages'>
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