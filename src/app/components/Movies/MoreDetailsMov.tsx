"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Movie } from "@/types";
import Link from "next/link";

type Props = { prog: Movie };

export default function MoreDetailsMov({ prog }: Props) {
  const itemClasses = {
    title: "font-normal text-orange-600 hover:text-orange-300",
  };

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem key="1" aria-label="Cast" title="Cast"></AccordionItem>

      <AccordionItem key="2" aria-label="More Details" title="More Details">
        <section className="flex flex-row">
          <section>
            <h4 className="text-lg text-orange-600 mb-1">Studios</h4>
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
        </section>
      </AccordionItem>
    </Accordion>
  );
}
