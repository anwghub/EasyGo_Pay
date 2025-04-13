import { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar"; // adjust the path if needed

const Payments = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/api/payments/pay", { amount });
  
      if (!data.success) throw new Error("Order creation failed");
  
      const options = {
        key: "rzp_test_gBU7a2ZumfxQhS",
        amount: data.order.amount,
        currency: data.order.currency,
        name: "EasyGo_Pay",
        description: "Payment for your transaction",
        order_id: data.order.id,
        handler: async function (response) {
          await axios.post("http://localhost:5000/api/payments/verify", { ...response });
          alert("Payment Successful!");
        },
        theme: {
          color: "#3399cc"
        }
      };
  
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed! " + error.message);
      
    }
    setLoading(false);
  };
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-58 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 bg-gray-800 overflow-y-auto">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800">EasyGo_Pay</h1>
          </div>
          <p className="text-gray-600 mb-4">Make your payments securely and easily.</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Make a Payment</h2>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
