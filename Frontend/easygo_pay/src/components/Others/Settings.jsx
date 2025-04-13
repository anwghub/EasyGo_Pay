import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const SettingsScreen = () => {
  const [name, setName] = useState("**********");
  const [email, setEmail] = useState("a*********@gmail.com");
  const [language, setLanguage] = useState("English");
  const [accountStatus, setAccountStatus] = useState("Active");

  const renderSettingsSection = (icon, title, expanded = false) => (
    <div className="mb-2">
      <button className="flex justify-between items-center py-3">
        <div className="flex items-center">
          <i className={`ion-icon ${icon} text-lg text-white`} />
          <span className="ml-3 text-white text-lg font-medium">{title}</span>
        </div>
        <i className={`ion-icon ${expanded ? "chevron-up" : "chevron-down"} text-gray-400`} />
      </button>
    </div>
  );

  return (
    <div className="flex bg-gray-800 min-h-screen">
      {/* Sidebar */}
      <div className="w-56 bg-gray-800">
        <div className="flex items-center">
          <Sidebar />
        </div>        
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-3xl font-bold">Settings</h1>
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">Balance:</span>
            <span className="text-white font-semibold mr-4">$5,382.36 USD</span>
            <button className="mr-4">
              <i className="ion-icon notifications-outline text-white text-xl" />
            </button>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-31%20162137-qqDt4UXwpW5X3qK9OyZwUXYjBIkjyi.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-white text-2xl font-semibold mb-2">Account Settings</h2>
            <p className="text-gray-300 text-sm">Update anything you want here</p>
          </div>

          <div className="mb-6">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-gray-300 text-sm mb-2 block">Your photo</span>
                <div className="flex items-center mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-31%20162137-qqDt4UXwpW5X3qK9OyZwUXYjBIkjyi.png"
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex space-x-4 mb-2">
                      <button className="text-blue-400 text-sm">Upload new photo</button>
                      <button className="text-red-400 text-sm">Remove photo</button>
                    </div>
                    <span className="text-gray-400 text-xs">Photos help other people trust you</span>
                  </div>
                </div>
                <button className="bg-yellow-500 py-2 px-4 rounded-md text-white font-semibold">Edit</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Language</label>
                  <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md flex justify-between items-center">
                    <span>{language}</span>
                    <i className="ion-icon chevron-down text-gray-400" />
                  </button>
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Account Status</label>
                  <div className="w-full bg-gray-600 text-green-400 py-2 px-4 rounded-md">
                    <span>{accountStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Settings */}
          {renderSettingsSection("mail-outline", "Marketing Preference")}
          {renderSettingsSection("notifications-outline", "Notifications")}
          {renderSettingsSection("shield-outline", "Security")}
          {renderSettingsSection("checkmark-circle-outline", "Verification")}
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;