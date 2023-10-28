import React from "react";
import { getMovieData } from "@/lib/getData";
import { Movie, Prog } from "@/types";

import generateImgUrl from "@/utils/images/generateImgUrl";
import MoreDetailsMov from "@/app/components/Movies/MoreDetailsMov";
import MovieDetails from "@/app/components/Movies/MovieCardLg";

type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const progData = await getMovieData(`movie/${id}`, "movie");

  if (!progData) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }
  const prog: Movie = progData[0];

  const content = (
    <>
      <div className="mt-24 text white flex flex-row flex-wrap">
        <MovieDetails prog={prog} />
      </div>
      <section>
        <MoreDetailsMov prog={prog} />
      </section>
    </>
  );
  return content;
}
