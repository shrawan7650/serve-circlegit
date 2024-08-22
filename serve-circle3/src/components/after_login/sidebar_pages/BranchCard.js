import React from 'react';
import './BranchCard.css'; // Assuming you create a separate CSS file
import { ImEnter, ImInfo } from 'react-icons/im';
import { BiSolidInfoCircle, BiSolidPencil } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';

const BranchCard = () => {
  return (
    <div className="branch-card">
      <p className="branch-card-info-text">
        Click on settings icon to add logo for this branch.
      </p>
      <h3 className="branch-card-title">ABC</h3>
      <p className="branch-card-location">Sector 13, Chandigarh</p>
      <p className="branch-card-city">Chandigarh</p>
      <button className="branch-card-enter-button">
        ENTER <span className="branch-card-icon"><ImEnter/></span>
      </button>
      <div className="branch-card-actions">
        <span className="branch-card-icon edit-icon"><BiSolidPencil/></span>
        <span className="branch-card-icon info-icon"><BiSolidInfoCircle/></span>
        <span className="branch-card-icon settings-icon"><MdSettings/></span>
        <span className="branch-card-icon star-icon"><BsStarFill/></span>
      </div>
    </div>
  );
};

export default BranchCard;
