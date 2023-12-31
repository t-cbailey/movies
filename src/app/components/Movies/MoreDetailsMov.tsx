"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Movie, Credit } from "@/types";
import Link from "next/link";
import CastDropDown from "../People/CastDropDown";

type Props = {
  prog: Movie;
  cast: Credit[];
};

export default function MoreDetailsMov({ prog, cast }: Props) {
  const itemClasses = {
    title: "font-normal text-orange-600 hover:text-orange-300",
  };

  const topCast = cast
    .sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      if (b.popularity < a.popularity) return -1;
      else return 0;
    })
    .slice(0, 10);

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem key="1" aria-label="Cast" title="Top Cast">
        <CastDropDown cast={topCast} />
      </AccordionItem>

      <AccordionItem key="2" aria-label="More Details" title="More Details">
        <div className="flex flex-col">
          <section className="ml-4 mb-4">
            <p className="text-lg text-orange-400 mb-1">
              Release Date:
              <span className="text-white"> {prog.release_date}</span>
            </p>
          </section>
          <section className="ml-4 mb-4">
            <p className="text-lg text-orange-400 mb-1">
              Budget: <span className="text-white">{prog.budget}</span>
            </p>
          </section>
          <section className="ml-4 mb-4">
            <p className="text-lg text-orange-400 mb-1">
              Revenue: <span className="text-white">${prog.revenue}</span>
            </p>
          </section>
          <section className="ml-4">
            <h4 className="text-lg text-orange-400 mb-1">Studios:</h4>
            <ul className="m-w-1/4">
              {prog.production_companies.map((company, i) => {
                return (
                  <React.Fragment key={i}>
                    <Link href={`/studio/${company.id}`}>
                      <li className="hover:text-orange-200">{company.name}</li>
                    </Link>
                  </React.Fragment>
                );
              })}
            </ul>
          </section>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
