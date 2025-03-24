import { useState } from "react";
import Header from "./Header.jsx";
import BalanceCard from "./BalanceCard.jsx";
import QuickTransfer from "./QuickTransfer.jsx";
import DepositSection from "./DepositSection.jsx";
import TransactionsTable from "./TransactionsTable.jsx";
import PaymentAnalytics from "./PaymentAnalytics.jsx";
import PaymentCTA from "./PaymentCTA.jsx";
import UpcomingPayments from "./UpcomingPayments.jsx";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Balance");
  console.log("Active Tab:", activeTab);
  
  return (
    <div className="h-full">
      <Header />

      <div className="px-4 py-6 md:px-6 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Balance Section */}
            <div className="bg-[#232631] rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-700">
                <TabButton text="Balance" active={activeTab === "Balance"} onClick={() => setActiveTab("Balance")} />
                <TabButton text="Withdraw" active={activeTab === "Withdraw"} onClick={() => setActiveTab("Withdraw")} />
              </div>

              <div className="p-6">
                <BalanceCard balance="$5,382.36" currency="USD" walletId="24579485" />
              </div>
            </div>

            {/* Quick Transfer */}
            <QuickTransfer />

            {/* Recent Transactions */}
            <TransactionsTable title="Recent Transactions" viewAllLink="#" />

            {/* Upcoming Payments */}
            <UpcomingPayments />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <DepositSection />
            <PaymentAnalytics />
            <PaymentCTA />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 font-medium text-sm focus:outline-none ${
        active ? "text-white border-b-2 border-blue-500" : "text-blue-500 hover:bg-gray-800"
      }`}
    >
      {text}
    </button>
  );
}
