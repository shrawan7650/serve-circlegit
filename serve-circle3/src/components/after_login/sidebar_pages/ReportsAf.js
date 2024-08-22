import React, { useEffect } from 'react'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import { useDataLayerValue } from '../../../DataLayer'
import ReportTable from './tables/ReportTable'
import Tsidebar from '../sidebar/Tsidebar'

const ReportsAf = () => {

    const[{currentTitle}, dispatch] = useDataLayerValue()
    
    useEffect(() => {
      dispatch({
        type : 'SET_CURRENT_TITLE',
        currentTitle : headingLinks[0]
      })
    
    }, [])

    const headingLinks = [{
      heading: "Reports",
      desc: "Day to day insights of your growing business.",
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

            <ReportTable/>
   
          </div>
        </div>
    </>
  )
}

export default ReportsAf