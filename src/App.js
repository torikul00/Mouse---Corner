
import React from 'react';
import './App.css';
import FAQ from './Components/FAQ/FAQ';
import Header from './Components/Header/Header';
import ProductContainer from './Components/ProductContainer/ProductContainer';

function App() {

  return (
    <div>
      <Header />
      <ProductContainer />
      <FAQ />
    </div>
  );
}

export default App;
