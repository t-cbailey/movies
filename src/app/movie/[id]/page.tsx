import React from "react";
import { getMovieData, getCastData } from "@/lib/getData";
import { Movie, Credit } from "@/types";
import MoreDetailsMov from "@/app/components/Movies/MoreDetailsMov";
import MovieDetails from "@/app/components/Movies/MovieCardLg";

type Props = { params: { id: string } };

export async function generateMetadata({ params: { id } }: Props) {
  const progData = await getMovieData(`movie/${id}`, "movie");
  if (progData) return { title: `${progData[0].title}` };
  else return { title: "Not Found" };
}

const revalidate = 86000;

export async function generateStaticParams() {
  const [discoverMovies, trendingMovies, popularMovies]: Movie[][] = [
    await getMovieData("discover/movie", "movie"),
    await getMovieData("trending/movie/day", "movie"),
    await getMovieData("movie/top_rated", "movie"),
  ];

  const allMovies = [...discoverMovies, ...trendingMovies, ...popularMovies];
  return allMovies.map((movie) => {
    return { id: movie.id.toString() };
  });
}

export default async function SingleProg({ params: { id } }: Props) {
  const progData = await getMovieData(`movie/${id}`, "movie");
  if (!progData) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }
  const prog: Movie = progData[0];
  const cast: Credit[] = await getCastData(
    `movie/${prog.id}/credits`,
    "person"
  );

  const content = (
    <>
      <div className="mt-24 text white flex flex-row flex-wrap m:max-l:ml-4 ">
        <MovieDetails prog={prog} />
      </div>
      <section className="ml-4">
        <MoreDetailsMov prog={prog} cast={cast} />
      </section>
    </>
  );
  return content;
}
