import React from "react";
import { Person } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";

type Props = { person: Person };

export default function PersonCardLg({ person }: Props) {
  const imgUrl = generateImgUrl(200, person.profile_path);
  return (
    <>
      <div className="flex flex-row flex-wrap items-center">
        <Image
          className="ml-2"
          style={{ maxHeight: 300, maxWidth: "auto" }}
          src={imgUrl}
          alt={person.name}
          width={200}
          height={300}
        />
        <section className="m-4 w-2/3">
          <div className="flex flex-row flex-wrap items-end">
            <h2 className="text text-6xl font-bold mr-4">{person.name}</h2>
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
