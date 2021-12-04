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
  const [cartData, setCartData] = useState();

  const onRemoveProduct = (id) => {
    const updatedProducts = cartData.products.filter((product) => product.id !== id);
    setCartData((state) => ({
      ...state,
      products: updatedProducts
    }));
  };

  const onUpdateQuantity = (id, qty) => {
    let quantity = Number(qty);
    const updatedProductList = cartData.products.map((product) => {
      if (product.id === id) {
        product.quantity = quantity;
        product.total = product.price * quantity;
      }
      return product;
    });

    setCartData((state) => ({
      ...state,
      products: updatedProductList
    }));
  }

  const onQuantityIncrement = (id) => {
    const updatedProductList = cartData.products.map((product) => {
      if (product.id === id) {
        const quantity = product.quantity + 1.
        product.quantity = quantity;
        product.total = product.price * quantity;
      }
      return product;
    });

    setCartData((state) => ({
      ...state,
      products: updatedProductList
    }));
  }

  const onQuantityDecrement = (id) => {
    const updatedProductList = cartData.products.map((product) => {
      if (product.id === id) {
        const quantity = product.quantity !== 0 ? product.quantity - 1 : 0;
        product.quantity = quantity;
        product.total = product.price * quantity;
      }
      return product;
    });

    setCartData((state) => ({
      ...state,
      products: updatedProductList
    }));
  }

  useEffect(() => {
    let products = data.products;
    const updatedProducts = products.map((product) =>
    ({
      ...product,
      quantity: 1,
      total: product.price
    })
    )
    data.products = updatedProducts;
    setCartData(data);
  }, []);

  return (
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
          {cartData && cartData.products && cartData.products.length > 1 ?
            <ShoppingCartItem
              cartItmes={cartData.products}
              onRemoveProduct={onRemoveProduct}
              onUpdateQuantity={onUpdateQuantity}
              onQuantityIncrement={onQuantityIncrement}
              onQuantityDecrement={onQuantityDecrement} />
            :
            <StyledEmptyCart>Your cart is empty <a href="https://www.w3.org/Provider/Style/dummy.html">continue shopping</a></StyledEmptyCart>
          }
        </StyledShoppingCartBody>
      </StyledShoppingCart>
    </StyledContainer>
  )
}

export default ShoppingCart;