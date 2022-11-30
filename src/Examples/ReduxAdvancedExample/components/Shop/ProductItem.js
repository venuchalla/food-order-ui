import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { CartActions } from '../Store/Cart-Slice';
const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const addCartClickHandler =(event)=>{
dispatch( CartActions.addItemsToCartHandler({title:title,price:price}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
