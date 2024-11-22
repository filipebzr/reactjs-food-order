import { useState } from 'react';


import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);
  function showCartHandle(){
    setCartIsShow(true);
  }
  function hideCartHandle(){
    setCartIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Cart/>
      <Header onShowCart={showCartHandle}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
