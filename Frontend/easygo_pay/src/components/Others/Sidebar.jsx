import { IonIcon } from "@ionic/react";
import {
  gridOutline,
  swapVerticalOutline,
  arrowForwardOutline,
  cardOutline,
  cashOutline,
  settingsOutline,
  logOutOutline,
} from "ionicons/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const sidebarItems = [
    { icon: gridOutline, label: "Dashboard", path: "/" },
    { icon: swapVerticalOutline, label: "Transactions", path: "/transactions" },
    { icon: arrowForwardOutline, label: "Transfer", path: "/transfer" },
    { icon: cardOutline, label: "Payment", path: "/payment" },
    { icon: cashOutline, label: "Withdraw", path: "/withdraw" },
    { icon: settingsOutline, label: "Settings", path: "/settings" },
    { icon: logOutOutline, label: "Log out", path: "/logout" },
  ];

  return (
    <div className="w-56 h-screen bg-gray-900 p-5 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center mb-10">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center">
          <span className="text-white font-bold text-lg">E</span>
        </div>
        <span className="text-white font-bold text-xl ml-3">EasyGo_Pay</span>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex flex-col space-y-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-lg text-white hover:bg-blue-600 transition ${
              activeItem === item.label ? "bg-blue-700" : ""
            }`}
            onClick={() => setActiveItem(item.label)}
          >
            <IonIcon icon={item.icon} className="text-lg mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
