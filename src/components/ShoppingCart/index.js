import React from 'react';
import StyledContainer from '../StyledContainer';
import styled from 'styled-components';

const StyledShoppingCart = styled.div`
  height: 100vh;
`;

const ShoppingCart = () => {
  return(
    <StyledContainer>
      <StyledShoppingCart> This is shopping cart</StyledShoppingCart>
    </StyledContainer>
  )
}

export default ShoppingCart;