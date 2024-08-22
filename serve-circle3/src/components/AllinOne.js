// src/AllinOne.js
import React from 'react';
import './AllinOne.css';
import services_icon from '../img/services-icon-1.png'
import sales_icon from '../img/sales-icon.png'
import inventory_icon from '../img/inventory-icon.png'

const AllinOne = () => {
  return (
    <div className="all-in-one">
      <h3 className="section-subtitle">PRODUCTS</h3>
      <h1 className="section-title">All In One Platform</h1>
      <div className="features">
        <div className="feature">
          <img 
            src={services_icon} 
            alt="Services" 
            className="feature-icon"
          />
          <h3>Services</h3>
          <p>A complete services and repairs business operations management solution. Create job sheets, manage services and generate invoices.</p>
          <a href="#services" className="feature-link">Know More</a>
        </div>
        <div className="feature">
          <img 
            src={sales_icon} 
            alt="Sales" 
            className="feature-icon"
          />
          <h3>Sales</h3>
          <p>Simple and sophisticated sales billing solution. Invoice generation and payment details.</p>
          <a href="#sales" className="feature-link">Know More</a>
        </div>
        <div className="feature">
          <img 
            src={inventory_icon}
            alt="Inventory" 
            className="feature-icon"
          />
          <h3>Inventory</h3>
          <p>A common module to manage both products and spare parts inventory. Stock management, consumption history and stock transfers.</p>
          <a href="#inventory" className="feature-link">Know More</a>
        </div>
      </div>
    </div>
  );
};

export default AllinOne;
