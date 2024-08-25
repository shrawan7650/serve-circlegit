import React, { useState } from 'react';
import './AddBranchForm.css'; // Assuming you have a CSS file for styling

const AddBranchForm = ({handleClickCancel}) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        contactNumber: '',
        additionalContactNumber: '',
        email: '',
        licenceGroup: '',
        businessInterests: {
            services: false,
            sales: false,
            distribution: false
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                businessInterests: {
                    ...formData.businessInterests,
                    [name]: checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Implement form submission logic here
    };


    return (
        <div className="branch-form-container">
            <div className="branch-form-header">
                BRANCH DETAILS
            </div>
            <form className="branch-form" onSubmit={handleSubmit}>
                <div className="branch-form-row">
                    <div className="branch-form-group">
                        <label htmlFor="name" className="branch-form-label">Name<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="branch-form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="branch-form-group">
                        <label htmlFor="address" className="branch-form-label">Address<span style={{ color: 'red' }}>*</span></label>
                        <textarea
                            id="address"
                            name="address"
                            className="branch-form-input"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="branch-form-group">
                        <label htmlFor="city" className="branch-form-label">City<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="branch-form-input"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="branch-form-row">
                    <div className="branch-form-group">
                        <label htmlFor="contactNumber" className="branch-form-label">Contact No.<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            className="branch-form-input"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="branch-form-group">
                        <label htmlFor="additionalContactNumber" className="branch-form-label">Additional Contact No.</label>
                        <input
                            type="text"
                            id="additionalContactNumber"
                            name="additionalContactNumber"
                            className="branch-form-input"
                            value={formData.additionalContactNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="branch-form-group">
                        <label htmlFor="email" className="branch-form-label">Email ID</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="branch-form-input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="branch-form-row">
                    <div className="branch-form-group">
                        <label className="branch-form-label">Business Interests</label>
                        <div className="branch-form-checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="services"
                                    checked={formData.businessInterests.services}
                                    onChange={handleChange}
                                />
                                Services (Services management, its billing & inventory)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="sales"
                                    checked={formData.businessInterests.sales}
                                    onChange={handleChange}
                                />
                                Sales (Sales billing & inventory)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="distribution"
                                    checked={formData.businessInterests.distribution}
                                    onChange={handleChange}
                                />
                                Distribution (Orders & channels management)
                            </label>
                        </div>
                    </div>
                    <div className="branch-form-group">
                        <label htmlFor="licenceGroup" className="branch-form-label">Licence Group<span style={{ color: 'red' }}>*</span></label>
                        <select
                            id="licenceGroup"
                            name="licenceGroup"
                            className="branch-form-input"
                            value={formData.licenceGroup}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Group1">Group 1</option>
                            <option value="Group2">Group 2</option>
                        </select>
                    </div>
                </div>

                <div className="branch-form-actions">
                    <button
                        type="button"
                        className="branch-form-btn branch-cancel-btn"
                        onClick={handleClickCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="branch-form-btn branch-create-btn"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBranchForm;
