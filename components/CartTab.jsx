import React from 'react';
import { CreditCard, Phone } from 'lucide-react';

const CartTab = () => (
  <div className="flex flex-col h-full">
    <div className="flex-1 px-4">
      {[
        {
          name: "Premium Headphones",
          price: "$199.99",
          quantity: 1,
          image: "/api/placeholder/80/80"
        },
        {
          name: "Smartwatch Pro",
          price: "$299.99",
          quantity: 1,
          image: "/api/placeholder/80/80"
        }
      ].map((item, index) => (
        <div key={index} className="flex items-center py-4 border-b border-gray-200">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="ml-4 flex-1">
            <h3 className="font-medium">{item.name}</h3>
            <div className="text-blue-600 font-semibold mt-1">{item.price}</div>
            <div className="flex items-center mt-2">
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">-</button>
              <span className="mx-3">{item.quantity}</span>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="px-4 py-3 bg-gray-50">
      <div className="text-sm font-medium mb-2">Payment Methods</div>
      <div className="flex space-x-2">
        <div className="flex items-center px-3 py-2 bg-white rounded-lg border border-gray-200">
          <CreditCard className="w-4 h-4 text-gray-500" />
          <span className="text-sm ml-2">Card</span>
        </div>
        <div className="flex items-center px-3 py-2 bg-white rounded-lg border border-gray-200">
          <Phone className="w-4 h-4 text-gray-500" />
          <span className="text-sm ml-2">Mobile Money</span>
        </div>
        <div className="flex items-center px-3 py-2 bg-white rounded-lg border border-gray-200">
          <img src="/api/placeholder/16/16" alt="PayPal" className="w-4 h-4" />
          <span className="text-sm ml-2">PayPal</span>
        </div>
      </div>
    </div>

    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex justify-between mb-4">
        <span className="font-medium">Total</span>
        <span className="font-bold">$499.98</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
        Checkout
      </button>
    </div>
  </div>
);

export default CartTab;
