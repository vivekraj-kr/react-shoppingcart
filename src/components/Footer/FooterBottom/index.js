import React from 'react';
import styled from 'styled-components';

const StyledFooterBottom = styled.div`
  width: 100%;
  padding: 20px 0 0;
  display: flex;
  justify-content: flex-end;
  border-top: solid 1px #fff;
`;

const FooterBottom = () => {
  return (<StyledFooterBottom>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </StyledFooterBottom>)
}

export default FooterBottom;