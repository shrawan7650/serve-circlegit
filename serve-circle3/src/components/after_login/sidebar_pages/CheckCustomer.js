import React, { useState } from 'react';
import './CheckCustomer.css'; // Assuming you have a CSS file for styling
import CreateJobsheet from './tables/CreateJobsheet';

const CheckCustomer = () => {
    const [searchValue, setSearchValue] = useState('');
    const [editingJobsheet, setEditingJobsheet] = useState(false)

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchClick = () => {
        // Implement the search logic here
        console.log('Searching for:', searchValue);
    };

    const handleCreateCustomerClick = () => {
        setEditingJobsheet(!editingJobsheet)
        console.log('Navigating to create new customer page...');
    };

    return (
        <>
            {
                editingJobsheet ? <CreateJobsheet/>  :

            <div className="check-customer-container">
                <div className="check-customer-header">
                    Create Job Sheet
                </div>
                <div className="check-customer-form">
                    <label htmlFor="search" className="check-customer-label">
                        Search existing customer or create new customer
                    </label>
                    <div className="check-customer-input-group">
                        <label htmlFor="search" className="check-customer-input-label">Search:</label>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            value={searchValue}
                            onChange={handleSearchChange}
                            placeholder="Customer Name, Mobile No. or Email ID"
                            className="check-customer-input"
                        />
                        <button
                            type="button"
                            onClick={handleSearchClick}
                            className="check-customer-btn search-btn"
                        >
                            SEARCH
                        </button>
                        <button
                            type="button"
                            onClick={handleCreateCustomerClick}
                            className="check-customer-btn create-btn"
                        >
                            CREATE NEW CUSTOMER
                        </button>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default CheckCustomer;
