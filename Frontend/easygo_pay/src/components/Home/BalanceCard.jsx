import { Copy } from "lucide-react";

export default function BalanceCard({ balance, currency, walletId }) {
  return (
    <div>
      <h2 className="text-4xl font-bold">
        {balance} <span className="text-sm text-gray-400">{currency}</span>
      </h2>
      <div className="mt-2 flex items-center text-sm text-gray-400">
        <span>Wallet ID: {walletId}</span>
        <button className="ml-2 text-gray-400 hover:text-white">
          <Copy size={14} />
        </button>
      </div>
    </div>
  );
}