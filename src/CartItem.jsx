import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice'; // Adjust path if necessary

const CartItem = ({ cart, onContinueShopping }) => {
  const dispatch = useDispatch();

  // Calculate total amount of all items in cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      const costNumber = parseFloat(item.cost.substring(1)); // "$10.00" => 10.00
      total += costNumber * item.quantity;
    });
    return total.toFixed(2); // two decimals as string
  };

  // Calculate subtotal for a single item
  const calculateTotalCost = (item) => {
    const costNumber = parseFloat(item.cost.substring(1));
    return (costNumber * item.quantity).toFixed(2);
  };

  // Continue shopping: calls parent callback
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // Increment quantity of a specific item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement quantity or remove item if quantity drops to 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  // Remove item completely from cart
  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  // Placeholder for checkout alert
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.name} className="cart-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Price: {item.cost}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${calculateTotalCost(item)}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p><strong>Total: ${calculateTotalAmount()}</strong></p>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <button onClick={handleCheckoutShopping}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
