import React, { useEffect, useState } from "react";
import "./ServicesTable.css";
import { CgPlayTrackNext } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as XLSX from "xlsx";
import axios from "axios";

const ServicesTable = () => {
  const [jobSheets, setJobSheets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // Number of rows per page

  useEffect(() => {
    axios.get('http://localhost:5000/job-sheets')
      .then(response => {
        setJobSheets(response.data);
      })
      .catch(error => {
        console.error('Error fetching job sheets:', error);
      });
  }, []);

  const handleExport = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.table_to_sheet(document.querySelector(".services-table"));
    XLSX.utils.book_append_sheet(wb, ws, "Services");
    XLSX.writeFile(wb, "services_table.xlsx");
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = jobSheets.slice(indexOfFirstRow, indexOfLastRow);

  const handleNextPage = () => {
    if (indexOfLastRow < jobSheets.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="services-table-container">
      <div className="services-table-filters">
        <div className="services-left-filters">
          <select className="services-table-select">
            <option>Search by Jobsheet No.</option>
            <option>Search by Name</option>
            <option>Search by Mobile No.</option>
          </select>
          <input
            type="text"
            className="services-table-input"
            placeholder="Search"
          />
        </div>

        <div className="services-right-filters">
          <select className="services-table-select">
            <option>Internal</option>
          </select>
          <select className="services-table-select">
            <option>Select</option>
          </select>
          <div className="date-box">
            <p>FROM</p> <input type="date" className="services-table-input" />
          </div>
          <div className="date-box">
            <p>TO</p> <input type="date" className="services-table-input" />
          </div>
        </div>
      </div>

      <table className="services-table">
        {
          jobSheets.length ? (<>
        <thead>
          <tr>
            {[
              "Mode",
              "Service Type",
              "Date",
              "Job Sheet No.",
              "Invoice No.",
              "IMEI No.",
              "Mobile No.",
              "Product Type",
              "Product Name",
              "Model",
              "Customer Name",
              "Status",
              "Quotation Status",
              "TAT",
              "Escalated To",
              "Current Assignee",
              "Action",
              "",
            ].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {          
          currentRows.map((jobSheet, index) => (
            <tr key={index}>
              <td>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/servecirclesource/icons/carryin-icon.png"
                  alt="mode"
                  className="services-table-icon"
                />
              </td>
              <td>{jobSheet.serviceType}</td>
              <td>{new Date(jobSheet.expectedDeliveryDate).toLocaleDateString()}</td>
              <td>{jobSheet.jobSheetNumber}</td>
              <td>3256</td> {/* Static Invoice No. */}
              <td>{jobSheet.imei1}</td>
              <td>{jobSheet.mobileNumber}</td>
              <td>{jobSheet.productType}</td>
              <td>{jobSheet.modelName}</td>
              <td>{jobSheet.modelNumber}</td>
              <td>{jobSheet.firstName + " " + jobSheet.lastName}</td>
              <td>
                <span className="services-table-status">{jobSheet.status}</span>
              </td>
              <td>Quotation Status</td> {/* Static */}
              <td>TAT</td> {/* Static */}
              <td>Escalated To</td> {/* Static */}
              <td>Current Assignee</td> {/* Static */}
              <td>
                <button className="services-table-action">
                  Next <CgPlayTrackNext />{" "}
                </button>
              </td>
              <td>
                <BsThreeDotsVertical className="customer-options" />
              </td>
            </tr>
          )) 
        }
        </tbody> </>) : <div className="default-table-statement"><h3>No Data To Show</h3></div>

      }
      </table>

      <div className="services-table-pagination">
        <button className="services-table-page-button" onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        <span className="services-table-page-number">{currentPage}</span>
        <button className="services-table-page-button" onClick={handleNextPage} disabled={indexOfLastRow >= jobSheets.length}>Next</button>
      </div>

      <button className="services-table-export-button" onClick={handleExport}>
        Export
      </button>
    </div>
  );
};

export default ServicesTable;
