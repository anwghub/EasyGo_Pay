"use client"

import { Bell } from "lucide-react"
import { useUser } from "./context/UserContext"

export default function Header() {
  const { user } = useUser()

  return (
    <header className="bg-[#232631] border-b border-gray-700 px-4 py-2">
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Language:</span>
            <div className="flex items-center space-x-1">
              <span className="text-sm">English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <Bell size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

