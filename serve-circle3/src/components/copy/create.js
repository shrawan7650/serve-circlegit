import React, { useState } from 'react';
import axios from 'axios';
import './CreateJobsheet.css';

const CreateJobsheet = () => {
  const [jobSheetData, setJobSheetData] = useState({
    serviceType: 'Carry In',
    jobSheetNumberSequence: 'Select',
    jobSheetNumber: '1J55',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    address: '',
    gstin: '',
    productType: '',
    brand: '',
    modelName: '',
    modelNumber: '',
    color: '',
    productConfig: '',
    password: '',
    problem: '',
    imei1: '',
    imei2: '',
    warrantyReference: '',
    condition: '',
    status: 'Warranty',
    estimatedCost: '',
    advancePaid: '',
    receivedItems: '', // Keep this as a string for textarea input
    expectedDeliveryDate: '',
    expectedDeliveryTime: '',
    remarks: '',
    technician: '',
    sendAlerts: false,
  });
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setJobSheetData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setJobSheetData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert receivedItems to an array if needed
    const receivedItemsArray = jobSheetData.receivedItems ? jobSheetData.receivedItems.split(',').map(item => item.trim()).filter(item => item) : [];

    // Convert expectedDeliveryDate to a Date object if needed
    const expectedDeliveryDateObject = jobSheetData.expectedDeliveryDate ? new Date(jobSheetData.expectedDeliveryDate) : null;

    // No conversion needed for sendAlerts since it's already a boolean

    const jobSheetDataToSend = {
      ...jobSheetData,
      receivedItems: receivedItemsArray,
      expectedDeliveryDate: expectedDeliveryDateObject,
    };

    try {
      const response = await axios.post('http://localhost:5000/job-sheets', jobSheetDataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Job sheet saved:', response.data);
      // Optionally, reset the form or provide feedback to the user
      setJobSheetData({
        serviceType: 'Carry In',
    jobSheetNumberSequence: 'Select',
    jobSheetNumber: '1J55',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    address: '',
    gstin: '',
    productType: '',
    brand: '',
    modelName: '',
    modelNumber: '',
    color: '',
    productConfig: '',
    password: '',
    problem: '',
    imei1: '',
    imei2: '',
    warrantyReference: '',
    condition: '',
    status: 'Warranty',
    estimatedCost: '',
    advancePaid: '',
    receivedItems: '', // Keep this as a string for textarea input
    expectedDeliveryDate: '',
    expectedDeliveryTime: '',
    remarks: '',
    technician: '',
    sendAlerts: false,
      });
    } catch (error) {
      console.error('Error saving job sheet:', error.response ? error.response.data : error.message);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <form className="job-create-form" onSubmit={handleSubmit}>
      <h2 className="job-form-title">Create New Job Sheet</h2>

      <div className="job-form-group">
        <div className="job-form-section">
          <label className="job-label">Service Type</label>
          <div className="job-radio-group">
            <label className="job-radio-label">
              <input
                type="radio"
                name="serviceType"
                value="Carry In"
                checked={jobSheetData.serviceType === 'Carry In'}
                onChange={handleChange}
              />
              Carry In
            </label>
            <label className="job-radio-label">
              <input
                type="radio"
                name="serviceType"
                value="Pick Up"
                checked={jobSheetData.serviceType === 'Pick Up'}
                onChange={handleChange}
              />
              Pick Up
            </label>
            <label className="job-radio-label">
              <input
                type="radio"
                name="serviceType"
                value="On Site"
                checked={jobSheetData.serviceType === 'On Site'}
                onChange={handleChange}
              />
              On Site
            </label>
          </div>
        </div>

        <div className="job-form-section">
          <label className="job-label">Jobsheet Number Sequence</label>
          <select
            name="jobSheetNumberSequence"
            value={jobSheetData.jobSheetNumberSequence}
            onChange={handleChange}
            className="job-input"
          >
            <option value="Select">Select</option>
            <option value="DEFAULT-JOBSHEET1">DEFAULT-JOBSHEET1</option>
          </select>
        </div>

        <div className="job-form-section">
          <label className="job-label">Jobsheet Number</label>
          <input
            type="text"
            name="jobSheetNumber"
            value={jobSheetData.jobSheetNumber}
            onChange={handleChange}
            className="job-input"
          />
        </div>
      </div>

      <hr/>

      <h3 className="job-section-title">Customer Information</h3>
      <div className="job-form-group">
        <div className="job-form-section">
          <label className="job-label">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={jobSheetData.firstName}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={jobSheetData.lastName}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Email ID</label>
          <input
            type="email"
            name="email"
            value={jobSheetData.email}
            onChange={handleChange}
            placeholder="Enter valid Email ID's only"
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Mobile Number*</label>
          <input
            type="text"
            name="mobileNumber"
            value={jobSheetData.mobileNumber}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Alternate Mobile Number</label>
          <input
            type="text"
            name="alternateMobileNumber"
            value={jobSheetData.alternateMobileNumber}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Address</label>
          <input
            type="text"
            name="address"
            value={jobSheetData.address}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">GSTIN</label>
          <input
            type="text"
            name="gstin"
            value={jobSheetData.gstin}
            onChange={handleChange}
            className="job-input"
          />
        </div>
      </div>

      <hr/>

      <h3 className="job-section-title">Product Information</h3>
      <div className="job-form-group">
        <div className="job-form-section">
          <label className="job-label">Product Type*</label>
          <select
            name="productType"
            value={jobSheetData.productType}
            onChange={handleChange}
            className="job-input"
          >
            <option value="Select Product Type">Select Product Type</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Charger">Charger</option>
            <option value="Monitor">Monitor</option>
            <option value="CPU">CPU</option>
            <option value="Desktop">Desktop</option>
            <option value="Tablet">Tablet</option>
            <option value="DataCard">DataCard</option>
            <option value="Printer">Printer</option>
            <option value="Router">Router</option>
            <option value="Hard Disk">Hard Disk</option>
            <option value="Speaker">Speaker</option>
            <option value="Other">Other</option>
            <option value="Microwave">Microwave</option>
            <option value="Geyser">Geyser</option>
            <option value="Induction Stove">Induction Stove</option>
          </select>
        </div>

        <div className="job-form-section">
          <label className="job-label">Brand*</label>
          <input
            type="text"
            name="brand"
            value={jobSheetData.brand}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Model Name</label>
          <input
            type="text"
            name="modelName"
            value={jobSheetData.modelName}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Model Number</label>
          <input
            type="text"
            name="modelNumber"
            value={jobSheetData.modelNumber}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Colour of the product</label>
          <input
            type="text"
            name="color"
            value={jobSheetData.color}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Product Configuration</label>
          <input
            type="text"
            name="productConfig"
            value={jobSheetData.productConfig}
            onChange={handleChange}
            placeholder="i5 Processor, 8GB RAM"
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Password/Pattern Lock</label>
          <input
            type="text"
            name="password"
            value={jobSheetData.password}
            onChange={handleChange}
            placeholder="if any"
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Problem</label>
          <textarea
            name="problem"
            value={jobSheetData.problem}
            onChange={handleChange}
            placeholder="Problem description"
            className="job-textarea"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">IMEI 1</label>
          <input
            type="text"
            name="imei1"
            value={jobSheetData.imei1}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">IMEI 2</label>
          <input
            type="text"
            name="imei2"
            value={jobSheetData.imei2}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Warranty Reference</label>
          <input
            type="text"
            name="warrantyReference"
            value={jobSheetData.warrantyReference}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Condition</label>
          <input
            type="text"
            name="condition"
            value={jobSheetData.condition}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Status</label>
          <select
            name="status"
            value={jobSheetData.status}
            onChange={handleChange}
            className="job-input"
          >
            <option value="Warranty">Warranty</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        <div className="job-form-section">
          <label className="job-label">Estimated Cost</label>
          <input
            type="text"
            name="estimatedCost"
            value={jobSheetData.estimatedCost}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Advance Paid</label>
          <input
            type="text"
            name="advancePaid"
            value={jobSheetData.advancePaid}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
  <label className="job-label">Received Items</label>
  <textarea
    name="receivedItems"
    value={jobSheetData.receivedItems}
    onChange={handleChange}
    className="job-input"
  />
</div>

        <div className="job-form-section">
          <label className="job-label">Expected Delivery Date</label>
          <input
            type="date"
            name="expectedDeliveryDate"
            value={jobSheetData.expectedDeliveryDate}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Expected Delivery Time</label>
          <input
            type="time"
            name="expectedDeliveryTime"
            value={jobSheetData.expectedDeliveryTime}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Remarks</label>
          <textarea
            name="remarks"
            value={jobSheetData.remarks}
            onChange={handleChange}
            className="job-textarea"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">Technician</label>
          <input
            type="text"
            name="technician"
            value={jobSheetData.technician}
            onChange={handleChange}
            className="job-input"
          />
        </div>

        <div className="job-form-section">
          <label className="job-label">
            <input
              type="checkbox"
              name="sendAlerts"
              checked={jobSheetData.sendAlerts}
              onChange={handleChange}
              className="job-checkbox"
            />
            Send Alerts
          </label>
        </div>
      </div>

      <div className="job-form-submit">
        <button type="submit" className="job-submit-button">Submit</button>
      </div>
    </form>
  );
};

export default CreateJobsheet;
