import React from "react";
import { getGenres } from "@/lib/getGenres";
import { Genre, Person } from "@/types";
import MainDropdown from "./Dropdowns/MainDropdown";
import { getPersonData } from "@/lib/getData";

export default async function Sidebar() {
  const genres: { movie: Genre[]; tv: Genre[] } = await getGenres();
  const trendingPeople: Person[] = await getPersonData(
    `trending/person/day`,
    "person"
  );

  return (
    <div className=" l:grid l:col-span-1 mr-7 pt-24 s:hidden m:hidden border-r border-slate-800 sticky top-0 h-screen">
      <section className="pl-4 overflow-y-scroll">
        <MainDropdown genres={genres} trendingPeople={trendingPeople} />
      </section>
    </div>
  );
}
