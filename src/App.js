
import { Fragment, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer-Component/Footer';
import Header from './Components/Layout/Header-Component/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Components/Store/CartProvider';
import UserFinderMain from './Examples/ClassComponentExample/UserFinderMain';

import ExpenseTracker from './Examples/ExpenseTracker/ExpenseTracker';
import StyleExample from './Examples/StylesExample/StyleExample';
import UserMain from './Examples/UserApp/UserMain/UserMain';



function App() {
  const [cartShow, setCartShow] = useState(false)
  //<ExpenseTracker></ExpenseTracker>
  //  <StyleExample></StyleExample>
  // <UserMain></UserMain>
  /*let renderElement = []
  for (let i = 0; i <= 100; i++) {
    let localElement = (<h2 key ={i}> number : {i}</h2>)
    renderElement.push(localElement)
  }*/
  const closeCartModal = () => {
    setCartShow(false)
  }


  const showCartModal = () => {
    setCartShow(true)
  }
  const showCartElement = cartShow ? (<Cart onCloseButton={closeCartModal}></Cart>) : ""
  return (
    <CartProvider>
      {showCartElement}
      <Header onCartButtonClickHandler={showCartModal}></Header>
      <main>
        <Meals></Meals>
        <UserFinderMain></UserFinderMain>
      </main>

      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
