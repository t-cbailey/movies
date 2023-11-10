import React from "react";
import PersonCardSm from "./PersonCardSm";
import { Credit } from "@/types";

type Props = { cast: Credit[] };

export default function CastDropDown({ cast }: Props) {
  return (
    <ul className="flex m:flex-row flex-wrap bg-gray-950 ml-[5%] w-[90%]">
      {cast.map((person, i) => {
        return (
          <li key={i} className="l:w-1/4 p-2 m:w-1/3 w-full">
            <PersonCardSm person={person} />
          </li>
        );
      })}
    </ul>
  );
}
