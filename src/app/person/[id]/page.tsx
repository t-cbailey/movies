import PersonCardLg from "@/app/components/People/PersonCardLg";
import React from "react";
import { getPersonData, getCastData } from "@/lib/getData";
import MoreDetailsPerson from "@/app/components/People/MoreDetailsPerson";

type Params = { params: { id: string } };

export default async function Page({ params: { id } }: Params) {
  const fetchData = getPersonData(`person/${id}`, "person");
  const person = await fetchData;

  const fetchMovieCreditData = getCastData(
    `person/${id}/movie_credits`,
    "movie"
  );
  const movieCredits = await fetchMovieCreditData;
  const fetchTvCreditData = getCastData(`person/${id}/tv_credits`, "tv");
  const tvCredits = await fetchTvCreditData;

  const credits = [...movieCredits, ...tvCredits];

  return (
    <>
      <section className="mt-24">
        <PersonCardLg person={person[0]} />
      </section>
      <section className="mt-24">
        <MoreDetailsPerson person={person[0]} credits={credits} />
      </section>
    </>
  );
}
