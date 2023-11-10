"use client";
import { Credit, Movie, Tv } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import fallbackImg from "../../../../public/fallbackImg.png";
import LoadingSpinner from "../LoadingSpinner";

type Props = { prog: Tv | Movie | Credit };

export default function PosterCard({ prog }: Props) {
  const { type } = prog;
  const [loading, setLoading] = React.useState(true);
  const [error, setError]: any = React.useState(null);

  let imgUrl = "";

  if (prog.poster_path) {
    imgUrl = generateImgUrl(200, prog.poster_path);
  } else imgUrl = "/../../../../public/fallbackImg.png";

  const fallback = fallbackImg,
    alt = "progImg",
    src = imgUrl;

  function onImageLoad() {
    setLoading(false);
  }

  React.useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <>
      <Link href={`/${type}/${prog.id}`}>
        <div className="max-w-full h-auto relative m-2">
          {loading && <LoadingSpinner />}
          <Image
            unoptimized={true}
            onError={setError}
            src={error ? fallback : src}
            alt={alt}
            width={200}
            height={300}
            onLoad={onImageLoad}
            style={{
              zIndex: 1,
              position: "relative",
              width: "200px",
              height: "auto",
            }}
          />
        </div>

        <h4 className="text-white w-4/5 pl-2 pt-2 text-sm line-clamp-3  text-ellipsis">
          {type === "movie" ? prog.title : prog.name}
        </h4>
        {prog.vote_average && (
          <p className="pl-2 text-white">
            {Math.round(prog.vote_average * 10) / 10} ⭐
          </p>
        )}
      </Link>
    </>
  );
}
