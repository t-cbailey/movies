import React from "react";
import { getMovieData, getCastData } from "@/lib/getData";
import { Movie, Credit } from "@/types";
import MoreDetailsMov from "@/app/components/Movies/MoreDetailsMov";
import MovieDetails from "@/app/components/Movies/MovieCardLg";

type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const progData = await getMovieData(`movie/${id}`, "movie");
  if (!progData) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }
  const prog: Movie = progData[0];

  const creditsData = await getCastData(`movie/${prog.id}/credits`, "person");
  const cast: Credit[] = creditsData;

  const content = (
    <>
      <div className="mt-24 text white flex flex-row flex-wrap">
        <MovieDetails prog={prog} />
      </div>
      <section>
        <MoreDetailsMov prog={prog} cast={cast} />
      </section>
    </>
  );
  return content;
}
