import './ProductsDesign.css';
import ProductItemForm from './ProductItemForm';
import classes from './ProductItems.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';


const ProductItems = (props) => {
  const cartCtx=useContext(CartContext);
  const price = `RS.${props.price.toFixed(2)}`;

  const addToCartHandler=amount=>{
    cartCtx.addItem({
      id:props.id,
      imageUrl:props.imageUrl,
      title:props.title,
      amount:amount,
      price:props.price
    });

  }

  return (
    <li className={classes.meal}>
      <div>
       

        <div className='products'>
        <img src={props.imageUrl}/>

        </div>
        <div className={classes.description}>{props.title}</div>
        <div className={classes.price}>{price} 
        </div>
        <div>
        </div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default ProductItems;