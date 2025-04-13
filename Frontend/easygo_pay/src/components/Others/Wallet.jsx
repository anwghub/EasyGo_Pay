import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/wallet");
        setBalance(data.balance);
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Error fetching wallet data", error);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div className="flex bg-gray-800 min-h-screen">
      <div className="w-56 bg-gray-800">
        <div className="flex items-center">
          <Sidebar />
        </div>        
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-3xl font-bold">Wallet</h1>
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">Balance:</span>
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
              ₹{balance}
            </div>
            <button className="ml-4 mr-4">
              <i className="ion-icon notifications-outline text-white text-xl" />
            </button>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-31%20162137-qqDt4UXwpW5X3qK9OyZwUXYjBIkjyi.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Wallet Transactions */}
        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-white text-2xl font-semibold mb-2">Recent Transactions</h2>
            <p className="text-gray-300 text-sm">Here are your latest wallet activities</p>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {transactions.length > 0 ? (
              transactions.map((tx) => (
                <li key={tx._id} className="text-gray-300">
                  {new Date(tx.date).toLocaleDateString()} - ₹{tx.amount} - <span className={tx.status === "Success" ? "text-green-400" : "text-red-400"}>{tx.status}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-400">No recent transactions.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wallet;