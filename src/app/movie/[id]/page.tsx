import React from "react";
import { getMovieData } from "@/lib/getData";
import { Movie, Prog } from "@/types";
import Image from "next/image";
import generateImgUrl from "@/utils/images/generateImgUrl";

type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const progData = await getMovieData(`movie/${id}`, "movie");
  const prog: Movie = progData[0];

  if (!prog) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }

  const imgUrl = generateImgUrl(200, prog.poster_path);
  const content = (
    <div className="mt-24 text white">
      <h1>{prog.title}</h1>
      <Image src={imgUrl} alt={prog.title} width={200} height={300} />
    </div>
  );
  return content;
}
