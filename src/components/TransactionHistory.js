const TransactionHistory = ({ transactions }) => {
    return (
      <div className="border p-4 rounded mt-4">
        <h2 className="text-xl font-bold">Transaction History</h2>
        {transactions.length > 0 ? (
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index} className="border p-2 my-2 rounded">
                {transaction.date}: {transaction.gameName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions found</p>
        )}
      </div>
    );
  };
  
  export default TransactionHistory;