import { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar"; // Adjust the path if needed
import { error } from "console";

const Payments = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Step 1: Make a request to the backend to create an order
      const { data } = await axios.post("http://localhost:5000/api/payments/pay", { amount });

      if (data.success) {
        // Step 2: Prepare the Razorpay options
        const options = {
          key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key
          amount: data.order.amount, // Ensure amount is in the smallest currency unit (paise)
          currency: "INR", // Use INR or adjust as needed
          name: "EasyGo_Pay",
          description: "Payment for your transaction",
          order_id: data.order.id, // Order ID returned from backend
          handler: async function (response) {
            // Step 3: Handle the Razorpay response and send to the backend for verification
            try {
              const verificationResponse = await axios.post("http://localhost:5000/api/payments/verify", {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              });

              if (verificationResponse.data.success) {
                alert("Payment Successful!");
              } else {
                console.error("Payment Verification Failed:", verificationResponse.data.message);
                alert(`Payment Verification Failed: ${verificationResponse.data.message}`);
                console.log(error.response.data.message); 
              }
            } catch (verificationError) {
              console.error("Error during payment verification:", verificationError);
              alert("Payment verification failed. Please try again.");
            }
          },
          theme: {
            color: "#3498db", // Customize the color of the Razorpay popup
          },
        };

        // Step 4: Initialize Razorpay and open the payment popup
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        console.error("Payment creation failed:", data.message);
        alert("Payment creation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment creation:", error);
      alert("Payment failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-58 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
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
