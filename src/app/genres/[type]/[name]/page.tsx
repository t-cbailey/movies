import React from "react";
import api from "@/utils/axios/axiosConfig";
import { Genre, Prog, ProgType } from "@/types";
import { getTvData, getMovieData } from "@/lib/getData";
import PosterCard from "@/app/components/CarouselItems/PosterCard";
import getGenres from "@/lib/getGenres";
import { addProgType } from "@/utils/addProgType/addProgType";

type Props = { params: { type: ProgType; name: string } };

export default async function PageByGenre({ params: { type, name } }: Props) {
  const genreName = name.replaceAll("_", " ").replaceAll("%26", "&");
  const genreList = await getGenres();
  const mediaType = type as keyof typeof genreList;
  const genreArr: Genre[] = genreList[mediaType];
  const genreId = genreArr.find((genre) => {
    return genreName === genre.name;
  })?.id;

  let progs: Prog[] = [];

  if (type === "movie") {
    progs = await getMovieData(
      `/discover/${type}?with_genres=${genreId}`,
      type
    );
  }
  if (type === "tv") {
    progs = await getTvData(`/discover/${type}?with_genres=${genreId}`, type);
  }

  if (!genreId)
    return (
      <h2 className="mt-24">{`Nothing found with genre "${genreName}"`}</h2>
    );

  if (progs) {
    return (
      <>
        <section>
          <h2 className="mt-24 mb-4 text-3xl text-orange-300">
            {`${genreName} ${type === "tv" ? "Programmes" : "Movies"}`}
          </h2>
          <ul className="flex flex-row flex-wrap">
            {progs.map((prog) => {
              return (
                <React.Fragment key={prog.id}>
                  <li className="m-2 hover:border-2 hover:transform hover:scale-110 max-w-posterCard">
                    <PosterCard prog={prog} />
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </section>
      </>
    );
  }
}
