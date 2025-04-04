import { Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Dashboard from './components/Home/Dashboard.jsx';
import Payments from './components/Others/Payments.jsx';
import Transactions from './components/Others/Transactions.jsx';  
import Wallet from './components/Others/Wallet.jsx';


function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Login />} /> Fallback to Login if no match
        <Route path="/payments" element={<Payments />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    
    );
}

export default App;

