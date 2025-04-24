'use client';

import React from 'react';
import NFTCard from 'src/cards/NFTCard';
import Sidebar from './Sidebar';

export default function MarketplaceNFTs() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold color-heading">NFTs</h2>
        </div>
        <div className="grid grid-cols-3 gap-10 py-10">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
      </div>
    </div>
  );
}
