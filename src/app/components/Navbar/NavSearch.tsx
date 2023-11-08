"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NavSearch() {
  const [input, setInput] = React.useState("");
  const router = useRouter();
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    input.length < 1 ? router.push(`/`) : router.push(`/search/${input}`);
  };

  return (
    <form className="my-2 mx-4 s:flex-grow l:flex-initial">
      <input
        type="text"
        placeholder="Search"
        className="rounded-l-lg focus:outline-none p-2 hover:bg-slate-50 text-black s:w-[60%]"
        onChange={handleInputChange}
        name="searchBar"
      />
      <button
        className="bg-white rounded-r-lg p-2  hover:bg-slate-50"
        onClick={handleSubmit}
      >
        🔍
      </button>
    </form>
  );
}
