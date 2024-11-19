import React from 'react';
import { Star } from 'lucide-react';

const HomeTab = () => (
  <div className="px-4 grid grid-cols-2 gap-4">
    {[
      {
        name: "Premium Headphones",
        price: "$199.99",
        image: "/api/placeholder/160/160",
        rating: 4.5
      },
      {
        name: "Smartwatch Pro",
        price: "$299.99",
        image: "/api/placeholder/160/160",
        rating: 4.8
      },
      {
        name: "Wireless Earbuds",
        price: "$159.99",
        image: "/api/placeholder/160/160",
        rating: 4.3
      },
      {
        name: "Fitness Tracker",
        price: "$99.99",
        image: "/api/placeholder/160/160",
        rating: 4.6
      }
    ].map((product, index) => (
      <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-3">
          <h3 className="font-medium text-sm">{product.name}</h3>
          <div className="text-blue-600 font-semibold mt-1">{product.price}</div>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default HomeTab;
