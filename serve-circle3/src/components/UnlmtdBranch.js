// src/UnlmtdBranch.js
import React from 'react';
import './UnlmtdBranch.css';
import user_branches from '../img/user_branches.png'
import mobile_app from '../img/mobile-app.png'
import play_store from '../img/play-store.png'

const UnlmtdBranch = () => {
  return (
    <div className="unlmtd-branch">
      <div className="section">
        <div className="section-content">
          <img 
            src={user_branches} 
            alt="Unlimited branches and users" 
            className="section-image"
          />
          <div className="section-text">
            <h2>Unlimited branches and users</h2>
            <p>Own multiple branches or offer franchisees? Create unlimited branches and users with just a single license. Set up your entire network from day one with any of our licenses and upgrade only on more usage. A true pay as you go model.</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <div className="section-text">
            <h2>Mobile app</h2>
            <p>Keeping you always connected to your business. Login with our mobile application now. Provide access to your managers, technicians, front desk executives to complete assigned tasks through the app.</p>
            <a href="#google-play" className="google-play-link">
              <img 
                src={play_store} 
                alt="Get it on Google Play" 
              />
            </a>
          </div>
          <img 
            src={mobile_app}
            alt="Mobile app" 
            className="section-image"
          />
        </div>
      </div>
    </div>
  );
};

export default UnlmtdBranch;
