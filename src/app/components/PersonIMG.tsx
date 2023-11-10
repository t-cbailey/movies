"use client";
import React from "react";
import fallbackImg from "../../../public/fallbackImg.png";
import LoadingSpinner from "./LoadingSpinner";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import { Credit, Person } from "@/types";

type Props = { person: Person | Credit };

export default function PersonIMG({ person }: Props) {
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
    <>
      <div className="max-w-full h-auto relative">
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
            width: "200px",
            height: "auto",
            zIndex: 1,
            position: "relative",
          }}
        />
      </div>
    </>
  );
}
