"use client";

import { useUser } from "./context/UserContext";

export default function UpcomingPayments() {
  const { upcomingPayments } = useUser();

  return (
    <div className="bg-[#232631] rounded-lg overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-700">
        <h2 className="text-xl font-bold">Upcoming Payments</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          View All
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-700">
              <th className="px-6 py-3 font-medium">Photos</th>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {upcomingPayments.map((payment) => (
              <tr key={payment.id} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="px-6 py-4">
                  <div className="h-10 w-10 rounded overflow-hidden bg-gray-700">
                    <img
                      src={payment.image || "/placeholder.svg"}
                      alt={payment.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{payment.name}</p>
                    <p className="text-xs text-gray-400">{payment.description}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{payment.date}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm ${payment.status === "Pending" ? "text-yellow-500" : ""}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">${payment.amount}</td>
                <td className="px-6 py-4">
                  <button className="px-4 py-1 text-sm bg-gray-700 rounded hover:bg-gray-600">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
