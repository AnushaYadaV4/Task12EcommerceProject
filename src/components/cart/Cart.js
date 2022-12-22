import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { Row, Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Cart = (props) => {
  const cartCtnx = useContext(CartContext);
  const totalAmount = `$${cartCtnx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      
      
      {cartCtnx.items.map((item) => (
        <CartItem
          key={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
