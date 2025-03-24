"use client"

import { LayoutDashboard, ArrowRightLeft, Download, Upload, CreditCard, Settings, LogOut } from "lucide-react"
import { useUser } from "./context/UserContext"

export default function Sidebar({ open, setOpen }) {
  const { user } = useUser()

  return (
    <div
      className={`${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed md:relative z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-[#1a1d27] border-r border-gray-700 overflow-y-auto`}
    >
      <div className="flex items-center justify-start h-16 px-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-blue-500">OnePay</span>
        </div>
      </div>
      <nav className="mt-5 px-2 space-y-1">
        <NavItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
        <NavItem icon={<ArrowRightLeft size={20} />} text="Transactions" />
        <NavItem icon={<Download size={20} />} text="Deposit" />
        <NavItem icon={<Upload size={20} />} text="Transfer" />

        <div className="py-1">
          <div className="flex items-center px-3 py-2 text-sm">
            <span className="text-gray-400">Payment</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="pl-10 space-y-1">
            <NavItem text="Make a Payment" small />
            <NavItem text="Request a Payment" small />
          </div>
        </div>

        <NavItem icon={<CreditCard size={20} />} text="Withdraw" />
        <NavItem icon={<Settings size={20} />} text="Settings" />
        <NavItem icon={<LogOut size={20} />} text="Log out" />
      </nav>
    </div>
  )
}

function NavItem({ icon, text, active = false, small = false }) {
  return (
    <a
      href="#"
      className={`${active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
      ${small ? "text-xs" : "text-sm"} 
      group flex items-center px-3 py-2 rounded-md font-medium`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {text}
    </a>
  )
}
