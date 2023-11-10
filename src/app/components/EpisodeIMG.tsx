"use client";
import React from "react";
import fallbackImgSM from "../../../public/fallbackImgSM.png";
import LoadingSpinner from "./LoadingSpinner";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import { Episode } from "@/types";

type Props = { episode: Episode };

export default function EpisodeIMG({ episode }: Props) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError]: any = React.useState(null);

  let imgUrl = "";

  if (episode.still_path) {
    imgUrl = generateImgUrl(200, episode.still_path);
  } else imgUrl = "/../../../../public/fallbackImgSM.png";

  const fallback = fallbackImgSM,
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
      <div className="w-[200px] h-[113px] relative m-2">
        {loading && <LoadingSpinner />}
        <Image
          unoptimized={true}
          onError={setError}
          src={error ? fallback : src}
          alt={alt}
          width={200}
          height={113}
          onLoad={onImageLoad}
          style={{
            zIndex: 1,
            position: "relative",
          }}
        />
      </div>
    </>
  );
}
