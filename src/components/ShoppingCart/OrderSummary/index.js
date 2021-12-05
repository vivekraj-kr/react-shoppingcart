import React from 'react'
import styled from 'styled-components';

const StyledOrderSummaryWrapper = styled.div`
  flex-basis: 400px;
  color: #666;
`;

const StyledOrderSummaryTitle = styled.h4`
  font-size: 16px;
  color: #333;
`;

const StyledOrderSummaeyRow = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledGrantTotalLabel = styled.label`
  font-size: 16px;
  color: #333;
`;

const StyledGrantTotal = styled.span`
  font-weight: 700;
  font-size: 30px;
  color: #222;
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
  return (<StyledOrderSummaryWrapper>
    <StyledOrderSummaryTitle> Order summary </StyledOrderSummaryTitle>
    <StyledOrderSummaeyRow>
      <label>Subtotal</label>
      <span> {orderSummary.subtotal}$ </span>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <label>Total discount</label>
      <span> -{orderSummary.discountPrice}$ </span>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <label>Standard shipping</label>
      <span> {orderSummary.deliveryCost === 0? "Free": `${orderSummary.deliveryCost}$`} </span>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <StyledGrantTotalLabel>Order total</StyledGrantTotalLabel>
      <StyledGrantTotal> {orderSummary.grantTotal} $ </StyledGrantTotal>
    </StyledOrderSummaeyRow>
    <StyledOrderSummaeyRow>
      <StyledLink href="https://www.w3.org/Provider/Style/dummy.html"> Continue shopping</StyledLink>
      <StyledBtn disabled={!isCheckoutEnabled || orderSummary.subtotal === 0}>Checkout</StyledBtn>
    </StyledOrderSummaeyRow>
  </StyledOrderSummaryWrapper>)
}

export default OrderSummary;