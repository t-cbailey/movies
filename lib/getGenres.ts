import api from "@/utils/axios/axiosConfig";
import { Genre } from "@/types";

export default async function getGenres() {
  const fetchMovGenres = await api
    .get("genre/movie/list")
    .catch(function (error) {
      if (error.response) {
        console.log(error.toJSON());
      }
    });
  const fetchTvGenres = await api.get("genre/tv/list").catch(function (error) {
    if (error.response) {
      console.log(error.toJSON());
    }
  });

  const res = await Promise.all([fetchMovGenres, fetchTvGenres]);

  let genres: { movie: Genre[]; tv: Genre[] } = { movie: [], tv: [] };

  if (res) genres = { movie: res[0]?.data.genres, tv: res[1]?.data.genres };

  return genres;
}
