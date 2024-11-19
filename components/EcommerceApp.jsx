import React, { useState } from 'react';
import { Heart, Home, Search, User, ShoppingCart, Timer } from 'lucide-react';
import HomeTab from './HomeTab';
import AuctionsTab from './AuctionsTab';
import CartTab from './CartTab';

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

export default EcommerceApp;
