import { useState } from "react";
import axios from "axios";

const Payments = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/payments/initiate", { amount });

      const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: data.amount,
        currency: "INR",
        name: "WealthFolio",
        description: "Payment for your transaction",
        order_id: data.orderId,
        handler: async function (response) {
          await axios.post("/api/payments/verify", { ...response });
          alert("Payment Successful!");
        },
        prefill: {
          email: "user@example.com",
          contact: "9999999999",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed!");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Make a Payment</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Payments;
