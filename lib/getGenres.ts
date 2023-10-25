import api from "@/utils/axios/axiosConfig";

export default async function getGenres(query: string) {
  const res = await api.get(query);
  console.log(res);
  return res;
}
