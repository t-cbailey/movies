import PersonCardLg from "@/app/components/People/PersonCardLg";
import React from "react";
import { getPersonData, getCastData } from "@/lib/getData";
import MoreDetailsPerson from "@/app/components/People/MoreDetailsPerson";
import { Tv, Movie } from "@/types";

type Params = { params: { id: string } };

export function generateMetadata({ params: { id } }: Params) {
  return { title: `Person with Id: ${id} ` };
}

export default async function Page({ params: { id } }: Params) {
  const fetchData = getPersonData(`person/${id}`, "person");
  const person = await fetchData;

  const fetchMovieCreditData = getCastData(
    `person/${id}/movie_credits`,
    "movie"
  );
  const movieCredits: Movie[] = await fetchMovieCreditData;
  const tvCredits: Tv[] = await getCastData(`person/${id}/tv_credits`, "tv");

  const credits = [...movieCredits, ...tvCredits];

  return (
    <>
      <section className="mt-24 m:ml-4">
        <PersonCardLg person={person[0]} />
      </section>
      <section className=" m:ml-4 mr-4">
        <MoreDetailsPerson person={person[0]} credits={credits} />
      </section>
    </>
  );
}
