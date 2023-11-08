"use client";
import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="h-full w-full flex flex-row  place-items-center place-content-center z-10 absolute ">
      <svg
        className="animate-spin h-8 w-8 text-current"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="white"
        />
      </svg>
    </div>
  );
}
