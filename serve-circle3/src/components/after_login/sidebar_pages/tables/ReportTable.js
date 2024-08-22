import React from 'react';
import './ReportTable.css'; // Assuming you create a separate CSS file

const ReportTable = () => {
  return (
    <div className="report-table-container">

      <div className="report-filters-cont">
        <h3 className="report-summary-title">
          Show Report For
        </h3>

        <div className="report-filters">
            <div className='filter-report' > 
                <label className="report-filters-label">Branch</label>
                <select className="report-filters-select">
                <option>All Branches</option>
                </select>
            </div>
            
            <div className='filter-report'>
                <label className="report-filters-label">License Type</label>
                <select className="report-filters-select">
                <option>All</option>
                </select>
            </div>

            <div className='filter-report'>
                <label className="report-filters-label">Transaction Period From*</label>
                <input type="date" className="report-filters-input" />
            </div>

            <div className='filter-report'>
                <label className="report-filters-label">Transaction Period To*</label>
                <input type="date" className="report-filters-input" />
            </div>
        </div>

      </div>

        <div className="report-filters-buttons">
          <button className="report-filters-submit-button">SUBMIT</button>
          <button className="report-filters-download-button">DOWNLOAD GST REPORT</button>
        </div>

      <div className="report-summary">
        <h3 className="report-summary-title">
          Report from 1-Aug-2024 to 19-Aug-2024 for All Branches
        </h3>

        <div className="report-summary-section">
          <h4 className="report-summary-section-title">Job Sheets (On Created Date)</h4>
          <div className="report-summary-data">
            <div className="report-summary-data-box">1<br />Total Job Sheets</div>
            <div className="report-summary-data-box">0<br />Requested</div>
            <div className="report-summary-data-box">0<br />Assigned</div>
            <div className="report-summary-data-box">0<br />Picked Up</div>
            <div className="report-summary-data-box">0<br />Pending</div>
            <div className="report-summary-data-box">0<br />Return Without Repair</div>
            <div className="report-summary-data-box">0<br />Closed</div>
            <div className="report-summary-data-box">0<br />Pre-Invoice</div>
            <div className="report-summary-data-box">0<br />Sent Out For Service</div>
            <div className="report-summary-data-box">0<br />Delivered</div>
            <div className="report-summary-data-box">1<br />Open</div>
            <div className="report-summary-data-box">0<br />Initial Check</div>
            <div className="report-summary-data-box">0<br />Out For Delivery</div>
            <div className="report-summary-data-box">0<br />Pending Payment</div>
          </div>
        </div>

        <div className="report-summary-section">
          <h4 className="report-summary-section-title">Sales</h4>
          <div className="report-summary-data">
            <div className="report-summary-data-box">0<br />Total Bills</div>
            <div className="report-summary-data-box">0<br />Payment Pending</div>
            <div className="report-summary-data-box">0<br />Paid</div>
            <div className="report-summary-data-box">0<br />Cancelled</div>
          </div>
        </div>

        <div className="report-summary-section">
          <h4 className="report-summary-section-title">Accounts(Rs.) (On Billing Date)</h4>
          <div className="report-summary-data">
            <div className="report-summary-data-box">0<br />Service Charge</div>
            <div className="report-summary-data-box">0<br />Gross Component Charge</div>
            <div className="report-summary-data-box">0<br />Total Amount</div>
            <div className="report-summary-data-box">0<br />Total No. Of Bills</div>
          </div>
        </div>

        <div className="report-summary-section">
          <h4 className="report-summary-section-title">Amount Collected(Rs.)</h4>
          <div className="report-summary-data">
            <div className="report-summary-data-box">
              0 (0 + 0)<br />Services: Total (Advance + Billing)
            </div>
            <div className="report-summary-data-box">
              Simple Bill: Total (Advance + Billing)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;
