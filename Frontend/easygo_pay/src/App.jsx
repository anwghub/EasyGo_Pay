import {  Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Dashboard from './components/Home/Dashboard.jsx';
import Payments from './components/Others/Payments.jsx';
import Transactions from './components/Others/Transactions.jsx';
import Wallet from './components/Others/Wallet.jsx';
import SettingsScreen from './components/Others/Settings.jsx';
import AdminDashboard from './components/Others/AdminDashboard.jsx';
import Sidebar from './components/Others/Sidebar.jsx';
import PasswordRecovery from './components/Auth/ForgotPassword.jsx';

function App() {
  return (


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/sidebar' element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/forgot-password" element={<PasswordRecovery />} />
          <Route path="*" element={<Login />} />
      </Routes>

  );
}

export default App;

