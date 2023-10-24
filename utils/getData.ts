import api from "./axios/axiosConfig";

export const getProgData = async (path: string) => {
  const fetchData = api.get(path);
  const res = await fetchData;
  return res.data.results;
};
