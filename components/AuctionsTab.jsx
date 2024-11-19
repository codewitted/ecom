import React from 'react';
import { Timer, ArrowUpCircle, Users } from 'lucide-react';

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

export default AuctionsTab;
