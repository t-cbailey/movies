import React from "react";
import api from "@/utils/axios/axiosConfig";
import { Genre, Prog } from "@/types";
import { getProgData } from "@/lib/getData";
import PosterCard from "@/app/components/PosterCard";
import getGenres from "@/lib/getGenres";

type Props = { params: { name: string; type: string } };

export default async function PageByGenre({ params: { name, type } }: Props) {
  const genreList = await getGenres();
  const mediaType = type as keyof typeof genreList;
  const genreArr: Genre[] = genreList[mediaType];
  const genreObj = genreArr.filter((genre) => {
    return genre.name === name;
  });
  const genreId = genreObj[0]?.id;
  const progs: Prog[] = await getProgData(
    `/discover/${type}?with_genres=${genreId}`
  );

  if (!genreObj[0]) return <h2 className="mt-24">Nothing found</h2>;

  return (
    <>
      <section>
        <h2 className="mt-24">{name}</h2>
        <ul className="flex flex-row flex-wrap">
          {progs.map((prog) => {
            return (
              <React.Fragment key={prog.id}>
                <li className="m-2">
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
