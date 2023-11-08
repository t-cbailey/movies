import React from "react";
import { Genre, Prog, ProgType } from "@/types";
import { getTvData, getMovieData } from "@/lib/getData";
import PosterCard from "@/app/components/CarouselItems/PosterCard";
import { getGenres } from "@/lib/getGenres";

type Props = { params: { type: ProgType; name: string } };

export function generateMetadata({ params: { type, name } }: Props) {
  return { title: `${name} ${type}${type === "movie" ? "s" : ""}` };
}

const revalidate = 86000;

export async function generateStaticParams() {
  const data = await getGenres();
  const mixedGenres = [...data.movie, ...data.tv];
  return mixedGenres.map((genre) => ({
    name: genre.name,
  }));
}

export default async function PageByGenre({ params: { type, name } }: Props) {
  const genreName = name.replaceAll("_", " ").replaceAll("%26", "&");
  const greenlist = ["movie", "tv"];
  if (!greenlist.includes(type)) {
    return <h1 className="mt-24">Genre Not Found</h1>;
  }
  const genreList = await getGenres();
  const mediaType = type as keyof typeof genreList;
  const genreArr: Genre[] = genreList[mediaType];
  const genreId = genreArr.find((genre) => {
    return genreName === genre.name;
  })?.id;
  if (!genreId)
    return (
      <h2 className="mt-24">{`Nothing found with genre "${genreName}"`}</h2>
    );

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

  if (progs) {
    return (
      <>
        <section className="ml-2">
          <h2 className="mt-24 mb-4 text-3xl text-orange-300">
            {`${genreName} ${type === "tv" ? "Programmes" : "Movies"}`}
          </h2>
          <ul className="flex flex-row flex-wrap justify-center">
            {progs.map((prog) => {
              return (
                <React.Fragment key={prog.id}>
                  <li className="m-2 hover:border-2 hover:transform hover:scale-110 s:max-w-[40%] m:max-w-posterCard">
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
