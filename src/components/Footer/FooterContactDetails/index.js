import React from 'react';
import styled from 'styled-components';

const StyledFooterHeading = styled.h5`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 0;
`;

const FooterContactDetails = () => {
  return(<div>
    <StyledFooterHeading> Lorem </StyledFooterHeading>
    <div>Monday - Friday Saturday - Sunday</div>
    <div>8am - 9pm 10am - 6pm</div>
  </div>);

}

export default FooterContactDetails;