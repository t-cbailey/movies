"use client";
import React from "react";
import EpisodesDropdown from "@/app/components/Tv/EpisodesDropdown";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Season, Credit } from "@/types";
import CastDropDown from "../People/CastDropDown";

type Props = { season: Season; cast: Credit[] };

const itemClasses = {
  title: "font-normal text-orange-600 hover:text-orange-300",
};

export default function MoreDetailsSeason({ season, cast }: Props) {
  return (
    <>
      <Accordion itemClasses={itemClasses}>
        <AccordionItem key="1" aria-label="Episodes" title="Episodes">
          <EpisodesDropdown season={season} />
        </AccordionItem>
        <AccordionItem key="2" aria-label="Cast" title="Cast">
          <CastDropDown cast={cast} />
        </AccordionItem>
      </Accordion>
    </>
  );
}
