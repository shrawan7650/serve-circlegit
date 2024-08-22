import React from 'react'
import './CurrentHeading.css'
import BigButton from './buttons/BigButton'
import { IoTicket } from 'react-icons/io5'
import { useDataLayerValue } from '../../DataLayer'

const CurrentHeading = () => {

  const[{currentTitle}] = useDataLayerValue()

  return (
    <>
        <div className='current-cont'>
            <div className='current-top'>
              <h2 className='current-left'>{currentTitle.heading}</h2>

              <div className='current-right'>
                  { currentTitle.btnText && <BigButton icon={currentTitle.btnIcon} text={currentTitle.btnText} handleBtnClick={currentTitle.btnFunction} />}
              </div>
            </div>
            { 
            currentTitle.desc 
            && 
            <div className='current-bottom'>
              <p>{currentTitle.desc}</p>
            </div>

            }
        </div>
        
    </>
  )
}

export default CurrentHeading