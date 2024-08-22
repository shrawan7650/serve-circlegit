import React, { useEffect } from 'react'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import { useDataLayerValue } from '../../../DataLayer'
import Tsidebar from '../sidebar/Tsidebar'

const Dashboard = () => {

    const[{currentTitle}, dispatch] = useDataLayerValue()
    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : headingLinks[0]
      })
    
    }, [])

    const headingLinks = [{
      heading: "Dashboard",
      desc: "Analyze Your Work.",
      btnIcon: '',
      btnText: "",
      btnFunction : ''
    }]

  return (
    <>
        <div className='af-pages'>
          <Tsidebar/>
          
          <div className='main-body'>
            <HeaderAf/>
            <Tip/>
            <CurrentHeading />

   
          </div>
        </div>
    </>
  )
}

export default Dashboard