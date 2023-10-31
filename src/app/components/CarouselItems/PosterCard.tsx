"use client";
import { Prog, ProgType } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import fallbackImg from "../../../../public/fallbackImg.png";

type Props = { prog: Prog };

export default function PosterCard({ prog }: Props) {
  const { type } = prog;

  const imgUrl = generateImgUrl(200, prog.poster_path);

  const fallback = fallbackImg,
    alt = "prog.name",
    src = imgUrl;

  const [error, setError]: any = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <>
      <Link href={`/${type}/${prog.id}`}>
        <Image
          onError={setError}
          src={error ? fallback : src}
          alt={alt}
          width={200}
          height={300}
        />
        <h4 className="text-white w-4/5 pl-2 pt-2 text-sm line-clamp-3  text-ellipsis">
          {type === "movie" ? prog.title : prog.name}
        </h4>
        <p className="pl-2 text-white">
          {Math.round(prog.vote_average * 10) / 10} ⭐
        </p>
      </Link>
    </>
  );
}
