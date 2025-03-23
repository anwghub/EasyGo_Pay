import { Plus } from "lucide-react";

export default function DepositSection() {
  return (
    <div className="bg-[#232631] rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Deposit</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <button className="h-16 w-16 rounded-full bg-[#2d3039] flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
            <Plus size={24} />
          </button>
        </div>
        <p className="text-center text-sm font-medium">Add Card</p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-[#2d3039] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm">AC: ****6968</p>
                <p className="text-xs text-gray-400">EX: 5/9/28</p>
                <p className="text-xs text-gray-400">CVV: 695</p>
              </div>
              <img src="/placeholder.svg?height=30&width=40" alt="Mastercard" className="h-6" />
            </div>
          </div>

          <div className="bg-[#2d3039] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm">AC: ****2417</p>
                <p className="text-xs text-gray-400">EX: 3/7/22</p>
                <p className="text-xs text-gray-400">CVV: 147</p>
              </div>
              <img src="/placeholder.svg?height=30&width=40" alt="Visa" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
