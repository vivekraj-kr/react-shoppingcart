import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    background-color: #F5F5F5;
    font-family: 'Montserrat', sans-serif;
  }

  svg {
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
      <ShoppingCart />
      <Footer/>
    </div>
  );
}

export default App;
