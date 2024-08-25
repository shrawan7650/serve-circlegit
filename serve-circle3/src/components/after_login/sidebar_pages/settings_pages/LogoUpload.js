import React, { useState } from 'react';
import './LogoUpload.css'; // Assuming you have a CSS file for styling
import { FaTrash, FaUpload } from 'react-icons/fa';
import axios from 'axios';

const LogoUpload = () => {
    const [logo, setLogo] = useState(null);
    const [file, setFile] = useState(null);

    const handleUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg') && selectedFile.size < 200 * 1024) {
            setLogo(URL.createObjectURL(selectedFile));
            setFile(selectedFile); // Save the file to be uploaded
        } else {
            alert('Logo should be less than 200KB and in PNG/JPEG format.');
        }
    };

    const handleDelete = () => {
        setLogo(null);
        setFile(null);
    };

    const handleSubmit = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('logo', file);

            try {
                const response = await axios.patch('http://localhost:5000/auth/update-company-logo', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (response.data.status) {
                    alert('Logo uploaded successfully');
                } else {
                    alert('Error uploading logo: ' + response.data.message);
                }
            } catch (error) {
                alert('An error occurred while uploading the logo.');
            }
        } else {
            alert('Please select a logo to upload.');
        }
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
                <button onClick={handleSubmit} className="logo-submit-btn" disabled={!file}>
                    Submit
                </button>
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
