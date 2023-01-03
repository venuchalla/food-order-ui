import { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Header from "./Layout/Header-Component/Header";
import Meals from "./Meals/Meals";
const MealsMainApp = (props) => {
  const [cartShow, setCartShow] = useState(false);
  const closeCartModal = () => {
    setCartShow(false);
  };
  useEffect(() => {
    document.title = "Food Order Application";
  }, []);

  const showCartModal = () => {
    setCartShow(true);
  };

  const showCartElement = cartShow ? (
    <Cart onCloseButton={closeCartModal}></Cart>
  ) : (
    ""
  );

  return (
    <CartProvider>
      {showCartElement}
      <Header onCartButtonClickHandler={showCartModal}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
};
export default MealsMainApp;
