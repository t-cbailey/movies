import api from "@/utils/axios/axiosConfig";

export default async function getGenres() {
  const fetchGenres = await api.get("genre/movie/list").catch(function (error) {
    if (error.response) {
      console.log(error.toJSON());
    }
  });

  const res = await fetchGenres;

  return res && res.data.genres;
}
