import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from './Sidebar'; // Adjust if needed

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTransactions: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get("/api/admin/stats");
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar (fixed width) */}
      <div className="w-58 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>
        <h3 className="text-lg font-semibold mb-4">Welcome, Admin!</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg">Total Users</h3>
            <p className="text-2xl font-semibold">{stats.totalUsers}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg">Total Transactions</h3>
            <p className="text-2xl font-semibold">{stats.totalTransactions}</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg">Total Revenue</h3>
            <p className="text-2xl font-semibold">₹{stats.revenue}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Admin Actions</h3>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
