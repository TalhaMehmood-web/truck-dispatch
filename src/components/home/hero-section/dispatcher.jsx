import React from "react";

const DispatchServices = () => {
  return (
    <div className="border-[3px] border-dashed border-white w-full max-w-md mx-auto p-6 bg-[url('/your-bg.jpg')] bg-cover bg-center">
      <h2 className="text-center text-white text-2xl font-bold mb-6">
        DISPATCH SEVICES
      </h2>

      {/* Dry Van / Reefer */}
      <div className="bg-[#ffeb3b] text-center py-1 font-bold text-black text-lg">
        Dry Van/Reefer
      </div>
      <p className="text-center text-white mt-3 text-lg font-medium">
        Strating From $300
      </p>
      <p className="text-center text-sm text-white">(Flat Rate Ships)</p>

      {/* Spacer */}
      <div className="my-6" />

      {/* Stepdeck, Flatbed */}
      <div className="bg-[#ffeb3b] text-center py-1 font-bold text-black text-lg">
        Stepdeck, Flatbed & Power only
      </div>
      <p className="text-center text-white mt-3 text-lg font-medium">
        Strating From $350
      </p>
      <p className="text-center text-sm text-white">(Flat Rate Ships)</p>
    </div>
  );
};

export default DispatchServices;
