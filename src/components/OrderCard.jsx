import { useContext } from 'react';
import './OrderCard.css';
import { DishList } from '../store/store';

const OrderCard = ({ dish }) => {
  const { addToCart } = useContext(DishList);

  return (
    <div className="order-item">
      <div className="item-name">{dish.name}</div>
      <div className="item-detail">{dish.content}</div>
      <div className="item-price">{dish.price}</div>
      <button onClick={() => addToCart(dish)}>Add to Cart</button>
    </div>
  );
}

export default OrderCard;