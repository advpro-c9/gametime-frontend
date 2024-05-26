const Cart = ({ cartItems, onCheckout }) => {
    return (
      <div className="border p-4 rounded mt-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="border p-2 my-2 rounded">
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
        {cartItems.length > 0 && (
          <button onClick={onCheckout} className="bg-blue-500 text-white p-2 rounded mt-4">
            Checkout
          </button>
        )}
      </div>
    );
  };
  
  export default Cart;