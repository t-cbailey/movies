import React from "react";
import { Prog } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
type Props = { prog: Prog };

export default function PosterCard({ prog }: Props) {
  const imgUrl = generateImgUrl(200, prog.poster_path);

  return (
    <>
      <Image
        src={imgUrl}
        alt={prog.name || "promramme poster"}
        width={200}
        height={300}
      />
    </>
  );
}
