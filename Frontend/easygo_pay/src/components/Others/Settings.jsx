import { useState } from "react";

const SettingsScreen = () => {
  const [name, setName] = useState("**********");
  const [email, setEmail] = useState("a*********@gmail.com");
  const [language, setLanguage] = useState("English");
  const [accountStatus, setAccountStatus] = useState("Active");

  const renderSidebarItem = (icon, title, isActive = false) => (
    <button
      className={`flex items-center py-3 px-4 rounded-lg mb-1 ${isActive ? "bg-blue-100" : ""}`}
    >
      <i className={`ion-icon ${icon} text-lg ${isActive ? "text-blue-600" : "text-gray-500"}`} />
      <span className={`ml-3 text-sm ${isActive ? "text-blue-600 font-medium" : "text-gray-500"}`}>{title}</span>
    </button>
  );

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
    <div className="flex bg-black">
      {/* Sidebar */}
      <div className="w-48 bg-gray-900 p-4">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex justify-center items-center">
            <span className="text-white font-bold">E</span>
          </div>
          <span className="text-white font-bold text-lg ml-3">EasyGo_Pay</span>
        </div>

        <div className="flex flex-col">
          {renderSidebarItem("grid-outline", "Dashboard")}
          {renderSidebarItem("swap-vertical-outline", "Transactions")}
          {renderSidebarItem("download-outline", "Deposit")}
          {renderSidebarItem("arrow-forward-outline", "Transfer")}
          {renderSidebarItem("card-outline", "Payment")}
          {renderSidebarItem("cash-outline", "Withdraw")}
          {renderSidebarItem("settings-outline", "Settings", true)}
          {renderSidebarItem("log-out-outline", "Log out")}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-2xl font-bold">Settings</h1>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Balance:</span>
            <span className="text-white font-semibold mr-4">$5,382.36 USD</span>
            <button className="mr-4">
              <i className="ion-icon notifications-outline text-white text-lg" />
            </button>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-31%20162137-qqDt4UXwpW5X3qK9OyZwUXYjBIkjyi.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <div className="text-center mb-6">
            <h2 className="text-white text-2xl font-semibold mb-2">Account Settings</h2>
            <p className="text-gray-400 text-sm">Update anything you want here</p>
          </div>

          <div className="mb-6">
            <div className="flex flex-col space-y-6">
              {/* Profile Photo */}
              <div>
                <span className="text-gray-400 text-sm mb-2 block">Your photo</span>
                <div className="flex items-center mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-31%20162137-qqDt4UXwpW5X3qK9OyZwUXYjBIkjyi.png"
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex space-x-4 mb-2">
                      <button className="text-blue-500 text-sm">Upload new photo</button>
                      <button className="text-red-500 text-sm">Remove photo</button>
                    </div>
                    <span className="text-gray-500 text-xs">Photos help other people trust you</span>
                  </div>
                </div>
                <button className="bg-yellow-500 py-2 px-4 rounded-md text-white font-semibold">Edit</button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Email</label>
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
                  <label className="text-gray-400 text-sm mb-2 block">Language</label>
                  <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md flex justify-between items-center">
                    <span>{language}</span>
                    <i className="ion-icon chevron-down text-gray-400" />
                  </button>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Account Status</label>
                  <div className="w-full bg-gray-600 text-green-500 py-2 px-4 rounded-md">
                    <span>{accountStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Sections */}
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
