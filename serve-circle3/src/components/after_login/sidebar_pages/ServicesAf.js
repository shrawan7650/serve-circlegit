import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import './ServicesAf.css'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import NavbarAf from '../NavbarAf'
import CreateJobsheet from './tables/CreateJobsheet'
import { FaUserTie } from 'react-icons/fa'
import { IoTicket } from 'react-icons/io5'
import Tsidebar from '../sidebar/Tsidebar'
import ServicesTable from './tables/ServicesTable'
import { useDataLayerValue } from '../../../DataLayer'
import ServicesReqTable from './tables/ServicesReqTable'
import ServicesCustTable from './tables/ServicesCustTable'

var createNewJobsheet;

const ServicesAf = () => {
  const[{currentTitle}, dispatch] = useDataLayerValue()

  const navigate = useNavigate();
  const [editingJobsheet, setEditingJobsheet] = useState(false)
  
  useEffect(() => {
    dispatch({
      type : 'SET_CURRENT_TITLE',
      currentTitle : headingLinks[0]
    })
  
  }, [])

  var createNewJobsheet = () => {
    navigate('/createJobsheet')
  }

  const createNewCustomer = () => {
    navigate('/createCustomer')
  }

  const headingLinks = [
    {
      heading: 'In House Services',
      desc:'Create new job sheets, manage services and generate invoices.',
      btnIcon: <IoTicket/>,
      btnText: "Create New Job Sheet",
      btnFunction: createNewJobsheet
    },
    {
      heading: 'Esclated Services',
      desc:'',
      btnIcon: '',
      btnText: ""
    },
    {
      heading: 'Requests',
      desc:'List of all the service requests received directly from your clients through clients accounts and web APIs',
      btnIcon: '',
      btnText: ""
    },
    {
      heading: 'Customers',
      desc:'',
      btnIcon: <FaUserTie/>,
      btnText: "Create Customer",
      btnFunction: createNewCustomer
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
            
            {
              (currentTitle.heading === "In House Services") && <ServicesTable/>
            }
            {
              (currentTitle.heading === "Esclated Services") && <ServicesTable/>
            } 
            {
              (currentTitle.heading === "Requests") && <ServicesReqTable/>
            }   
            {
              (currentTitle.heading === "Customers") && <ServicesCustTable/>
            }
            
            { editingJobsheet && <CreateJobsheet/>}

          </div>
        </div>

    </>
  )
}

export default ServicesAf