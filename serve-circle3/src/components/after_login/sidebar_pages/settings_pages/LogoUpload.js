import React, { useState } from 'react';
import './LogoUpload.css'; // Assuming you have a CSS file for styling
import { FaTrash, FaUpload } from 'react-icons/fa';

const LogoUpload = () => {
    const [logo, setLogo] = useState(null);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg') && file.size < 200 * 1024) {
            setLogo(URL.createObjectURL(file));
        } else {
            alert('Logo should be less than 200KB and in PNG/JPEG format.');
        }
    };

    const handleDelete = () => {
        setLogo(null);
    };

    return (
        <div className="logo-upload-container">
            <h3 className="logo-upload-title">Logo</h3>
            <div className="logo-upload-content">
                <div className="logo-upload-buttons">
                    <label htmlFor="upload-logo" className="logo-upload-btn upload-btn">
                        <FaUpload/> Upload Logo
                        <input
                            type="file"
                            id="upload-logo"
                            accept="image/png, image/jpeg"
                            onChange={handleUpload}
                            style={{ display: 'none' }}
                        />
                    </label>
                    <button
                        className="logo-upload-btn delete-btn"
                        onClick={handleDelete}
                        disabled={!logo}
                    >
                        <FaTrash/> Delete
                    </button>
                </div>
                <p className="logo-upload-instructions">
                    *Logo should be less than 200KB and in PNG/JPEG format.
                </p>
            </div>
            {logo && (
                <div className="logo-preview">
                    <img src={logo} alt="Uploaded Logo" />
                </div>
            )}
        </div>
    );
};

export default LogoUpload;
