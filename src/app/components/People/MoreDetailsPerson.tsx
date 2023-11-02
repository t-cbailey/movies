"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Tv, Movie, Person } from "@/types";
import PosterCard from "../CarouselItems/PosterCard";

const itemClasses = {
  title: "font-normal text-orange-600 hover:text-orange-300",
};

type Props = { person: Person; credits: (Tv | Movie)[] };

export default function MoreDetailsPerson({ person, credits }: Props) {
  return (
    <>
      <Accordion itemClasses={itemClasses}>
        <AccordionItem key="1" aria-label="Bio" title="Bio">
          <section>{person.biography}</section>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Top Appearances"
          title="Top Appearances"
        >
          <ul className="s:justify-center m:justify-start flex flex-row flex-wrap mt-4 m:w-[90%] m:ml-[5%] ">
            {credits
              .filter((credit) => {
                return credit.popularity > 5;
              })
              .sort((a, b) => {
                if (a.popularity < b.popularity) return 1;
                if (b.popularity < a.popularity) return -1;
                else return 0;
              })
              .map((credit, i) => {
                return (
                  <React.Fragment key={i}>
                    <li className="m-2 hover:border-2 hover:transform hover:scale-110 max-w-posterCard mb-4">
                      <PosterCard prog={credit} />
                      <p className="ml-2 ">{credit.character}</p>
                    </li>
                  </React.Fragment>
                );
              })}
          </ul>
        </AccordionItem>
      </Accordion>
    </>
  );
}
