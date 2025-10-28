import React from "react";
import shirt5 from "../Cart/Images/shirt5.png";

function Cart3() {
  return (
    <div className="flex justify-center items-center mt-10 mb-20 px-4">
      <img
        src={shirt5}
        alt="Sample"
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-contain rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Cart3;
