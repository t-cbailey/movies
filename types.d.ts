import { StdioNull } from "child_process";
import { type } from "os";

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
  created_by: [
    {
      id: number;
      credit_id: string;
      name: string;
      gender: number;
      profile_path: string;
    }
  ];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: Episode;
  networks: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: null | string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [{ iso_3166_1: string; name: string }];
  seasons: [
    {
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      season_number: number;
      vote_average: number;
    }
  ];
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  type: "tv";
};

type Episode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

type Season = {
  _id: number;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
  type: ProgType;
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
