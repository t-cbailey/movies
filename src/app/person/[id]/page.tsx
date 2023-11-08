import PersonCardLg from "@/app/components/People/PersonCardLg";
import React from "react";
import { getPersonData, getCastData } from "@/lib/getData";
import MoreDetailsPerson from "@/app/components/People/MoreDetailsPerson";
import { Tv, Movie, Person } from "@/types";
import Back from "@/app/components/Back";

type Params = { params: { id: string } };

export async function generateMetadata({ params: { id } }: Params) {
  const person = await getPersonData(`person/${id}`, "person");
  if (person) {
    return { title: `${person[0].name} ` };
  } else return { title: `Not Found` };
}

const revalidate = 86000;

export async function generateStaticParams() {
  const people: Person[] = await getPersonData("trending/person/day", "person");

  if (people) {
    return people.map((person) => {
      return { id: person.id.toString() };
    });
  } else return [];
}

export default async function Page({ params: { id } }: Params) {
  const person = await getPersonData(`person/${id}`, "person");

  if (!person) {
    return <p className="">Content for id:{id} Not Found</p>;
  }

  const fetchMovieCreditData = getCastData(
    `person/${id}/movie_credits`,
    "movie"
  );
  const movieCredits: Movie[] = await fetchMovieCreditData;
  const tvCredits: Tv[] = await getCastData(`person/${id}/tv_credits`, "tv");

  const credits = [...movieCredits, ...tvCredits];

  return (
    <>
      <Back />
      <section className=" ml-4">
        <PersonCardLg person={person[0]} />
      </section>
      <section className=" ml-4 mr-4">
        <MoreDetailsPerson person={person[0]} credits={credits} />
      </section>
    </>
  );
}
