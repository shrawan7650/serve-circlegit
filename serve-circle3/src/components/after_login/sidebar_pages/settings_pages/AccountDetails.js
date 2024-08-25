import React, { useState } from 'react';
import './AccountDetails.css'; // Assuming you have a CSS file for styling

const AccountDetails = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        email: '',
        phoneNumber: '',
        city: '',
        pan: '',
        taxDisplayName: '',
        taxNumber: '',
        password: '',
        disableDailyReport: false,
        changePassword: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit logic here
    };

    const handleCancel = () => {
        // Logic for canceling the form
    };

    return (
        <form className="account-details-form" onSubmit={handleSubmit}>
            <h3 className="account-details-title">Account Details</h3>
            <div className="account-details-grid">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email ID</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="pan">PAN No.</label>
                    <input
                        type="text"
                        id="pan"
                        name="pan"
                        value={formData.pan}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="taxDisplayName">Tax Registration Display Name</label>
                    <input
                        type="text"
                        id="taxDisplayName"
                        name="taxDisplayName"
                        value={formData.taxDisplayName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="taxNumber">Tax Registration Number</label>
                    <input
                        type="text"
                        id="taxNumber"
                        name="taxNumber"
                        value={formData.taxNumber}
                        onChange={handleChange}
                    />
                </div>

                {formData.changePassword && (
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                )}
            </div>

            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        name="disableDailyReport"
                        checked={formData.disableDailyReport}
                        onChange={handleChange}
                    />
                    Disable Daily Report Email Notification
                </label>
            </div>

            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        name="changePassword"
                        checked={formData.changePassword}
                        onChange={handleChange}
                    />
                    Change Password
                </label>
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-save">Save</button>
                <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default AccountDetails;
