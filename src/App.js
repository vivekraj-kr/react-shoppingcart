import Header from './components/Header';
import OrderStatus from './components/OrderStatus';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    background-color: #F5F5F5;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px) {
      background-color: #fff;
    }
  }

  svg, img {
    max-width: 100%;
  }

  p {
    margin: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <OrderStatus />
      <ShoppingCart />
      <Footer/>
    </div>
  );
}

export default App;
