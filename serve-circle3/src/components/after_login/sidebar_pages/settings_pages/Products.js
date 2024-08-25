import React, { useState } from 'react';
import './Products.css'; // Assuming you have a CSS file for styling

const Products = () => {
    const [productType, setProductType] = useState('');

    const handleChange = (e) => {
        setProductType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productType);
        // Submit logic here
    };

    return (
        <form className="products-form" onSubmit={handleSubmit}>
            <h3 className="products-title">Products</h3>
            <div className="products-field">
                <select
                    id="productType"
                    name="productType"
                    className="products-input"
                    value={productType}
                    onChange={handleChange}
                    placeholder="Select Product Type"
                >
                    <option value="">Select Product type</option>
                    <option value="Group1">Group 1</option>
                    <option value="Group2">Group 2</option>
                </select>
            </div>
            <button type="submit" className="products-save-btn">SAVE</button>
        </form>
    );
};

export default Products;
