"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Genre } from "@/types";
import Link from "next/link";

type Props = { genres: { movie: Genre[]; tv: Genre[] } };

export default function GenreDropdown({ genres }: Props) {
  const itemClasses = {
    title: "font-normal text-orange-600 hover:text-orange-300",
  };
  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem key="1" aria-label="Movies" title="Movies">
        <ul>
          {genres.movie.map((genre, i) => {
            return (
              <li className="hover:text-orange-200">
                <Link
                  href={`/genres/movie/${genre.name}`}
                >{` ${genre.name}`}</Link>
              </li>
            );
          })}
        </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Tv" title="Tv">
        <ul>
          {genres.tv.map((genre, i) => {
            return (
              <li className="hover:text-orange-200">
                <Link
                  href={`/genres/movie/${genre.name}`}
                >{` ${genre.name}`}</Link>
              </li>
            );
          })}
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
