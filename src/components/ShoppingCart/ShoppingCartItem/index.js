import React from 'react';
import styled from 'styled-components';

const StyledShoppingCartItem = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr 1fr 40px;
  align-items: center;
  padding: 30px 30px;
  border-bottom: solid 1px #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledShoppingCartItemCol = styled.div`
  color: #666;
`;

const StyledShoppingCartItemColImg = styled(StyledShoppingCartItemCol)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledLabel =styled.label`
  display: block;
`;

const StyledActionBtn = styled.button`
  cursor: pointer;
  height: 20px;
  width: 20px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

const StyledQtyActionBtn = styled(StyledActionBtn)`
  height: 30px;
  width: 30px;
  font-size: 26px;
`;

const StyledQtyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  border: solid 1px #ddd;
  height: 30px;
  width: 30px;
  text-align: center;
`;

const ShoppingCartItem = ({ 
  cartItmes, 
  onRemoveProduct, 
  onUpdateQuantity,
  onQuantityIncrement,
  onQuantityDecrement
}) => {
  return (
    cartItmes.map((product) => {
      return <StyledShoppingCartItem key={product.id}>
        <StyledShoppingCartItemColImg>
          <img src={product.imageUrl} alt={product.name} />
          <div>
            <StyledLabel>{product.name}</StyledLabel>
            <StyledLabel>{product.desc}</StyledLabel>
          </div>
        </StyledShoppingCartItemColImg>
        <StyledShoppingCartItemCol>
        {`${product.price}$`}
        </StyledShoppingCartItemCol>
        <StyledShoppingCartItemCol>
          <StyledQtyWrapper>
            <StyledQtyActionBtn onClick={() => onQuantityDecrement(product.id)}> - </StyledQtyActionBtn>
            <StyledInput 
              type="text" 
              value={product.quantity} 
              onChange={(e) => onUpdateQuantity(product.id, e.target.value)} 
            />
            <StyledQtyActionBtn onClick={() => onQuantityIncrement(product.id)}> + </StyledQtyActionBtn>
          </StyledQtyWrapper>
        </StyledShoppingCartItemCol>
        <StyledShoppingCartItemCol>
        {`${product.total}$`}
        </StyledShoppingCartItemCol>
        <StyledShoppingCartItemCol>
          <StyledActionBtn onClick={() => onRemoveProduct(product.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
          </StyledActionBtn>
        </StyledShoppingCartItemCol>
      </StyledShoppingCartItem>
      })
  );
}

export default ShoppingCartItem;