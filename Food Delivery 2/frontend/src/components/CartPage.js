
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, useDispatchCart } from './ContextReducer';
import Navbar from '../components/Navbar';
import '../App.css'; 

function CartPage() {
  const cart = useCart();
  const dispatch = useDispatchCart();

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const calculateTotalPrice = (item) => {
    if(item.Price[0].half){
      return item.Price[0].half
    }
    else{
      return  item.Price[0].full
    }
    // const price = item.price === 'half' ? item.Price[0].half : item.Price[0].full;
    // console.log("price", price);
    // return  price;
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Category: {item.CategoryName}</p>
              <p>Price: {item.price === 'half' ? 'Half' : 'Full'}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: Rs.{calculateTotalPrice(item)  }</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/order" className="order-now-button">
        Order Now
      </Link>
    </div>
  );
}

export default CartPage;
