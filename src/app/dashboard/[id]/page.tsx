import React from 'react';

function User() {
  return (
    <div className="flex-1 space-y-2 p-4 border-gray-200 border rounded-md">
      <div className="space-y-1">
        <p className="text-gray-400">House Number</p>
        <p className="font-bold">10</p>
      </div>
      <div className="space-y-1">
        <p className="text-gray-400">Street</p>
        <p className="font-bold">10</p>
      </div>
      <div className="space-y-1">
        <p className="text-gray-400">State</p>
        <p className="font-bold">10</p>
      </div>
      <div className="space-y-1">
        <p className="text-gray-400">L.G.A</p>
        <p className="font-bold">10</p>
      </div>
      <div className="space-y-1">
        <p className="text-gray-400">City</p>
        <p className="font-bold"></p>
      </div>
      <div className="space-y-1">
        <p className="text-gray-400">Landmark</p>
        <p className="font-bold">10</p>
      </div>
      <div className="space-y-1">
        <p className="text-gray-400">Type of Document</p>
        <p className="font-bold">10</p>
      </div>
    </div>
  );
}

export default User;
