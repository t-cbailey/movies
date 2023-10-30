import { StdioNull } from "child_process";

type Prog = Movie | Tv | Person;

type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string[] | null;
  budget: 9000000;
  genres: [{ id: number; name: "string" }];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [{ iso_3166_1: string; name: string }];
  release_date: string;
  revenue: 39723096;
  runtime: 113;
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  type: "movie";
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

type Credit = {
  adult: boolean;
  cast_id: string;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  type: "person";
};

type Genre = {
  id: number;
  name: string;
};

type ProgType = "person" | "tv" | "movie";
