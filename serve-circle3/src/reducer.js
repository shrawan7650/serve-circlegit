import { FaBoxOpen, FaFileInvoice, FaStore } from "react-icons/fa"
import { IoTicket } from "react-icons/io5"


export const initialState = {
    
    currentTitle : {
        heading: "In House Services",
        desc: "Create new job sheets, manage services and generate invoices.",
        btnIcon: <IoTicket/>,
        btnText: "Create New Job Sheet",
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