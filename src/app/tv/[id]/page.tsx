import React from "react";
import { getTvData } from "@/lib/getData";
import { Prog, Tv } from "@/types";
import Image from "next/image";
import generateImgUrl from "@/utils/images/generateImgUrl";

type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const progData = await getTvData(`/tv/${id}`, "tv");
  const prog: Tv = progData[0];

  if (!prog) {
    return <h2 className="mt-24">Nothing found</h2>;
  }
  const imgUrl = generateImgUrl(200, prog.poster_path);
  return (
    <div className="mt-24 text white">
      <h1>{prog.name}</h1>
      <Image src={imgUrl} alt={prog.name} width={200} height={300} />
    </div>
  );
}
