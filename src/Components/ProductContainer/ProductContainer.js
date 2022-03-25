
import { useEffect, useState } from 'react';
import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard';
import Cart from '../Cart/Cart';


function ProductContainer() {
  const [products, setProducts] = useState([])
  // fetching data 
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  // hadnle add to cart 
  const [ cart, setCart ] = useState([])
  const handleCart = (products) => {
    document.getElementById('rndm-btn').style.display = 'inline'
    document.getElementById('rst-btn').style.display = 'inline'
    document.getElementById('emty-msg').style.display = 'none'

    let newCart = []
    let isexist = cart.find(product => product.id === products.id)
    if (cart.length > 3) {

      alert('You Can\'t Select More Than 4 Items !')
      return
    }
   else if (isexist) {
      alert('This Product Already Selected !')
      return
    }
    else {
      newCart = [...cart, products]
      setCart(newCart)
   }
  }
  // handle Random Product
  const handleRandom = () => {
      let randomCart = []
      let randomIndex = Math.round(Math.random() * cart.length);
         if (randomIndex < cart.length) {
            let randomProduct = cart[randomIndex]
            if (randomProduct) {
              randomCart.push(randomProduct)
              setCart(randomCart)
           }
            
    }
         else {
           handleRandom()
    }
  }
  // resetHadnler 
  const handleReset = () => {
    document.getElementById('emty-msg').style.display = 'block'
    document.getElementById('rndm-btn').style.display = 'none'
    document.getElementById('rst-btn').style.display = 'none'
    setCart([])
  }

  return (
    <div>
      <div className='main-container'>
        <div className="product-container">
          {
            products.map(product => <ProductCard
              products={product}
              key={product.id}
              handleCart = {handleCart}   />)       
           
          }
            </div>       
              <div className="cart-container">
           <h2 className='cart-title'>CART SUMMARY</h2> <hr />
           <h3 id='emty-msg' className='emty-msg'>CART IS EMTY</h3>
          
                 {
                  cart.map(cartProduct => <Cart cartProduct={cartProduct} key={ cartProduct.id}/>)
          }
          
                      <button id='rndm-btn' className='random-button' onClick={handleRandom}>CHOOSE ONE </button>
                      <button id='rst-btn'  className='reset-button' onClick={handleReset}>CHOOSE AGAIN</button>
               </div>   
      </div>
    </div>
  );
}

export default ProductContainer;
