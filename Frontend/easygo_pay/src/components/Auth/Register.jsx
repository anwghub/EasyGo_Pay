import { useState } from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Clear previous errors
    setError(null);
    setLoading(true);

    const userData = { fullName, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        // Registration successful, navigate to login page
        navigate("/login");
      } else {
        // Handle backend validation errors
        setError(result.message || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold">Register for <span className="text-blue-400">EasyGoPay</span></h1>
        <p className="mt-4 text-gray-400">Already have an account? <Link to="/login" className="text-blue-500 underline">Sign in here!</Link></p>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
          <input 
            type="text" 
            placeholder="Fullname" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 my-2 bg-gray-800 rounded text-white focus:outline-none"
          />
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 my-2 bg-gray-800 rounded text-white focus:outline-none"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 my-2 bg-gray-800 rounded text-white focus:outline-none"
          />
          
          {/* Error Message */}
          {error && <p className="text-red-500 text-center my-2">{error}</p>}

          <button 
            type="button" 
            onClick={handleRegister} 
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded mt-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          
          <p className="text-center my-3">Or continue with</p>
          <div className="flex justify-center gap-4">
            <button className="p-3 bg-gray-800 rounded-full"><FaGoogle size={20} /></button>
            <button className="p-3 bg-gray-800 rounded-full"><FaApple size={20} /></button>
            <button className="p-3 bg-gray-800 rounded-full"><FaFacebook size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
