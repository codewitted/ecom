import React, { useState } from 'react';
import { Heart, Home, Search, User, ShoppingCart, Timer, ArrowUpCircle, Users, Star, CreditCard, Phone } from 'lucide-react';

const EcommerceApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const TabContent = () => {
    switch(activeTab) {
      case 'auctions':
        return <AuctionsTab />;
      case 'cart':
        return <CartTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 h-[700px] rounded-3xl overflow-hidden shadow-xl relative">
      {/* Status Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center">
        <div className="text-sm">9:41</div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4">📶</div>
          <div className="w-4 h-4">🔋</div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="text-lg font-semibold">
          {activeTab === 'home' && 'Shop'}
          {activeTab === 'auctions' && 'Live Auctions'}
          {activeTab === 'cart' && 'Shopping Cart'}
        </div>
        <ShoppingCart className="w-6 h-6" />
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="bg-white rounded-lg flex items-center px-3 py-2 shadow-sm">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            className="ml-2 flex-1 outline-none text-sm"
            placeholder="Search products..."
            disabled
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="h-[520px] overflow-y-auto">
        <TabContent />
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full bg-white px-6 py-3 flex justify-between items-center">
        <div 
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-400'}`}
          onClick={() => setActiveTab('home')}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Shop</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'auctions' ? 'text-blue-600' : 'text-gray-400'}`}
          onClick={() => setActiveTab('auctions')}
        >
          <Timer className="w-6 h-6" />
          <span className="text-xs mt-1">Auctions</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${activeTab === 'cart' ? 'text-blue-600' : 'text-gray-400'}`}
          onClick={() => setActiveTab('cart')}
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs mt-1">Cart</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </div>
      </div>
    </div>
  );
};

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

const AuctionsTab = () => (
  <div className="px-4 space-y-4">
    {[
      {
        title: "Vintage Camera",
        currentBid: "520.00",
        buyNow: "899.99",
        timeLeft: "2h 15m",
        bids: 23,
        watchers: 45,
        image: "/api/placeholder/320/200"
      },
      {
        title: "Gaming Console",
        currentBid: "420.00",
        buyNow: "599.99",
        timeLeft: "4h 30m",
        bids: 15,
        watchers: 32,
        image: "/api/placeholder/320/200"
      }
    ].map((auction, index) => (
      <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
        <img
          src={auction.image}
          alt={auction.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{auction.title}</h3>
          
          <div className="flex justify-between mt-2">
            <div>
              <div className="text-sm text-gray-500">Current Bid</div>
              <div className="text-blue-600 font-bold">${auction.currentBid}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Buy Now</div>
              <div className="text-green-600 font-bold">${auction.buyNow}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Timer className="w-4 h-4 mr-1" />
              {auction.timeLeft}
            </div>
            <div className="flex items-center">
              <ArrowUpCircle className="w-4 h-4 mr-1" />
              {auction.bids} bids
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {auction.watchers}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

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

    {/* Payment Methods */}
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

    {/* Checkout Button */}
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

export default EcommerceApp;
