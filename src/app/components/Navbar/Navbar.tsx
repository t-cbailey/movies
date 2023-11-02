import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BurgerDropdown from "./BurgerDropdown";
import { Genre, Person } from "@/types";
import { getGenres } from "@/lib/getGenres";
import { getPersonData } from "@/lib/getData";

export async function Navbar() {
  // const [input, setInput] = React.useState("");
  // const router = useRouter();

  // const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   const value = e.target.value;
  //   setInput(value);
  // };

  // const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  //   e.preventDefault();
  //   input.length < 1 ? router.push(`/`) : router.push(`/search/${input}`);
  // };

  const genres: { movie: Genre[]; tv: Genre[] } = await getGenres();
  const trendingPeople: Person[] = await getPersonData(
    `trending/person/day`,
    "person"
  );

  return (
    <nav className="flex flex-row top-0 fixed w-screen l:justify-around border-b border-slate-800 items-center z-50 bg-black flex-nowrap">
      <Link href="/">
        <h1 className="text-orange-400 text-l m:text-3xl mx-2 m:mx-5 m:my-4 border p-1 hover:border-orange-400 hover:text-white">
          TMD
        </h1>
      </Link>
      {/* <form className="my-2 ">
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
      </form> */}
      {/* <BurgerDropdown genres={genres} trendingPeople={trendingPeople} /> */}
    </nav>
  );
}
