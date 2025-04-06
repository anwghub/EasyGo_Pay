// PasswordRecovery.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleRecovery = async () => {
    try {
      // Send recovery request to the backend
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Password recovery email sent. Please check your inbox.");
      } else {
        setMessage(result.msg || "An error occurred.");
      }
    } catch (error) {
      console.error("Error during password recovery:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="w-full flex justify-center items-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Recover Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 my-2 bg-gray-800 rounded text-white focus:outline-none"
          />
          {message && <p className="text-center my-2">{message}</p>}
          <button
            onClick={handleRecovery}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded mt-4"
          >
            Send Recovery Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
