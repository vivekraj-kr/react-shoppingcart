import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 5px 0;
`;

const StyledFooterHeading = styled.h5`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 0;
`;

const FooterItem = () => {
  return (<div>
    <StyledFooterHeading> Lorem </StyledFooterHeading>
    <StyledLink href="#">Lorem ipsum</StyledLink>
    <StyledLink href="#">Lorem ipsum</StyledLink>
    <StyledLink href="#">Lorem ipsum</StyledLink>
    <StyledLink href="#">Lorem ipsum</StyledLink>
    <StyledLink href="#">Lorem ipsum</StyledLink>
  </div>);
}

export default FooterItem;