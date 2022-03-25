
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductCard from './ProductCard/ProductCard';

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
        
          {
            products.map(product => <ProductCard products ={product} key = {product.id} />)
              }
            </div>
          
            <div className="cart-container">
            
            </div>
      </div>
    </div>
  );
}

export default App;
