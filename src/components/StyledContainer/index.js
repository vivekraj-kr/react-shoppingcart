import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 87%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export default StyledContainer;