import React from "react";
import Link from "next/link";
import BurgerDropdown from "./BurgerDropdown";
import { Genre, Person } from "@/types";
import { getGenres } from "@/lib/getGenres";
import { getPersonData } from "@/lib/getData";
import NavSearch from "./NavSearch";

export async function Navbar() {
  const genres: { movie: Genre[]; tv: Genre[] } = await getGenres();
  const trendingPeople: Person[] = await getPersonData(
    `trending/person/day`,
    "person"
  );
  return (
    <nav className="flex flex-row l:justify-around top-0 fixed w-screen h-16  border-b border-slate-800 items-center z-50 bg-black flex-nowrap">
      <Link href="/">
        <h1 className="text-orange-400 text-l m:text-3xl mx-2 m:mx-5 m:my-4 border p-1 hover:border-orange-400 hover:text-white">
          TMD
        </h1>
      </Link>
      <NavSearch />
      <BurgerDropdown genres={genres} trendingPeople={trendingPeople} />
    </nav>
  );
}
