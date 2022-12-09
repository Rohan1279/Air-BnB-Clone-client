import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-7xl font-thin">L</p>
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin duration-1000  mt-5 border-rose-400 "></div>
      <p className="text-7xl font-thin">ading....</p>
    </div>
  );
};

export default Spinner;
