import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServicesTable.css";
import { CgPlayTrackNext } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";

const ServicesReqTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/customer/all");
        setCustomers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="services-table-container">
      <div className="services-table-filters">
        <div className="services-left-filters">
          <select className="services-table-select">
            <option>Search by Name</option>
            <option>Search by Mobile No.</option>
            <option>Search by Email ID</option>
          </select>
          <input
            type="text"
            className="services-table-input"
            placeholder="Search"
          />
        </div>
      </div>

      <table className="services-table">
        <thead>
          <tr>
            {["Customer Name", "Mobile No.", "Email ID", "Address", ""].map(
              (header, index) => (
                <th key={index}>{header}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.firstName + " " + customer.lastName}</td>

              <td>{customer.mobileNumber}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>
                <BsThreeDotsVertical className="customer-options" />
              </td>
            </tr>
          ))}
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
