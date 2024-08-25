import React, { useState } from 'react';
import './CustomerDetailsForm.css'

const CustomerDetailsForm = ({handleClickCancelCust}) => {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        altMobileNumber: '',
        email: '',
        address1: '',
        address2: '',
        gstin: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
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
                        >
                            <option value="">Select</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
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
                        <label htmlFor="altMobileNumber" className="create-cust-label">Alternate Mobile Number</label>
                        <input
                            type="text"
                            id="altMobileNumber"
                            name="altMobileNumber"
                            className="create-cust-input"
                            value={formData.altMobileNumber}
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
                        <label htmlFor="address1" className="create-cust-label">Address</label>
                        <textarea
                            id="address1"
                            name="address1"
                            className="create-cust-input"
                            value={formData.address1}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="create-cust-group">
                        <label htmlFor="address2" className="create-cust-label">Address</label>
                        <textarea
                            id="address2"
                            name="address2"
                            className="create-cust-input"
                            value={formData.address2}
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
