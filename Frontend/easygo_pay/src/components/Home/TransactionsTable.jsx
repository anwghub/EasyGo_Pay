"use client"
import { useUser } from "./context/UserContext"

export default function TransactionsTable({ title, viewAllLink }) {
  const { transactions } = useUser()

  return (
    <div className="bg-[#232631] rounded-lg overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-700">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href={viewAllLink} className="text-blue-500 text-sm hover:underline">
          View All
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-700">
              <th className="px-6 py-3 font-medium">Photos</th>
              <th className="px-6 py-3 font-medium">Name/Business</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="px-6 py-4">
                  <div className="h-10 w-10 rounded overflow-hidden bg-gray-700">
                    <img
                      src={transaction.image || "/placeholder.svg"}
                      alt={transaction.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-xs text-gray-400">ID: {transaction.id}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{transaction.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-sm ${
                      transaction.status === "Receive"
                        ? "text-green-500"
                        : transaction.status === "Payment"
                          ? "text-orange-500"
                          : transaction.status === "Pending"
                            ? "text-yellow-500"
                            : ""
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">${transaction.amount}</td>
                <td className="px-6 py-4">
                  <button className="px-4 py-1 text-sm bg-gray-700 rounded hover:bg-gray-600">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
