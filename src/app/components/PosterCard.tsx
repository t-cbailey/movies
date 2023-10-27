"use client";
import React from "react";
import { Prog, ProgType } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
type Props = { prog: Prog };
import fallbackImg from "../../../public/fallbackImg.png";

export default function PosterCard({ prog }: Props) {
  const { type } = prog;

  console.log(type);

  const imgUrl = generateImgUrl(
    200,
    type === "person" ? prog.profile_path : prog.poster_path
  );

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
      </Link>
    </>
  );
}
