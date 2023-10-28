import React from "react";
import { getMovieData } from "@/lib/getData";
import { Movie, Prog } from "@/types";
import Image from "next/image";
import generateImgUrl from "@/utils/images/generateImgUrl";
import MoreDetailsMov from "@/app/components/Movies/MoreDetailsMov";
import MovieDetails from "@/app/components/Movies/MovieDetails";

type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const progData = await getMovieData(`movie/${id}`, "movie");

  if (!progData) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }
  const prog: Movie = progData[0];

  console.log(prog);

  const imgUrl = generateImgUrl(200, prog.poster_path);
  const content = (
    <div className="mt-24 text white flex flex-row flex-wrap">
      <Image
        className="ml-2 m-w-1/3 max-h-[300px]"
        src={imgUrl}
        alt={prog.title}
        width={200}
        height={300}
      />
      <MovieDetails prog={prog} />
      <section>
        <MoreDetailsMov prog={prog} />
      </section>
    </div>
  );
  return content;
}
