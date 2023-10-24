"use client";

import React from "react";

export function Navbar() {
  const [input, setInput] = React.useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {};

  return (
    <nav className="flex flex-row top-0 fixed w-screen justify-around border-b border-slate-800 items-center z-50 bg-black">
      <h1 className="text-white text-3xl mx-5 my-4">TMD</h1>
      <form className="my-2 ">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-lg focus:outline-none p-2 hover:bg-slate-50 text-black"
          onChange={handleInputChange}
        />
        <button
          className="bg-white rounded-r-lg p-2  hover:bg-slate-50"
          onClick={handleSubmit}
        >
          🔍
        </button>
      </form>
    </nav>
  );
}
