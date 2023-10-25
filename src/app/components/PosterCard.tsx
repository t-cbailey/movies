import React from "react";
import { Prog } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
type Props = { prog: Prog; type: "movie" | "tv" };

export default function PosterCard({ prog, type }: Props) {
  const imgUrl = generateImgUrl(200, prog.poster_path);

  return (
    <>
      <Link href={`${type}/${prog.id}`}>
        <Image
          src={imgUrl}
          alt={prog.name || "programme poster"}
          width={200}
          height={300}
        />
      </Link>
    </>
  );
}
