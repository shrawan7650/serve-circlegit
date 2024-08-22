import React from 'react';
import './SMS.css';

const SMS = () => {
  return (
    <>
        <div className="sms-container">
            <div className="sms-image-wrapper">
                <img src='https://www.servecircle.com/resources/assets/img/sms-email.png' alt="SMS & Email Updates" className="sms-image" />
            </div>
            <div className="sms-content">
                <h2 className="sms-title">SMS & Email Updates</h2>
                <p className="sms-description">
                Customers love proactive status updates. Keep them posted with job sheet creation, service completion, delivery confirmation messages, and emails. Minimize paper transactions with attached copies of job sheets and invoices.
                </p>
            </div>
        </div>
        <hr className='sms-seperator'/>

        <div className="sms-container">
            <div className="sms-content">
                <h2 className="sms-title">Reports</h2>
                <p className="sms-description">
                Get day to day insights of your business. Understand, manage and enhance your growths.
                <ul>
                    <li> Service reports </li>
                    <li> Billing reports </li>
                    <li> Collection reports and more </li>
                </ul>
                </p>
            </div>
            <div className="sms-image-wrapper">
                <img src='https://www.servecircle.com/resources/assets/img/reports-banner.png' alt="SMS & Email Updates" className="sms-image" />
            </div>
        </div>
        <hr className='sms-seperator' />

        <div className="sms-container">
            <div className="sms-image-wrapper">
                <img src='https://www.servecircle.com/resources/assets/img/inventory-integration.png' alt="SMS & Email Updates" className="sms-image" />
            </div>
            <div className="sms-content">
                <h2 className="sms-title">Integrated Inventory</h2>
                <p className="sms-description">
                Keep your spare usage count intact. Services integrated with inventory helps you to track parts consumption in each repair.
                </p>
            </div>
        </div>
    </>
  );
};

export default SMS;
