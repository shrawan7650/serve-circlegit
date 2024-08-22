import React from 'react';
import styled from 'styled-components';
import './signup_15.css';

const Signup15 = () => {
  return (
    <SignupComponent>
      <div className="sig">
        <h2>Sign up now for 15 days free trial.</h2>
        <button>START NOW</button>
        <p>Already Registered? <span>Log in</span></p>
      </div>
    </SignupComponent>
  );
};

const SignupComponent = styled.div`
  width: 100vw;
 display: flex;
  justify-content: center;
  align-items: center;
 height:50vh;
  
  background:#F8F8F8;

  .sig {
    text-align: center;
  }
  .sig h2{
    font-family: 'Dosis', "Open-Sans", sans-serif;
    font-size: 60px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 72px;
    color: #37404D;
  }

  button {
    margin-top: 20px;
    padding: 12px 85px;
    background-color: #FFBD4A;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }

  span {
    color: #0facf3;
    cursor: pointer;
  }
`;

export default Signup15;