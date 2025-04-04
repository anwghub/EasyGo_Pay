import { Outlet } from "react-router-dom";
import Sidebar from "./Others/Sidebar.jsx"; // Import the Sidebar component
import React from "react";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet /> {/* This will render the current page */}
      </div>
    </div>
  );
};

export default Layout;
