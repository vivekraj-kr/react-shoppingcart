import React from 'react';
import StyledContainer from '../StyledContainer';
import styled from 'styled-components';

const StyledOrderStatusWrapper = styled.div`
  background-color: #fff;
  border-bottom: solid 1px #00000014;
  padding: 30px 0;
`;

const StyledStatus = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

const StyledStatuIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 105px;
`;

const StyledStatusLabel = styled.label`
  white-space: nowrap;
  text-transform: uppercase;
  color: #ccc;
`;

const StyledStatusLabelActive = styled(StyledStatusLabel)`
  color: #666;
`;

const StyledStatusCircle = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 100%;
  background-color: #ccc;
  margin-bottom: 15px;
`;

const StyledStatusCircleActive = styled(StyledStatusCircle)`
  background-color: transparent;
  border: solid 1px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #000;
  }
`;

const StyledStatusBorder = styled.div`
  border-bottom: solid 1px #ccc;
  width: 33.33%;
  margin-top: 10px;
  margin-left: -40px;
  margin-right: -40px;
`;

const StyledStatusBorderActive = styled(StyledStatusBorder)`
  border-bottom: solid 1px #000;
`;

const OrderStatus = () => {
  return (<StyledOrderStatusWrapper> 
    <StyledContainer>
      <StyledStatus>
        <StyledStatuIndicator>
          <StyledStatusCircleActive/>
          <StyledStatusLabelActive>Shopping cart</StyledStatusLabelActive>
        </StyledStatuIndicator>
        <StyledStatusBorderActive/>
        <StyledStatuIndicator>
          <StyledStatusCircle/>
          <StyledStatusLabel>Order details</StyledStatusLabel>
        </StyledStatuIndicator>
        <StyledStatusBorder/>
        <StyledStatuIndicator>
          <StyledStatusCircle/>
          <StyledStatusLabel>Make payment</StyledStatusLabel>
        </StyledStatuIndicator>
      </StyledStatus>
    </StyledContainer>
  </StyledOrderStatusWrapper>)
}

export default OrderStatus;