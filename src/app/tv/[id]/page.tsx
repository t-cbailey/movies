import React from "react";
import { getProgData } from "@/utils/getData";
import { Prog } from "@/types";
import Image from "next/image";
import generateImgUrl from "@/utils/images/generateImgUrl";

type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const prog: Prog = await getProgData(`tv/${id}`);
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
