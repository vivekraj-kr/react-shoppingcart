import React from 'react';
import styled from 'styled-components';

const StyledShoppingCartItem = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr 1fr 40px;
  align-items: center;
  padding: 30px 30px;
  border-bottom: solid 1px #eee;
  gap: 15px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    background-color: #F5F5F5;
  }
`;

const StyledShoppingGiftItem = styled(StyledShoppingCartItem)`
  grid-column: 1/span 5; 
  background-color: #F5F5F5;
  margin-top: 15px;
`;

const StyledShoppingCartItemCol = styled.div`
  color: #666;
`;

const StyledShoppingCartItemColImg = styled(StyledShoppingCartItemCol)`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    grid-column: 1/span 5;
  }
`;

const StyledLabel = styled.label`
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

const StyledBadge = styled.span`
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  margin-bottom: 5px;
`;

const StyledTagline = styled(StyledBadge)`
  background-color: #2E296A;
`;

const StyledGiftBadge = styled(StyledBadge)`
  background-color: #222;
`;

const StyledPlanLink = styled.a`
  text-decoration: none;
  color: #131F97;
  font-weight: 500;
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
            {product.tagline?
              <StyledTagline>{product.tagline}</StyledTagline>
              : null
            }
            <StyledLabel>{product.name}</StyledLabel>
            <StyledLabel>{product.desc} 
              {product.planLink? 
                <StyledPlanLink href={product.planLink}> View plans </StyledPlanLink>
              : null }
            </StyledLabel>
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
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" /></svg>
          </StyledActionBtn>
        </StyledShoppingCartItemCol>
        {product.gift && product.quantity > 0 ?
          <StyledShoppingGiftItem> 
            <StyledShoppingCartItemColImg>
            <div>
              <StyledGiftBadge>Gift</StyledGiftBadge>
              <StyledLabel>{product.gift.name}</StyledLabel>
              <StyledLabel>{product.gift.desc}</StyledLabel>
            </div>
            </StyledShoppingCartItemColImg>
            <StyledShoppingCartItemCol>
              {`${product.gift.price}$`}
            </StyledShoppingCartItemCol>
          </StyledShoppingGiftItem>
          : null
        }
      </StyledShoppingCartItem>
    })
  );
}

export default ShoppingCartItem;