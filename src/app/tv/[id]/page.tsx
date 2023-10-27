import React from "react";
import { getTvData } from "@/lib/getData";
import { Prog, Tv } from "@/types";
import Image from "next/image";
import generateImgUrl from "@/utils/images/generateImgUrl";

type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const prog = await getTvData(`/tv/${id}`, "tv");

  if (!prog) {
    return "nothing found";
  }
  const imgUrl = generateImgUrl(200, prog.poster_path);
  return (
    <div className="mt-24 text white">
      <h1>{prog.title}</h1>
      <Image
        src={imgUrl}
        alt={prog.name || "programme poster"}
        width={200}
        height={300}
      />
    </div>
  );
}
