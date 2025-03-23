import { useState } from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-2xl font-bold">Sign In to <span className="text-blue-400">EasyGoPay</span></h1>
        <p className="mt-4 text-gray-400 text-lg">If you don’t have an account, you can <Link to="/register" className="text-blue-500 underline">Register here!</Link></p>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 my-2 bg-gray-800 rounded text-white focus:outline-none text-sm"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 my-2 bg-gray-800 rounded text-white focus:outline-none text-sm"
          />
          <a href="#" className="text-blue-400 text-sm float-right">Recover Password?</a>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded mt-4 text-xl">Sign In</button>
          <p className="text-center my-3 text-lg">Or continue with</p>
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

export default Login;
