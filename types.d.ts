import { StdioNull } from "child_process";

type Prog = Movie | Tv | Person;

type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  title: string;
  type: "movie";
  original_title: string;
  release_date: string;
  video: boolean;
};

type Tv = {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  type: "tv";
};

type Person = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: Prog[];
  type: "person";
};

type Genre = {
  id: number;
  name: string;
};

type ProgType = "person" | "tv" | "movie";
