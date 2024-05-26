import { useState } from 'react';

const RatingAndReview = ({ game }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingSubmit = () => {
    // Simpan rating dan ulasan ke backend (tidak diimplementasikan di sini)
    alert(`Rating: ${rating}, Review: ${review}`);
  };

  return (
    <div className="border p-4 rounded mt-4">
      <h2 className="text-xl font-bold">Rate and Review: {game.name}</h2>
      <div>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Review:
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>
      </div>
      <button onClick={handleRatingSubmit} className="bg-blue-500 text-white p-2 rounded mt-2">
        Submit
      </button>
    </div>
  );
};

export default RatingAndReview;