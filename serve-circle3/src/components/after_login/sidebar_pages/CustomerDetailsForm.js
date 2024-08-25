import React, { useState } from 'react';
import axios from 'axios';
import './CustomerDetailsForm.css';

const CustomerDetailsForm = ({ handleClickCancelCust }) => {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        alternateMobileNumber: '',
        email: '',
        address: '',
        secondAddress: '',
        gstin: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/customer/create', formData);

            if (response.status === 201) {
                alert('Customer created successfully');
                // Reset form or handle success state
            } else {
                alert('Error creating customer: ' + response.data.message);
            }
        } catch (error) {
            alert('An error occurred while creating the customer.');
        }
    };

    return (
        <div className='create-cust-wrapper'>
            <div className="create-cust-container">
                <div className="create-cust-header">
                    CUSTOMER DETAILS
                </div>
                <form className="create-cust-form" onSubmit={handleSubmit}>
                    <div className="create-cust-row">
                        <div className="create-cust-group">
                            <label htmlFor="title" className="create-cust-label">Title</label>
                            <select
                                id="title"
                                name="title"
                                className="create-cust-input"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </div>
                        <div className="create-cust-group">
                            <label htmlFor="firstName" className="create-cust-label">First Name<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="create-cust-input"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="create-cust-group">
                            <label htmlFor="lastName" className="create-cust-label">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="create-cust-input"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="create-cust-row">
                        <div className="create-cust-group">
                            <label htmlFor="mobileNumber" className="create-cust-label">Mobile Number<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                id="mobileNumber"
                                name="mobileNumber"
                                className="create-cust-input"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="create-cust-group">
                            <label htmlFor="alternateMobileNumber" className="create-cust-label">Alternate Mobile Number</label>
                            <input
                                type="text"
                                id="alternateMobileNumber"
                                name="alternateMobileNumber"
                                className="create-cust-input"
                                value={formData.alternateMobileNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="create-cust-group">
                            <label htmlFor="email" className="create-cust-label">Email ID<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="create-cust-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="create-cust-row">
                        <div className="create-cust-group">
                            <label htmlFor="address" className="create-cust-label">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                className="create-cust-input"
                                value={formData.address}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="create-cust-group">
                            <label htmlFor="secondAddress" className="create-cust-label">Second Address</label>
                            <textarea
                                id="secondAddress"
                                name="secondAddress"
                                className="create-cust-input"
                                value={formData.secondAddress}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="create-cust-group">
                            <label htmlFor="gstin" className="create-cust-label">GSTIN</label>
                            <input
                                type="text"
                                id="gstin"
                                name="gstin"
                                className="create-cust-input"
                                value={formData.gstin}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="create-cust-actions">
                        <button type="button" className="create-cust-btn create-cust-btn-cancel" onClick={handleClickCancelCust}>Cancel</button>
                        <button type="submit" className="create-cust-btn create-cust-btn-save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerDetailsForm;
