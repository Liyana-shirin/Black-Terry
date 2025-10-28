import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

function Profile() {
  const [showAddressBox, setShowAddressBox] = useState(false);
  const [address, setAddress] = useState("");

  const handleAddClick = () => {
    setShowAddressBox(!showAddressBox);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Profile</h1>

      {/* Profile Info */}
      <div className="bg-gray-100 border border-gray-200 shadow-sm rounded-lg w-full mb-6">
        <div className="flex flex-col sm:flex-row justify-between p-6 sm:p-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              Name
              <Link to="/settings">
                <CiEdit className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              </Link>
            </h2>
            <p className="text-gray-500 mt-1 text-sm">bill.sanders@example.com</p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-gray-100 border border-gray-200 shadow-sm rounded-lg w-full">
        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 sm:mb-0">
              Address
            </h2>
            <button
              onClick={handleAddClick}
              className="text-sm sm:text-base bg-gray-800 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              {showAddressBox ? "Close" : "+ Add"}
            </button>
          </div>

          {/* Textarea to add/edit address */}
          {showAddressBox && (
            <div className="mt-4">
              <textarea
                rows="3"
                placeholder="Enter your address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-400 rounded-lg p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                onClick={() => setShowAddressBox(false)}
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition"
              >
                Save Address
              </button>
            </div>
          )}

          {/* Display saved address */}
          {!showAddressBox && address && (
            <p className="text-gray-700 border-t pt-3 mt-4 text-sm sm:text-base">
              <span className="font-medium">Address:</span> {address}
            </p>
          )}

          {/* When no address is added */}
          {!address && !showAddressBox && (
            <p className="text-gray-500 mt-3 text-sm">No address added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
