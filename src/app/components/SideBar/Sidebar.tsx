import React from "react";
import getGenres from "@/lib/getGenres";
import { Genre } from "@/types";
import Link from "next/link";
import Dropdown from "./Dropdowns/MainDropdown";

export default async function Sidebar() {
  const genres: { movie: Genre[]; tv: Genre[] } = await getGenres();

  return (
    <div className=" grid col-span-1 mr-7 pt-24 s:hidden border-r border-slate-800 sticky top-0 h-screen">
      <section className="pl-4 overflow-y-scroll">
        <Dropdown genres={genres} />
      </section>
    </div>
  );
}
