"use client";
import React from "react";

function Pagination({ days, getplanday }) {
  return (
    <div className="join flex justify-center border-blue-800 my-[4rem]">
      {days.map((day, index) => (
        <input
          className="join-item btn btn-square bg-blue-700 text-white hover:bg-blue-600 w-[10rem]"
          type="radio"
          name="options"
          aria-label={day}
          key={index}
          onClick={() => getplanday(day)}
        />
      ))}
    </div>
  );
}

export default Pagination;
