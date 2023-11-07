"use client";
import React from "react";
import { Person } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
import fallbackImg from "../../../../public/fallbackImg.png";
import LoadingSpinner from "../LoadingSpinner";

type Props = { person: Person };

export default function PersonCard({ person }: Props) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError]: any = React.useState(null);
  const imgUrl = generateImgUrl(200, person.profile_path);

  const fallback = fallbackImg,
    alt = "personImg",
    src = imgUrl;

  function onImageLoad() {
    setLoading(false);
  }

  React.useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Link href={`/person/${person.id}`}>
      <div>
        {loading && <LoadingSpinner />}
        <Image
          onError={setError}
          src={error ? fallback : src}
          alt={alt}
          width={200}
          height={300}
          onLoad={onImageLoad}
          style={{
            width: "200px",
            height: "auto",
            zIndex: 1,
            position: "relative",
          }}
        />
      </div>
      <h4 className="text-white w-4/5 pl-2 pt-2 text-sm line-clamp-3  text-ellipsis">
        {person.name}
      </h4>
      <p className="pl-2 text-white">{person.popularity} ❤️</p>
    </Link>
  );
}
