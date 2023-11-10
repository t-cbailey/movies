import React from "react";
import { Person } from "@/types";
import PersonIMG from "../PersonIMG";

type Props = { person: Person };

export default function PersonCardLg({ person }: Props) {
  return (
    <>
      <div className="flex m:flex-row m:flex-wrap m:items-center flex-col place-items-center s:justify-center s:text-center m:justify-start m:text-left">
        <PersonIMG person={person} />
        <section className="m-4 m:w-2/3">
          <div className="flex flex-row flex-wrap items-end">
            <h2 className="text text-6xl font-bold m:mr-4">{person.name}</h2>
            <span className="text-base font-normal">
              {Math.round(person.popularity * 10) / 10} ❤️
            </span>
          </div>
          <p className="text-base italic">{person.known_for_department}</p>
          <p className="mt-4">
            🎂 {person.birthday}{" "}
            {person.deathday ? (
              <p className="mt-4">- {person.deathday}</p>
            ) : null}{" "}
          </p>

          <p className="mt-4">{person.place_of_birth}</p>
        </section>
      </div>
    </>
  );
}
