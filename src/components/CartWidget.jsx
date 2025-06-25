'use client'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function CartWidget() {
  return (
    <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
    >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <div className="relative">
        <ShoppingCartIcon className="h-8 w-8 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            3
            </span>
        </div>
    </button>
  );
}
export default CartWidget;