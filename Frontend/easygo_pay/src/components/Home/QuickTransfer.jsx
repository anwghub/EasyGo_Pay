"use client"

import { Plus } from "lucide-react"
import { useUser } from "./context/UserContext"

export default function QuickTransfer() {
  const { contacts } = useUser()

  return (
    <div className="bg-[#232631] rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Quick Transfer</h2>

      <div className="flex space-x-6 overflow-x-auto pb-2">
        <div className="flex flex-col items-center space-y-2 min-w-[80px]">
          <button className="h-16 w-16 rounded-full bg-[#2d3039] flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
            <Plus size={24} />
          </button>
          <div className="text-center">
            <p className="text-sm font-medium">Transfer</p>
            <p className="text-xs text-gray-400">Manual</p>
          </div>
        </div>

        {contacts.map((contact) => (
          <div key={contact.id} className="flex flex-col items-center space-y-2 min-w-[80px]">
            <img
              src={contact.avatar || "/placeholder.svg"}
              alt={contact.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="text-sm font-medium">{contact.name}</p>
              <p className="text-xs text-gray-400">{contact.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

