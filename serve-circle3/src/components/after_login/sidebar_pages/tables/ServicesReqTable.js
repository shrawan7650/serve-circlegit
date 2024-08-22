import React from 'react';
import './ServicesTable.css';
import { CgPlayTrackNext } from 'react-icons/cg';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ServicesReqTable = () => {
  return (
    <div className="services-table-container">
      <div className="services-table-filters">
        <div className='services-left-filters'>
            <select className="services-table-select">
            <option>Search by Request No.</option>
            <option>Search by Name</option>
            <option>Search by Mobile No.</option>
            </select>
            <input type="text" className="services-table-input" placeholder='Search' />
        </div>
        
      </div>


      <table className="services-table">
        <thead>
          <tr>
            {['Mode', 'Date', 'Request No.', 'Customer Name', 'Mobile No.', 'Product Type', 'Product Name', 'Model', 'Reported Fault', 'Remarks', 'Status',''].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://s3.ap-south-1.amazonaws.com/servecirclesource/icons/carryin-icon.png" alt="mode" className="services-table-icon" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="services-table-status">Open</span></td>
            <td><BsThreeDotsVertical className='customer-options' /></td>
          </tr>
        </tbody>
      </table>

      <div className="services-table-pagination">
        <button className="services-table-page-button">Prev</button>
        <span className="services-table-page-number">1</span>
        <button className="services-table-page-button">Next</button>
      </div>

    </div>
  );
};

export default ServicesReqTable;
