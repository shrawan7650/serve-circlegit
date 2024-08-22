// src/Dropdown.js
import React, { useState } from 'react';
import './Dropdown.css';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button">PRODUCTS <FaChevronDown /> </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/servicesProduct">Services</Link>
          <Link to="/salesProduct">Sales</Link>
          <Link to="/inventoryProduct">Inventory</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
