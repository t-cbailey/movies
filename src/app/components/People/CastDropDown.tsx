import React from "react";
import generateImgUrl from "@/utils/images/generateImgUrl";
import PersonCardSm from "./PersonCardSm";
import { Credit } from "@/types";

type Props = { cast: Credit[] };

export default function CastDropDown({ cast }: Props) {
  return (
    <div className="flex flex-row flex-wrap bg-gray-950">
      {cast.map((person, i) => {
        const imgUrl = generateImgUrl(200, person.profile_path);
        return <PersonCardSm key={i} person={person} imgUrl={imgUrl} />;
      })}
    </div>
  );
}
