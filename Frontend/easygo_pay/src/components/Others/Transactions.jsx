import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar"; // Make sure the path is correct

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const walletId = "MY_WALLET_ID";
        const { data } = await axios.get(`http://localhost:5000/api/transactions//wallet/:walletId`);
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Error fetching transactions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-58 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-800 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transaction History</h2>
          
          {loading ? (
            <p className="text-center">Loading transactions...</p>
          ) : transactions.length > 0 ? (
            <div className="overflow-x-auto">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-4 text-left">Date</th>
                      <th className="border p-4 text-left">Amount</th>
                      <th className="border p-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr key={tx._id} className="text-center">
                        <td className="border p-4">{new Date(tx.createdAt).toLocaleDateString()}</td>
                        <td className="border p-4 text-green-600">₹{tx.amount}</td>
                        <td className={`border p-4 ${tx.status === "Completed" ? "text-green-600" : "text-red-600"}`}>
                          {tx.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-center py-4">No transactions found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
