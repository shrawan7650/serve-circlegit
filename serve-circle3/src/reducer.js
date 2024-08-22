import { FaBoxOpen, FaFileInvoice, FaStore } from "react-icons/fa"
import { IoTicket } from "react-icons/io5"

export const initialState = {
    initialTitleServices : {
        heading: "In House Services",
        desc: "Create new job sheets, manage services and generate invoices.",
        btnIcon: <IoTicket/>,
        btnText: "Create New Job Sheet"
    },
    initialTitleSales : {
        heading: 'Sales',
        desc:'Generate invoice for your product sales.',
        btnIcon: <FaFileInvoice/>,
        btnText: "Generate Invoice"
    },
    initialTitleInventory : {
        heading: "Items",
        desc: "List of all the items defined. Each item may have multiple Variants.",
        btnIcon: <FaBoxOpen/>,
        btnText: "Create Item"
    },
    initialTitleBranches : {
        heading: "Branches",
        desc: "Add and manage all your branches here. Click 'Enter' to create job sheets, generate invoices and manage inventory.",
        btnIcon: <FaStore/>,
        btnText: "Add Branch"
    },
    initialTitleDashboard : {
        heading: "Dashboard",
        desc: "Analyze Your Work.",
        btnIcon: '',
        btnText: ""
    },
    initialTitleReports : {
        heading: "Reports",
        desc: "Day to day insights of your growing business.",
        btnIcon: '',
        btnText: ""
    },
    currentTitle : {
        heading: "In House Services",
        desc: "Create new job sheets, manage services and generate invoices.",
        btnIcon: <IoTicket/>,
        btnText: "Create New Job Sheet"
    }
}

const reducer = (state, action) =>{

    switch(action.type){
        case 'SET_CURRENT_TITLE':
            return {
                ...state,
                currentTitle: action.currentTitle
            }
        
        
        default:
            return state
    }                                                                                   
}

export default reducer;