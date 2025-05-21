
// CartTable.tsx
import React from 'react';
import { PlanItem } from 'p';

type CartTableProps = {
  cart: PlanItem[];
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  bundleApplied: { name: string; message: string; icon: JSX.Element } | null;
  bundleToast: string | null;
};

const calculateTotal = (cart: PlanItem[]): number =>
  cart.reduce((sum, item) => sum + item.price, 0);

const CartTable: React.FC<CartTableProps> = ({
  cart,
  removeFromCart,
  clearCart,
  bundleApplied,
  bundleToast,
}) => (
  <div className="w-full">
    {bundleApplied && (
      <div className="mb-2 text-accent-700 bg-accent-50 dark:bg-accent-900/20 px-3 py-2 rounded flex items-center">
        {bundleApplied.icon}
        <span className="ml-2">{bundleApplied.message}</span>
      </div>
    )}
    {bundleToast && (
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-accent-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
        {bundleToast}
      </div>
    )}
    <table className="table-auto w-full border bg-gray-50 dark:bg-gray-900 text-sm mb-2">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-800">
          <th className="px-2 py-2 border-b text-left">Item</th>
          <th className="px-2 py-2 border-b text-left">Type</th>
          <th className="px-2 py-2 border-b text-right">Price</th>
          <th className="px-2 py-2 border-b"></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.name} className="border-b last:border-b-0">
            <td className="px-2 py-2">{item.name}</td>
            <td className="px-2 py-2 capitalize">{item.type}</td>
            <td className="px-2 py-2 text-right font-mono text-xs">
              {item.price.toLocaleString()} <span className="ml-1">KES</span>
            </td>
            <td className="px-2 py-2 text-right">
              <button
                onClick={() => removeFromCart(item.name)}
                className="text-gray-400 hover:text-red-500"
                aria-label="Remove"
              >
                ×
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-gray-100 dark:bg-gray-800 font-semibold">
          <td colSpan={2}>Total</td>
          <td colSpan={2} className="text-right">
            KES {calculateTotal(cart).toLocaleString()}
          </td>
        </tr>
      </tfoot>
    </table>

    <button
      className="w-full mb-2 py-2 px-4 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded-lg transition"
      onClick={clearCart}
    >
      Clear Cart
    </button>
  </div>
);

export default CartTable;
