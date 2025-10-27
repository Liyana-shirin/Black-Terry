import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Profile() {
  const [showAddressBox, setShowAddressBox] = useState(false);
  const [address, setAddress] = useState("");

  const handleAddClick = () => {
    setShowAddressBox(true);
  };

  return (
    <div className="w-auto m-30">
      <h1 className="text-2xl font-semibold mb-3">Profile</h1>

      {/* Profile Info */}
      <div className="bg-gray-100 border-0 shadow-sm rounded-lg w-full">
        <div className="flex flex-col p-9">
          <div className="flex gap-3 items-center text-xl font-semibold">
            <h2>Name</h2>
            <Link to="/settings">
              <CiEdit className="w-4 h-4 mt-1 font-bold cursor-pointer" />
            </Link>
          </div>
          <p className="text-gray-400">Email</p>
          <p>bill.sanders@example.com</p>
        </div>
      </div>

      {/* Address */}
      <div className="bg-gray-100 border-0 shadow-sm rounded-lg w-full mt-5">
        <div className="flex flex-col p-7">
          <div className="flex gap-3 items-center text-xl font-semibold">
            <h2>Address</h2>
            <button
              onClick={handleAddClick}
              className=" text-lg font-semibold py-2 px-4 rounded-lg transition"
            >
               + Add 
            </button>
          </div>

          {showAddressBox && (
            <div className="mt-4">
              <textarea
                rows="3"
                placeholder="No adress added"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-400 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
          )}

          {/* Show auto-saved address below */}
          {!showAddressBox && address && (
            <p className="text-gray-700 border-t pt-3 mt-4">
              Address: {address}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
