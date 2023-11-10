import React from "react";
import { Person } from "@/types";
import Link from "next/link";
import IMG from "../PersonIMG";

type Props = { person: Person };

export default function PersonCard({ person }: Props) {
  return (
    <Link href={`/person/${person.id}`}>
      <IMG person={person} />
      <h4 className="text-white w-4/5 pl-2 pt-2 text-sm line-clamp-3  text-ellipsis">
        {person.name}
      </h4>
      <p className="pl-2 text-white">{person.popularity} ❤️</p>
    </Link>
  );
}
