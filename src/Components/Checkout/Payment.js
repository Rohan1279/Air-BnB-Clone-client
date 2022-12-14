import React from "react";

const Payment = ({ handleBooking }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">Payment Selection</h1>

      <textarea
        className="border block my-5 p-2"
        placeholder="Insert your payment credentials here!"
        name=""
        id=""
        cols="60"
        rows="10"
      ></textarea>

      <button
        className="py-2 px-4 rounded-md hover:text-gray-100 bg-gradient-to-r from-pink-500 to-rose-400 text-white active:scale-95 transition-all"
        onClick={handleBooking}
      >
        Pay
      </button>
    </>
  );
};

export default Payment;
