import React from 'react';
import './HeaderAf.css';
import RoundBtn from './buttons/RoundBtn';
import { TbLogout } from 'react-icons/tb';

import { NavLink } from 'react-router-dom';

const HeaderAf = () => {


  

  return (
    <div className='header-af'>
      <div className='hdr-left'>
        <p>Welcome, <b>#BRANCH NAME</b></p>
      </div>
      <div className='hdr-right'>
        <p>#USERNAME</p>
        <NavLink to="/login" className='hdr-logout-btn' >
  <RoundBtn icon={<TbLogout />} text="Log Out" />
</NavLink>
      </div>
    </div>
  );
};

export default HeaderAf;
