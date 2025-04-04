import { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchTransactions = async () => {
        try {
          const { data } = await axios.get("http://localhost:5000/api/transactions");
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
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transaction History</h2>
        {loading ? (
          <p className="text-center">Loading transactions...</p>
        ) : transactions.length > 0 ? (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Date</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx._id} className="text-center">
                  <td className="border p-2">{new Date(tx.date).toLocaleDateString()}</td>
                  <td className="border p-2 text-green-600">₹{tx.amount}</td>
                  <td className={`border p-2 ${tx.status === "Completed" ? "text-green-600" : "text-red-600"}`}>
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-4">No transactions found.</p>
        )}
      </div>
    );
  };
  