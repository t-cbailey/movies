"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import MovieGenreDropdown from "./GenreDropdown";
import { Genre, Person } from "@/types";
import Link from "next/link";

type Props = {
  genres: { movie: Genre[]; tv: Genre[] };
  trendingPeople: Person[];
};

export default function MainDropdown({ genres, trendingPeople }: Props) {
  const itemClasses = {
    title: "s:text-2xl font-normal text-orange-600 hover:text-orange-300",
  };
  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem key="1" aria-label="Genres" title="Genres">
        <MovieGenreDropdown genres={genres} />
      </AccordionItem>
      <AccordionItem key="2" aria-label="People" title="People">
        <Accordion itemClasses={itemClasses}>
          <AccordionItem key="1" aria-label="Trending" title="Trending">
            <ul>
              {trendingPeople.map((person, i) => {
                return (
                  <Link key={i} href={`/person/${person.id}`}>
                    <li className="hover:text-orange-200 s:text-xl text-white">
                      {person.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </AccordionItem>
        </Accordion>
      </AccordionItem>
    </Accordion>
  );
}
