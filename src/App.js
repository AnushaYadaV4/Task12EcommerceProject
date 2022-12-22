import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layouts/Header";
import AvailableProducts from "./components/products/AvailableProduct";
import CartProvider from "./components/store/CartProvider";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  async function addUserDataHandler(details) {
    const response = await fetch('https://react-ecommerce-4b392-default-rtdb.firebaseio.com/userData.json', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <BrowserRouter>
      <Header onShowCart={showCartHandler} />

        <Switch>

          <Route exact path="/about" component={About} />
          <Route exact path="/store" component={AvailableProducts}/>
          <Route exact path="/home" component={Home}/>
          <ContactUs onAddUserData={addUserDataHandler}/>



          
        </Switch>

      </BrowserRouter>


      
    </CartProvider>
  );
};

export default App;
