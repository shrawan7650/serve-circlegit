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
            <option>Search by Name</option>
            <option>Search by Mobile No.</option>
            <option>Search by Email ID</option>
            </select>
            <input type="text" className="services-table-input" placeholder='Search' />
        </div>
        
      </div>


      <table className="services-table">
        <thead>
          <tr>
            {['Customer Name', 'Mobile No.', 'Email ID', 'Address',''].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test test</td>
            <td>9876543210</td>
            <td>abc@gmail.com</td>
            <td>qwertyuiop asdfghjkl zxcvbnm</td>
            <td><BsThreeDotsVertical className='customer-options'/></td>
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
