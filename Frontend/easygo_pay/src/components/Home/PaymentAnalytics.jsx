"use client"

import { useState } from "react"

export default function PaymentAnalytics() {
  const [selectedMonth, setSelectedMonth] = useState("March 2021")

  return (
    <div className="bg-[#232631] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Payment Analytics</h2>
        <button className="flex items-center space-x-2 text-sm bg-[#2d3039] px-3 py-1.5 rounded">
          <span>{selectedMonth}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center my-6">
        <div className="relative h-40 w-40">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            {/* Yellow segment - 40% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#FFD700"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="0"
              transform="rotate(-90 50 50)"
            />
            {/* Purple segment - 20% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#9370DB"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="150.72"
              transform="rotate(-90 50 50)"
            />
            {/* Pink segment - 15% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#FF69B4"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="188.4"
              transform="rotate(-90 50 50)"
            />
            {/* Blue segment - 15% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#1E90FF"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="226.08"
              transform="rotate(-90 50 50)"
            />
            {/* Green segment - 10% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#32CD32"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="251.2"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-orange-400"></span>
          <span>Payment: $514</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span>Receive: $2,124</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-pink-500"></span>
          <span>Send: $1,547</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-purple-500"></span>
          <span>Deposit: $1,250</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <span>Withdraw: $200</span>
        </div>
      </div>
    </div>
  )
}

