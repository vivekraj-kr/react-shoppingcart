import React, { useEffect, useState } from 'react';
import Notification from '../Notification'
import ShoppingCartItem from './ShoppingCartItem';
import StyledContainer from '../StyledContainer';
import DeliveryAvailability from './DeliveryAvailability';
import OrderSummary from './OrderSummary';
import styled from 'styled-components';
import data from './data.json';

const StyledShoppingCart = styled.div`
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 12px;
  margin: 30px auto;

  @media (max-width: 768px) {
    overflow: hidden;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
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

const StyledShoppingCartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ShoppingCart = () => {
  const [cartData, setCartData] = useState();

  const getSubTotal = (updatedProducts = []) => {
    let totalPriceList = updatedProducts.map((product) => {
      return product.total;
    }) || [];

    return totalPriceList.length > 0 ?
      totalPriceList.reduce((perveiousPrice, currentPrice) => perveiousPrice + currentPrice)
      : 0
  }

  const getOrderSummary = (subtotal = 0, discount, deliveryCost = 0) => {
    const percentage = discount?.discountPercentage;
    const discountPrice = subtotal > discount?.minTotal ? (subtotal / percentage) : 0;
    const grantTotal = (subtotal - discountPrice + deliveryCost).toLocaleString();
    return {
      discountPrice,
      deliveryCost,
      grantTotal,
      subtotal
    }
  };

  const onRemoveProduct = (id) => {
    const updatedProducts = cartData.products.filter((product) => product.id !== id);
    const subtotal = getSubTotal(updatedProducts);
    const orderSummary = getOrderSummary(subtotal, cartData.discount, 0);

    setCartData((state) => ({
      ...state,
      products: updatedProducts,
      orderSummary
    }));
  };

  const onUpdateQuantity = (id, qty) => {
    let quantity = Number(qty);
    if (quantity || qty === '') {
      const updatedProductList = cartData.products.map((product) => {
        if (product.id === id) {
          product.quantity = quantity;
          product.total = product.price * quantity;
        }
        return product;
      });

      const subtotal = getSubTotal(updatedProductList);
      const orderSummary = getOrderSummary(subtotal, cartData.discount, 0);

      setCartData((state) => ({
        ...state,
        products: updatedProductList,
        orderSummary
      }));
    }
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

    const subtotal = getSubTotal(updatedProductList);
    const orderSummary = getOrderSummary(subtotal, cartData.discount, 0);

    setCartData((state) => ({
      ...state,
      products: updatedProductList,
      orderSummary
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

    const subtotal = getSubTotal(updatedProductList);
    const orderSummary = getOrderSummary(subtotal, cartData.discount, 0);

    setCartData((state) => ({
      ...state,
      products: updatedProductList,
      orderSummary
    }));
  }

  const onPincodeInputChange = (pincode) => {
    const availablePincodes = (cartData.pincode && Object.keys(cartData.pincode)) || [];
    const isValidPincode = availablePincodes.includes(pincode);
    let isCashOnDelivery;
    let estimatedDays;
    let freeDelivery;
    let deliveryCost = 0;
    if (isValidPincode) {
      deliveryCost = cartData.pincode[pincode].deliveryPrice;
      freeDelivery = deliveryCost === 0;
      isCashOnDelivery = cartData.pincode[pincode].cashOnDelivery;
      estimatedDays = cartData.pincode[pincode].estimatedDays;
    }

    const subtotal = getSubTotal(cartData.products);
    const orderSummary = getOrderSummary(subtotal, cartData.discount, deliveryCost);

    const deliveryInfo = {
      freeDelivery,
      isValidPincode,
      isCashOnDelivery,
      estimatedDays
    }
    setCartData((state) => ({
      ...state,
      deliveryPin: pincode,
      deliveryInfo,
      orderSummary
    }));
  }

  useEffect(() => {
    let products = data.products;
    const updatedProducts = products.map((product) =>
    ({
      ...product,
      quantity: 1,
      total: product.price
    }))

    const subtotal = getSubTotal(updatedProducts);
    const orderSummary = getOrderSummary(subtotal, data.discount, 0);
    const isShowNotifcation = ('discount' in data);
    setCartData({
      ...data,
      products: updatedProducts,
      orderSummary,
      deliveryPin: "",
      isShowNotifcation,
      deliveryInfo: {
        freeDelivery: false,
        isValidPincode: false,
        isCashOnDelivery: false,
        estimatedDays: {
          min: 0,
          max: 0
        }
      }
    });
  }, []);

  return (
    <StyledContainer>
      {cartData && cartData.isShowNotifcation ?
        <Notification>
          <span>
            Shop for ${cartData.discount.minTotal} or more and get {cartData.discount.discountPercentage}% discount on your order
          </span>
        </Notification>
        : null
      }
      <StyledShoppingCartTitle>Shopping cart</StyledShoppingCartTitle>
      <StyledShoppingCart>
        <StyledShoppingCartHeader>
          <StyledShoppingCartHeaderItem> Product </StyledShoppingCartHeaderItem>
          <StyledShoppingCartHeaderItem> Price </StyledShoppingCartHeaderItem>
          <StyledShoppingCartHeaderItem> Quantity </StyledShoppingCartHeaderItem>
          <StyledShoppingCartHeaderItem> Subtotal </StyledShoppingCartHeaderItem>
        </StyledShoppingCartHeader>
        <StyledShoppingCartBody>
          {cartData && cartData.products && cartData.products.length > 0 ?
            <>
              <ShoppingCartItem
                cartItmes={cartData.products}
                onRemoveProduct={onRemoveProduct}
                onUpdateQuantity={onUpdateQuantity}
                onQuantityIncrement={onQuantityIncrement}
                onQuantityDecrement={onQuantityDecrement} />
              <StyledShoppingCartBottom>
                <DeliveryAvailability
                  deliveryPin={cartData.deliveryPin}
                  deliveryInfo={cartData.deliveryInfo}
                  onPincodeInputChange={onPincodeInputChange} />
                <OrderSummary
                  orderSummary={cartData.orderSummary}
                  isCheckoutEnabled={cartData.products.length > 0 && cartData.deliveryInfo.isValidPincode} />
              </StyledShoppingCartBottom>
            </>
            :
            <StyledEmptyCart>Your cart is empty <a href="https://www.w3.org/Provider/Style/dummy.html">continue shopping</a></StyledEmptyCart>
          }
        </StyledShoppingCartBody>
      </StyledShoppingCart>
    </StyledContainer>
  )
}

export default ShoppingCart;