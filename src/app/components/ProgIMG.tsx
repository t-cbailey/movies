"use client";
import React from "react";
import fallbackImg from "../../../public/fallbackImg.png";
import LoadingSpinner from "./LoadingSpinner";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import { Tv, Movie, Credit, Season, Episode } from "@/types";

type Props = { prog: Tv | Movie | Credit | Season };

export default function ProgIMG({ prog }: Props) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError]: any = React.useState(null);

  let imgUrl = "";

  if (prog.poster_path) {
    imgUrl = generateImgUrl(200, prog.poster_path);
  } else imgUrl = "/../../../../public/fallbackImg.png";

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
    <>
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
    </>
  );
}
