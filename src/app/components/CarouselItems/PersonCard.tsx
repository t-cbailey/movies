"use client";
import React from "react";
import { Person } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
import fallbackImg from "../../../../public/fallbackImg.png";

type Props = { person: Person };

export default function PersonCard({ person }: Props) {
  const { type } = person;
  const imgUrl = generateImgUrl(200, person.profile_path);

  const fallback = fallbackImg,
    alt = "personImg",
    src = imgUrl;

  const [error, setError]: any = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [src]);
  return (
    <Link href={`/person/${person.id}`}>
      <Image
        onError={setError}
        src={error ? fallback : src}
        alt={alt}
        width={200}
        height={300}
      />
      <h4 className="text-white w-4/5 pl-2 pt-2 text-sm line-clamp-3  text-ellipsis">
        {person.name}
      </h4>
      <p className="pl-2 text-white">{person.popularity} ❤️</p>
    </Link>
  );
}
