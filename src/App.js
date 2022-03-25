
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  

  return (
    <div>
      <Header />
      <div className='main-container'>
            <div className="product-container">
              
            </div>
          
            <div className="cart-container">
            
            </div>
      </div>
    </div>
  );
}

export default App;
