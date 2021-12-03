import React, { useEffect, useState } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import StyledContainer from '../StyledContainer';
import styled from 'styled-components';
import data from './data.json';

const StyledShoppingCart = styled.div`
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 12px;
  margin: 30px auto;
`;

const StyledShoppingCartTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;

const StyledShoppingCartHeader = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr 1fr 40px;
  padding: 20px 30px;
  border-bottom: solid 1px #ddd;
`;

const StyledShoppingCartHeaderItem = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const StyledShoppingCartBody = styled.div`
  min-height: 200px;
`;

const StyledEmptyCart = styled.div`
  padding: 30px;
  text-align: center;
  a {
    color: #131F97;
  }
`;

const ShoppingCart = () => {

  const [cartItmes, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(data.products);
  }, []);

  return(
    <StyledContainer>
      <StyledShoppingCartTitle>Shopping cart</StyledShoppingCartTitle>
      <StyledShoppingCart>
        <StyledShoppingCartHeader>
          <StyledShoppingCartHeaderItem> Product </StyledShoppingCartHeaderItem>
          <StyledShoppingCartHeaderItem> Price </StyledShoppingCartHeaderItem>
          <StyledShoppingCartHeaderItem> Quantity </StyledShoppingCartHeaderItem>
          <StyledShoppingCartHeaderItem> Subtotal </StyledShoppingCartHeaderItem>
        </StyledShoppingCartHeader>
        <StyledShoppingCartBody>
          {cartItmes && cartItmes.length > 1 ? 
            <ShoppingCartItem cartItmes={cartItmes}/>
          :
            <StyledEmptyCart>Your cart is empty <a href="https://www.w3.org/Provider/Style/dummy.html">continue shopping</a></StyledEmptyCart>
          }
        </StyledShoppingCartBody>
      </StyledShoppingCart>
    </StyledContainer>
  )
}

export default ShoppingCart;