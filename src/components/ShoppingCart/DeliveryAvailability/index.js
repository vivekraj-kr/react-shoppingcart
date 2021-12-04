import React from 'react'
import styled from 'styled-components';

const StyledDeliveryAvailabilityWrap = styled.div`
  flex-basis: 420px;
  color: #666;
`;

const StyledTitle = styled.h4`
  color: #333;
  font-size: 20px;
  font-weight: 400;
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledInputIco = styled.span`
  display: block;
  position: absolute;
  left: 0;
  top: 8px;
`;

const StyledInput = styled.input`
  font-size: 16px;
  outline: none;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0 10px 30px;
  border: none;
  border-bottom: solid 1px #999;
  color: #666;
`;

const StyledValidatePincode = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const StyledAvailabiltyLabel = styled.label`
  display: flex;
  gap: 5px;

  i {
    display: block;
    width: 30px;
    flex-shrink: 0;
  }
`;

const StyledValidationMsg = styled.label`
  font-size: 12px;
`;

const StyledWarningMsg = styled(StyledValidationMsg)`
  color: #ff5722;
`;

const DeliveryAvailability = ({ deliveryPin, deliveryInfo, onPincodeInputChange }) => {
  return (
    <StyledDeliveryAvailabilityWrap>
      <StyledTitle> Delivery availability</StyledTitle>
      <StyledInputWrapper>
        <StyledInputIco>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#666">
            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        </StyledInputIco>
        <StyledInput type="text" value={deliveryPin} onChange={(e) => onPincodeInputChange(e.target.value)} />
      </StyledInputWrapper>
      {deliveryPin ?
        deliveryInfo.isValidPincode ?
          <StyledValidatePincode>
            <StyledAvailabiltyLabel>
              <i>
                {deliveryInfo.freeDelivery ?
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#131F97">
                    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ddd">
                    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                }
              </i>
              <span>Free delivery </span>
            </StyledAvailabiltyLabel>
            <StyledAvailabiltyLabel>
              <i>
                {deliveryInfo.isCashOnDelivery ?
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#131F97">
                    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ddd">
                    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                }
              </i>
              <span> Cash on delivery</span>
            </StyledAvailabiltyLabel>
            <StyledAvailabiltyLabel>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#131F97">
                  <path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
              </i>
              <span> Estimated delivery time is {deliveryInfo.estimatedDays.min} - {deliveryInfo.estimatedDays.max} days</span>
            </StyledAvailabiltyLabel>
          </StyledValidatePincode>
          : <StyledWarningMsg> Unfortunately we do not ship to your pincode </StyledWarningMsg>
        :
        <StyledValidationMsg> Please enter PIN code to check Delivery Availability (eg, 560067) </StyledValidationMsg>
      }
    </StyledDeliveryAvailabilityWrap>
  )
}

export default DeliveryAvailability;