import { useEffect, useState } from "react";
import axios from "axios";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const { data } = await axios.get("/api/wallet");
        setBalance(data.balance);
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Error fetching wallet data", error);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wallet Balance</h2>
      <div className="text-3xl font-bold text-green-600 mb-4">₹{balance}</div>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Transactions</h3>
      <ul className="list-disc pl-5">
        {transactions.length > 0 ? (
          transactions.map((tx) => (
            <li key={tx._id} className="text-gray-700">
              {new Date(tx.date).toLocaleDateString()} - ₹{tx.amount} - {tx.status}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No recent transactions.</p>
        )}
      </ul>
    </div>
  );
};

export default Wallet;
