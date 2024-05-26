import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BuyButton from '../components/BuyButton';
import Cart from '../components/Cart';
import TransactionHistory from '../components/TransactionHistory';
import RatingAndReview from '../components/RatingAndReview';
import axios from 'axios';

const Home = () => {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handleSearch = async (query) => {
    if (!query) return;

    try {
      const response = await axios.get(`https://api.example.com/games?search=${query}`);
      setGames(response.data.results);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleBuy = (game) => {
    setCart([...cart, game]);
  };

  const handleCheckout = () => {
    const newTransactions = cart.map((game) => ({
      date: new Date().toLocaleString(),
      gameName: game.name,
    }));
    setTransactions([...transactions, ...newTransactions]);
    setCart([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Game Search Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        {games.length > 0 ? (
          <ul>
            {games.map((game) => (
              <li key={game.id} className="border p-2 my-2 rounded">
                {game.name}
                <BuyButton onBuy={() => handleBuy(game)} />
                <RatingAndReview game={game} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No games found</p>
        )}
      </div>
      <Cart cartItems={cart} onCheckout={handleCheckout} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default Home;