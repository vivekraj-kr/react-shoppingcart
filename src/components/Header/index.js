import React from 'react';
import StyledContainer from '../StyledContainer';
import SubNav from './SubNav';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const StyledHeader = styled.header`
  padding: 15px;
  background-color: #131F97;
  color: #fff;
`;

const StyledHeaderContent = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (<StyledHeader> 
    <StyledHeaderContent>
    <img src={logo} alt="Logo" />
    <SubNav/>
    </StyledHeaderContent>
  </StyledHeader>)
}

export default Header;