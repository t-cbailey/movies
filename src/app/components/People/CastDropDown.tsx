import React from "react";
import generateImgUrl from "@/utils/images/generateImgUrl";
import PersonCardSm from "./PersonCardSm";
import { Credit } from "@/types";

type Props = { cast: Credit[] };

export default function CastDropDown({ cast }: Props) {
  return (
    <ul className="flex flex-row flex-wrap bg-gray-900 m:justify-center">
      {cast.map((person, i) => {
        const imgUrl = generateImgUrl(200, person.profile_path);
        return (
          <li key={i}>
            <PersonCardSm person={person} imgUrl={imgUrl} />
          </li>
        );
      })}
    </ul>
  );
}
