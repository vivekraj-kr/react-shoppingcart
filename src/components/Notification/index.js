import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
  padding: 15px;
  margin: 15px auto;
  background-color: #848AC6;
  color: #fff;
  text-align: center;
  font-size: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Notification  = ({children}) => {
  return (<StyledNotification> 
    {children}
  </StyledNotification>)
}

export default Notification;