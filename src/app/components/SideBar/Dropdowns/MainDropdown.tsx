"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import MovieGenreDropdown from "./GenreDropdown";
import { Genre } from "@/types";

type Props = { genres: { movie: Genre[]; tv: Genre[] } };

export default function MainDropdown({ genres }: Props) {
  const itemClasses = {
    title: "font-normal text-orange-600 hover:text-orange-300",
  };
  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem key="1" aria-label="Genres" title="Genres">
        <MovieGenreDropdown genres={genres} />
      </AccordionItem>
      <AccordionItem key="2" aria-label="People" title="People"></AccordionItem>
      <AccordionItem key="3" aria-label="Year" title="Year"></AccordionItem>
    </Accordion>
  );
}
