import React from 'react';
import FooterItem from './FooterItem';
import FooterContactDetails from './FooterContactDetails';
import FooterBottom from './FooterBottom';
import StyledContainer from '../StyledContainer';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #212121;
  color: #fff;
  padding: 20px 0;
`;

const StyledFooterContentWrapper = styled(StyledContainer)`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
`;

const Footer = () => {
  return (<StyledFooter>
    <StyledFooterContentWrapper>
      <FooterItem />
      <FooterItem />
      <FooterItem />
      <FooterItem />
      <FooterContactDetails />
      <FooterBottom />
    </StyledFooterContentWrapper>
  </StyledFooter>)
}

export default Footer;