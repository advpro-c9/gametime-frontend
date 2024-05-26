const BuyButton = ({ onBuy }) => {
    return (
      <button onClick={onBuy} className="bg-green-500 text-white p-2 rounded ml-2">
        Buy
      </button>
    );
  };
  
  export default BuyButton;
  