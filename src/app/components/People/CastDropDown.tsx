import React from "react";
import generateImgUrl from "@/utils/images/generateImgUrl";
import PersonCardSm from "./PersonCardSm";
import { Credit } from "@/types";

type Props = { cast: Credit[] };

export default function CastDropDown({ cast }: Props) {
  return (
    <ul className="flex flex-row flex-wrap bg-gray-950 ml-[5%] w-[90%]">
      {cast.map((person, i) => {
        const imgUrl = generateImgUrl(200, person.profile_path);
        return (
          <li key={i} className="l:w-1/4 p-2 w-1/3">
            <PersonCardSm person={person} imgUrl={imgUrl} />
          </li>
        );
      })}
    </ul>
  );
}
