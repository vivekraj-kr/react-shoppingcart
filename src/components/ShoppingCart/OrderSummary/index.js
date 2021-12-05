import React from 'react'
import styled from 'styled-components';

const StyledOrderSummaryWrapper = styled.div`
  flex-basis: 400px;
  color: #666;
`;

const StyledOrderSummaryTitle = styled.h4`
  font-size: 18px;
  color: #333;
`;

const StyledOrderSummaeyRow = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledOrderSummaryLabel = styled.label`
`;

const StyledOrderSummaryValue = styled.span`
`;

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #131F97;
  font-weight: 700;
`;

const StyledBtn = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #131F97;
  color: #fff;
  border: none;
  border-radius: 35px;
  padding: 20px 40px;
  
  &:disabled {
    background-color: #ccc;
    cursor: auto;
  }
`;

const OrderSummary = ({orderSummary, isCheckoutEnabled}) => {
  console.log(isCheckoutEnabled);
  return (<StyledOrderSummaryWrapper>
    <StyledOrderSummaryTitle> Order summary </StyledOrderSummaryTitle>
    <StyledOrderSummaeyRow>
      <StyledOrderSummaryLabel>Subtotal</StyledOrderSummaryLabel>
      <StyledOrderSummaryValue> {orderSummary.subtotal}$ </StyledOrderSummaryValue>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <StyledOrderSummaryLabel>Total discount</StyledOrderSummaryLabel>
      <StyledOrderSummaryValue> -{orderSummary.discountPrice}$ </StyledOrderSummaryValue>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <StyledOrderSummaryLabel>Standard shipping</StyledOrderSummaryLabel>
      <StyledOrderSummaryValue> {orderSummary.deliveryCost === 0? "Free": `${orderSummary.deliveryCost}$`} </StyledOrderSummaryValue>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <StyledOrderSummaryLabel>Order total</StyledOrderSummaryLabel>
      <StyledOrderSummaryValue> {orderSummary.grantTotal}$ </StyledOrderSummaryValue>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <StyledLink href="https://www.w3.org/Provider/Style/dummy.html"> Continue shopping</StyledLink>
      <StyledBtn disabled={!isCheckoutEnabled}>Checkout</StyledBtn>
    </StyledOrderSummaeyRow>
  </StyledOrderSummaryWrapper>)
}

export default OrderSummary;