import { useState } from "react";
import {
  HomeIcon,
  ArrowsUpDownIcon,
  BanknotesIcon,
  ArrowRightIcon,
  CreditCardIcon,
  ArrowDownTrayIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function TransferPage() {
  const [activeTab, setActiveTab] = useState("bank");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 0, name: "Bank Details", status: "current" },
    { id: 1, name: "Personal Details", status: "upcoming" },
    { id: 2, name: "Amount", status: "upcoming" },
    { id: 3, name: "Review", status: "upcoming" },
    { id: 4, name: "Pay", status: "upcoming" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 p-4">
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 rounded-full p-1 mr-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
          </div>
          <span className="text-white font-bold text-lg">OnePay</span>
        </div>

        <nav className="space-y-1">
          <SidebarItem icon={<HomeIcon className="w-5 h-5" />} text="Dashboard" />
          <SidebarItem icon={<ArrowsUpDownIcon className="w-5 h-5" />} text="Transactions" />
          <SidebarItem icon={<BanknotesIcon className="w-5 h-5" />} text="Deposit" />
          <SidebarItem icon={<ArrowRightIcon className="w-5 h-5" />} text="Transfer" active={true} />
          <SidebarItem icon={<CreditCardIcon className="w-5 h-5" />} text="Payment">
            <div className="pl-9 mt-1 space-y-1">
              <SidebarSubItem text="Make a Payment" />
              <SidebarSubItem text="Request a Payment" />
            </div>
          </SidebarItem>
          <SidebarItem icon={<ArrowDownTrayIcon className="w-5 h-5" />} text="Withdraw" />
          <SidebarItem icon={<Cog6ToothIcon className="w-5 h-5" />} text="Settings" />
          <SidebarItem icon={<ArrowLeftOnRectangleIcon className="w-5 h-5" />} text="Log out" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">Transfer</h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="text-gray-400">Balance: </span>
              <span className="font-semibold">$5,382.36 USD</span>
            </div>
            <button className="p-1 rounded-full hover:bg-gray-800">
              <BellIcon className="w-5 h-5 text-gray-400" />
            </button>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-31%20162835-h4qSZHX6AoeQid4EVdOPzaae6deYl1.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-lg font-medium">Transfer</span>
            <span className="text-gray-500">›</span>
            <span className="text-gray-500">Bank Details</span>
          </div>

          {/* Steps */}
          <div className="mb-8">
            <nav aria-label="Progress">
              <ol className="flex items-center">
                {steps.map((step, index) => (
                  <li key={step.id} className="relative flex-1">
                    {index > 0 && (
                      <div className={`absolute inset-0 flex items-center`} aria-hidden="true">
                        <div className={`h-0.5 w-full ${index <= currentStep ? "bg-blue-500" : "bg-gray-700"}`}></div>
                      </div>
                    )}
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full 
                        ${
                          index < currentStep
                            ? "bg-blue-500"
                            : index === currentStep
                              ? "border-2 border-blue-500 bg-gray-900"
                              : "border-2 border-gray-700 bg-gray-900"
                        }`}
                    >
                      {index < currentStep ? (
                        <span className="text-white text-sm">✓</span>
                      ) : (
                        <span className={`text-sm ${index === currentStep ? "text-blue-500" : "text-gray-500"}`}>
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex justify-center">
                      <span className={`text-xs ${index === currentStep ? "text-blue-500" : "text-gray-500"}`}>
                        {step.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* Transfer Form */}
          <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6">
            {/* Tabs */}
            <div className="flex mb-6">
              <button
                className={`flex-1 py-3 text-center ${
                  activeTab === "wallet" ? "border-b-2 border-blue-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("wallet")}
              >
                <div className="flex justify-center items-center">
                  <CreditCardIcon className="w-5 h-5 mr-2" />
                  <span>Wallet to Wallet</span>
                </div>
              </button>
              <button
                className={`flex-1 py-3 text-center ${
                  activeTab === "bank" ? "border-b-2 border-blue-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("bank")}
              >
                <div className="flex justify-center items-center">
                  <BanknotesIcon className="w-5 h-5 mr-2" />
                  <span>Bank Transfer</span>
                </div>
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select bank name
                    </option>
                    <option value="chase">Chase Bank</option>
                    <option value="bofa">Bank of America</option>
                    <option value="wells">Wells Fargo</option>
                    <option value="citi">Citibank</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Routing No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: 12345678"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Account No:</label>
                <input
                  type="text"
                  placeholder="Bank AC No"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300"
                />
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition duration-200"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active = false, children }) {
  return (
    <div>
      <a
        href="#"
        className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
          active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`}
      >
        <span className="mr-3">{icon}</span>
        {text}
      </a>
      {children}
    </div>
  );
}

function SidebarSubItem({ text }) {
  return (
    <a href="#" className="flex items-center text-sm text-gray-400 hover:text-white py-1">
      {text}
    </a>
  );
}
