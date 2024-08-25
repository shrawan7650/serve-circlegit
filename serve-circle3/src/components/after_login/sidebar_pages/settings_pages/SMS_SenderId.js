import React, { useState } from 'react';
import './SMS_SenderId.css'; // Assuming you have a CSS file for styling
import { FaInfoCircle } from 'react-icons/fa';

const SMS_SenderId = () => {
    const [smsSenderId, setSmsSenderId] = useState('');

    const handleChange = (e) => {
        setSmsSenderId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(smsSenderId);
        // Submit logic here
    };

    return (
        <form className="sms-sender-form" onSubmit={handleSubmit}>
            <h3 className="sms-sender-title">Sender ID<FaInfoCircle/></h3>
            <div className="sms-sender-field">
                <input
                    type="text"
                    id="smsSenderId"
                    name="smsSenderId"
                    value={smsSenderId}
                    onChange={handleChange}
                    className="sms-sender-input"
                    placeholder="Sender ID"
                />
            </div>
            <button type="submit" className="sms-sender-save-btn">SAVE</button>
        </form>
    );
};

export default SMS_SenderId;
