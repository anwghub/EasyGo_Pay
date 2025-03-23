import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import './App.css';
import Dashboard from './components/Home/Dashboard.jsx';

function App() {
  return (
    // <BrowserRouter>  {/* Corrected from <Router> to <BrowserRouter> */}
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     {/* <Route path="*" element={<Login />} /> Fallback to Login if no match */}
    //   </Routes>
    // </BrowserRouter>
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      <Dashboard />
    </div>  );
}

export default App;

